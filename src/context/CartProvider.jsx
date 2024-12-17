import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { backendUrl, token } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]); // ตรงๆ เลยเป็น Array
  const [loading, setLoading] = useState(true);
  const [addresses, setAddresses] = useState({});
  const [toCheckout, setToCheckout] = useState([]);
  const [update, setUpdate] = useState(false);
  // const cartItems = Object.values(cartData);

  const getCart = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );
      setCartItems(Object.values(response.data.cartData )|| []); // Ensure array fallback
      console.log("TEST", response.data.cartData);
      setUpdate(true);
    } catch (error) {
      console.error("Error fetching cart:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (product, quantity) => {
  try {
    if (!token) return;

    const existingItem = cartItems.find(item => item.productid === (product.id || product.productid));
    const totalPrice = quantity * product.price;
    const prodCart = {
      productid: product.id || product.productid,
      productname: product.productname,
      image: product.image,
      price: product.price,
      quantity,
      totalPrice,
    };
    console.log("quantity", quantity);

    if (existingItem) {
      // Update the existing product in the cart
      await axios.put(
        `${backendUrl}/api/cart/update`,
        { prodCart },
        { headers: { token } }
      );
    } else {
      // Add a new product to the cart
      await axios.post(
        `${backendUrl}/api/cart/add`,
        { prodCart },
        { headers: { token } }
      );
    }
    getCart(); // Refresh cart
  } catch (error) {
    console.error("Error adding to cart:", error.message);
  }
};

  const delCart = async (pid) => {
    try {
      if (!token) return;

      const response = await axios.post(
        `${backendUrl}/api/cart/delete`,
        { productId: pid },
        { headers: { token } }
      );
      // console.log("del ", product);
      //setUpdate(true);
      //getCart();
      //const newCart = cartItems.filter((item) => item.productid !== pid);
      // setCartData(cartItems.filter((item) => item.productid !== pid)); it says undefined maybe the name is changed
      setCartItems(cartItems.filter((item) => item.productid !== pid));
      console.log(response);
      setToCheckout(cartItems.filter((item) => item.productid !== pid));
    } catch (error) {
      console.error("Error deleting cart item:", error.message);
    }
  };

  const getAddress = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/user/address`, {
        headers: { token },
      });
      if (response.data.success) {
        setAddresses(response.data.addresses);
        console.log("Addresses:", addresses);
      } else {
        console.error("Failed to fetch addresses:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getCart();
      getAddress();
    } else {
      setLoading(false);
    }
  }, [token,update]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        getCart,
        addToCart,
        delCart,
        addresses,
        toCheckout,
        setToCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";
import { use } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const { backendUrl, token } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartItems = Object.values(cartData);
  const [update, setUpdate] = useState(false);
  const [addresses, setAddresses] = useState({});
  const [toCheckout, setToCheckout] = useState([]);

  const getCart = async () => {
    try {
      if (!token) {
        console.log(token);
        setLoading(false);
        return null;
      }
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );

      setCartData(response.data.cartData);
      //console.log("raw data: ",  Object.keys(response.data.cartData));
      // console.log(cartData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    if (update) {
      getCart();
      setUpdate(false);
      setLoading(false);
    }
  }, [update]);

  const addToCart = async (product, quantity) => {
    console.log("addToCart called with:", product, quantity);
    try {
      if (!token) {
        console.log(token);
        setLoading(false);
        return null;
      }
      // console.log("prov",product.price,quantity);
      const totalPrice = quantity * product.price;
      const prodCart = {
        productid: product.id || product.productid,
        productname: product.productname,
        image: product.image,
        price: product.price,
        quantity: quantity,
        totalPrice: totalPrice,
      };

      const response = await axios.post(
        backendUrl + "/api/cart/add",
        {
          prodCart,
        },
        {
          headers: { token },
        }
      );

      console.log(response);
      getCart();
      //setUpdate(true);
    } catch (error) {
      console.log(error);
    }
  };

  const delCart = async (pid) => {
    try {
      if (!token) {
        console.log(token);
        setLoading(false);
        return null;
      }

      const response = await axios.post(
        backendUrl + "/api/cart/delete",
        {
          productId: pid,
        },
        { headers: { token } }
      );
      // console.log("del ", product);
      //setUpdate(true);
      //getCart();
      //const newCart = cartItems.filter((item) => item.productid !== pid);
      setCartData(cartItems.filter((item) => item.productid !== pid));
      console.log(response);
      setToCheckout(cartItems.filter((item) => item.productid !== pid));
    } catch (error) {
      console.log(error);
    }
  };

  const getAddress = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/user/address`, {
        headers: { token },
      });
      console.log("Response from getAddress:", response.data);

      if (response.data.success) {
        setAddresses(response.data.addresses);
        console.log("Addresses:", addresses);
      } else {
        console.error("Error message from getAddress:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  useEffect(() => {
    if (token) {
      console.log("Token is valid, calling getCart and getAddress");
      getCart();
      getAddress();
    } else {
      console.log("Token is missing or invalid");
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    console.log("Updated addresses state:", addresses);
  }, [addresses]);

  if (loading) {
    return <div>Loading...</div>; // Return a loading indicator when loading is true
  }
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

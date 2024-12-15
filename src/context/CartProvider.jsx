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
    getCart();
  }, [token]);

  useEffect(() => {
    if (update) {
      getCart();
      setUpdate(false);
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
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Return a loading indicator when loading is true
  }
  return (
    <CartContext.Provider
      value={{ cartItems, loading, getCart, addToCart, delCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

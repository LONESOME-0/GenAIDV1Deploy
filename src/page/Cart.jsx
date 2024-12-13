import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import CardCart from "../components/Product/CardCart";
import CardSum from "../components/Checkout/CardSum";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { ProductContext } from "../context/ProductProvider";
import { CartContext } from "../context/CartProvider";
const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  // const { backendUrl, token } = useContext(AuthContext);
  // const [cartData, setCartData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const cartItems = Object.values(cartData);
  // console.log("cart", token);
  // const getCart = async () => {
  //   try {
  //     // const response = await axios.get(`${backendUrl}/api/cart/get`, {
  //     //   headers: {
  //     //     Authorization: `Bearer ${token}`, // Custom header for authentication
  //     //     'Custom-Header': 'CustomValue',   // Example of another custom header
  //     //   },
  //     // });
  //     const cusH = {
  //       token,
  //     };
  //     const response = await axios.post(`${backendUrl}/api/cart/get`, {
  //       userId: "6755e5e1ed1cfa4d6d2bfc31",
  //     });

  //     //const response = await axios.get(`${backendUrl}/api/cart/get`, {body: { userId: "6755e5e1ed1cfa4d6d2bfc31" }},{ headers: { token } });
  //     setCartData(response.data.cartData);
  //     //console.log(response.data);
  //     setLoading(false);
  //   } catch (error) {
  //     setLoading(false);
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   getCart();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <Nav back title="รถเข็น" />

      <div className="my-16 lg:my-40  lg:w-[80%] lg:place-self-center lg:flex lg:gap-7 ">
        <div className="lg:w-[70%] ">
          {cartItems.map((item) => (
            <CardCart key={item.productid} cartData={item} />
          ))}

          {/* {
          cartData.map((item) => (
            <CardCart key={item.id} cartData={item} />
          ))
         } */}
        </div>
        <div className="hidden lg:block lg:w-[30%]  lg:pt-6 text-center">
          <CardSum />
          <Link to="/checkout">
            <button className="bg-ga-primary text-white rounded-md p-2 w-40 text-xl mt-7">
              สั่งสินค้า
            </button>
          </Link>
        </div>
      </div>
      <NavMobile checkout />
    </>
  );
};

export default Cart;

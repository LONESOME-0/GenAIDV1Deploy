import React from "react";
import Nav from "../components/Navbar/Nav";
import NavMobile from "../components/Navbar/NavMobile";
import CardCart from "../components/Product/CardCart";
import CardSum from "../components/Checkout/CardSum";
import { Link } from "react-router-dom";
import {Authcontext} from '../context/AuthProvider'
import {Prodductcontext} from '../context/ProductProvider'
const Cart = () => {
  
  try {
    
  } catch (error) {
    
  }
  return (
    <>
      <Nav back title="รถเข็น" />

      <div className="my-16 lg:my-40  lg:w-[80%] lg:place-self-center lg:flex lg:gap-7 ">
        <div className="lg:w-[70%] ">
          <CardCart />
        </div>
        <div className="hidden lg:block lg:w-[30%]  lg:pt-6 text-center">
          <CardSum />
          <Link to = "/checkout">
          <button className="bg-ga-primary text-white rounded-md p-2 w-40 text-xl mt-7">
            สั่งสินค้า
          </button>
          </Link>
        </div>
      </div>
      <NavMobile checkout/>
    </>
  );
};

export default Cart;

import React,{useContext} from "react";
import Nav from "../components/Navbar/Nav";
import Dropdownaddr from "../components/Checkout/Dropdownaddr";
import CardCart from "../components/Product/CardCart";
import NavMobile from "../components/Navbar/NavMobile";
import { CartContext } from "../context/CartProvider";
function CheckOut() {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Nav back title="ยืนยันการสั่งซื้อ" />
      <div className=" my-16 p-3 lg:my-40 flex items-center flex-col ">
        <div className="bg-white p-5 rounded-xl">
          <img
            src="imgpromptpay/imgpromptpay.png"
            className="bg-white w-64 h-auto"
          />
        </div>
        <Dropdownaddr className="w-auto my-16 p-3 lg:my-40 flex justify-center " />
        <hr className=" my-10" />
        {cartItems.map((item) => (
          <CardCart key={item.productid} cartData={item} isCheckOut={true}/>
        ))}
      </div>

      <NavMobile checkout />
    </>
  );
}

export default CheckOut;

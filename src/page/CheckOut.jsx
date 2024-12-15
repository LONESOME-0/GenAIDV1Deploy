import React, { useContext,useState } from "react";
import Nav from "../components/Navbar/Nav";
import Dropdownaddr from "../components/Checkout/Dropdownaddr";
import CardCart from "../components/Product/CardCart";
import NavMobile from "../components/Navbar/NavMobile";
import CardSum from "../components/Checkout/CardSum";
import { CartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";
function CheckOut() {
  const { cartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log(total);

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };
  return (
    <>
      <Nav back title="ยืนยันการสั่งซื้อ" />
      <div className=" my-16 p-3 lg:my-40 flex items-center flex-col lg:flex-row-reverse lg:w-[80%] lg:place-self-center lg:flex lg:gap-7">
        <div id="info" className="lg:w-[30%] lg:p-6 text-center">
          <div className="bg-white p-5 rounded-xl">
            <img
              src="imgpromptpay/imgpromptpay.png"
              className="bg-white w-64 h-auto"
            />
          </div>
          <Dropdownaddr className="w-auto my-16 p-3 lg:my-40 flex justify-center " />
          <hr className=" my-10 " />
          <CardSum onTotalUpdate={updateTotal} />
          <Link to="/checkout">
            <button className="bg-ga-primary text-white rounded-md p-2 w-40 text-xl mt-7">
              สั่งสินค้า
            </button>
          </Link>
        </div>

        <div id="cardProduct" className="lg:w-[70%] ">
          {cartItems.map((item) => (
            <CardCart key={item.productid} cartData={item} isCheckOut={true} />
          ))}
        </div>
      </div>

      <NavMobile checkout />
    </>
  );
}

export default CheckOut;

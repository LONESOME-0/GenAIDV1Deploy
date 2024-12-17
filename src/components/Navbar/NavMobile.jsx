import { useState, useEffect, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartProvider.jsx";
import { AuthContext } from "../../context/AuthProvider.jsx";

const NavMobile = ({ product, checkout, total, setQuantity, quantity }) => {
  const iconSize = "1.6rem ";
  const iConColor = "ga-primary";
  // const iConColor='#00A4B6'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [newQuantity, setNewQuantity] = useState(0);
  const { token } = useContext(AuthContext);
  const { cartItemCount } = useContext(CartContext);
  // const onTotalUpdate = ( total ) => {
  //   setTotalOrder(total);
  // };
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  console.log(quantity);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, [token]);

  return (
    <div className="">
      {/* main nav */}
      {!product && !checkout && (
        <div>
          <div className="bg-white rounded-t-xl max-h-16 border-2  fixed bottom-0 w-full m-auto  p-3 px-9  shadow-[0px_-3px_12px_-3px_rgba(0,0,0,0.71)] lg:hidden">
            <div className="flex justify-between   w-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-ga-primary"
                    : "flex items-center cursor-pointer hover:text-ga-primary"
                }
              >
                <div className="place-items-center hover:text-ga-primary ">
                  <FaHome size={iconSize} />
                  หน้าหลัก
                </div>
              </NavLink>

              <NavLink
                to="/category"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-ga-primary"
                    : "flex items-center  cursor-pointer hover:text-ga-primary"
                }
              >
                <div className="place-items-center hover:text-ga-primary">
                  <BiSolidCategory size={iconSize} />
                  ประเภท
                </div>
              </NavLink>

              <div className="place-items-center hover:text-ga-primary">
                <IoChatbubbleEllipses size={iconSize} /> ติดต่อเภสัช
              </div>

              {/* <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-ga-primary"
                    : "flex items-center space-x-2 cursor-pointer hover:text-ga-primary"
                }
              >
                <div className="place-items-center hover:text-ga-primary">
                  <FaCartShopping size={iconSize} />
                  รถเข็น
                </div>
              </NavLink> */}
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-ga-primary"
                    : "flex items-center space-x-2 cursor-pointer hover:text-ga-primary"
                }
              >
                <div className="relative place-items-center hover:text-ga-primary">
                  {/* Cart Icon */}
                  <FaCartShopping size={iconSize} />

                  {/* Cart Badge */}
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                  <span className="text-sm">รถเข็น</span>
                </div>
              </NavLink>

              <NavLink
                to={token ? "/profile" : "/login"}
                className={({ isActive }) =>
                  isActive
                    ? " cursor-pointer text-ga-primary"
                    : "flex items-center space-x-2 cursor-pointer hover:text-ga-primary "
                }
              >
                <div className="place-items-center hover:text-ga-primary ">
                  <FaUser size={iconSize} />
                  บัญชี
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      )}

      {product && (
        <div className="bg-white p-4 h-20 border-2 m-auto rounded-2xl gap-6 flex justify-around fixed bottom-0 w-full  shadow-[0px_-3px_12px_-3px_rgba(0,0,0,0.71)] lg:hidden">
          <button
            onClick={() => addToCart(product, quantity)}
            className="text-white gap-4 bg-ga-primary w-[30%] mb-2 p-5  flex justify-center items-center rounded-lg "
          >
            <FaCartShopping size={20} />
            เพิ่มลงรถเข็น
          </button>
          <div className=" bg-ga-secondary w-[50%]  mb-2 p-5  flex justify-center items-center rounded-lg ">
            <span className="text-white text-xl ">ซื้อเลย</span>
          </div>
        </div>
      )}

      {checkout && (
        <>
          <div className="bg-white h-20  p-4 rounded-2xl border-2 flex justify-around  fixed bottom-0 w-full  shadow-[0px_-3px_12px_-3px_rgba(0,0,0,0.71)] lg:hidden">
            <div className=" place-items-center  p-1  ">
              <span className="text-xl text-ga-secondary  font-bold ">
                ยอดรวมคำสั่งซื้อ : {total}
              </span>
            </div>
            <div className=" bg-ga-primary w-[50%]   mb-2 p-5  flex justify-center items-center rounded-lg ">
              <span className="text-white text-xl">ซื้อเลย</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavMobile;

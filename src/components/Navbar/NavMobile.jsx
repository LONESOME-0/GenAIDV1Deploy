import React from "react";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavMobile = ({ product, checkout }) => {
  const iconSize = "1.6rem";
  const iConColor = "ga-primary";
  // const iConColor='#00A4B6'
  return (
    <div>
      {/* main nav */}

      {!product && !checkout && (
        <div>
          <div className="bg-white max-h-16 border-2 flex justify-around fixed bottom-0 w-full p-3 shadow-[0px_-3px_12px_-3px_rgba(0,0,0,0.71)] lg:hidden">
            <div className="place-items-center text-ga-primary">
              <FaHome size={iconSize} />
              หน้าหลัก
            </div>
            <div className="place-items-center">
              <BiSolidCategory size={iconSize} />
              ประเภท
            </div>
            <div className="place-items-center">
              <IoChatbubbleEllipses size={iconSize} /> ติดต่อเภสัช
            </div>
            <div className="place-items-center">
              <FaCartShopping size={iconSize} />
              รถเข็น
            </div>
            <div className="place-items-center">
              <FaUser size={iconSize} />
              บัญชี
            </div>
          </div>
        </div>
      )}

      {product && (
        <div className="bg-white max-h-16 border-2 flex justify-around fixed bottom-0 w-full p-2 shadow-[0px_-3px_12px_-3px_rgba(0,0,0,0.71)] lg:hidden">
          <div className="place-items-center">
            <FaCartShopping size={20} />
            เพิ่มลงรถเข็น
          </div>
          <div className=" bg-ga-primary w-[50%]   flex justify-center items-center rounded-lg ">
            <span className="text-white text-xl">ซื้อเลย</span>
          </div>
        </div>
      )}

      {checkout && (
        <>
          <div className="bg-white max-h-16 border-2 flex justify-around fixed bottom-0 w-full p-2 shadow-[0px_-3px_12px_-3px_rgba(0,0,0,0.71)] lg:hidden">
            <div className="place-items-center">
              <span className="text-lg text-ga-secondary font-bold">
                ยอดรวม: 500.-
              </span>
            </div>
            <div className=" bg-ga-primary w-[50%]  flex justify-center items-center rounded-lg">
              <span className="text-white text-xl">ซื้อเลย</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavMobile;

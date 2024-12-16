import React from "react";
import CardCategry from "../components/Category/CardCategry";
import { IoMdArrowRoundBack } from "react-icons/io";
import NavMobile from "../components/Navbar/NavMobile";
import Nav from "../components/Navbar/Nav";

const Category = () => {
  const handleBack = () => {
    window.history.back(); // ฟังก์ชันย้อนกลับไปหน้าก่อนหน้า
  };
  return (
    <>
      <Nav back title="หมวดหมู่ทั้งหมด" />
      <div>
<<<<<<< HEAD
        <div className="text-lg p-3 "></div>
        <div className="  my-16 lg:my-40 flex flex-wrap justify-center mt-10 gap-4">
=======

        <div className="text-lg py-3"></div>
        <div className="   my-16 lg:my-40 flex flex-wrap justify-center mt-10 gap-4">
>>>>>>> 6f38174883ec1a76aefb1c838feb47639d8d8c6c
          <CardCategry />
        </div>
        <NavMobile />
      </div>
    </>
  );
};

export default Category;

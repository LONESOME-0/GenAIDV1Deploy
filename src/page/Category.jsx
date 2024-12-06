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
        <div className="text-lg pt-6 "></div>
        <div className="  my-16 lg:my-40 flex flex-wrap justify-center mt-10 gap-4">
          <CardCategry />
          <CardCategry />
          <CardCategry />
          <CardCategry />
          <CardCategry />
          <CardCategry />
          <CardCategry />
        </div>
        <NavMobile />
      </div>
    </>
  );
};

export default Category;

import React, { useContext } from "react";
import CardCategory from "../components/Category/CardCategry"; // เปลี่ยนชื่อให้ตรง
import NavMobile from "../components/Navbar/NavMobile";
import Nav from "../components/Navbar/Nav";
import { CategoryContext } from "../context/CategoryProvider"; // ดึง Context

const Category = () => {
  const { categories, loading, error } = useContext(CategoryContext); // ใช้ useContext ดึงข้อมูล

  return (
    <>
      {/* Navbar */}
      <Nav back title="หมวดหมู่ทั้งหมด" />

      {/* Content */}
      <div className="my-16 lg:my-40 flex flex-col items-center">
        {loading ? (
          <p>Loading categories...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CardCategory key={category._id} categories={[category]} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <NavMobile />
    </>
  );
};

export default Category;

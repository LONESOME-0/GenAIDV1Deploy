import React from "react";
import { useNavigate } from "react-router-dom";

const CardCategory = ({ categories }) => { // รับ prop categories
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับการเปลี่ยน path เมื่อคลิก Card
  const handleCategoryClick = (categoryName) => {
    navigate(`/search/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center mx-4 my-6">
      {categories.map((category) => (
        <div
          key={category._id}
          className="w-60 h-60 flex-shrink-0 relative rounded-lg shadow-lg overflow-hidden cursor-pointer group"
          onClick={() => handleCategoryClick(category.name)}
        >
          {/* รูปภาพหมวดหมู่ */}
          <img
            src={category.image || "https://via.placeholder.com/150"}
            alt={category.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
          />
          {/* Gradient และข้อความ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
            <h2 className="p-4 text-white font-bold truncate">
              {category.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCategory;

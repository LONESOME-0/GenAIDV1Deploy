import React from "react";
import { useCategoryContext } from "../../context/CategoryProvider";
import { useNavigate } from "react-router-dom";

const CardCategory = () => {
  const { categories, loading, error } = useCategoryContext(); // ดึงข้อมูล categories จาก Context
  const navigate = useNavigate();

  // ฟังก์ชันสำหรับการเปลี่ยน path เมื่อคลิก Card
  const handleCategoryClick = (categoryName) => {
    navigate(`/search/${encodeURIComponent(categoryName)}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {categories.map((category) => ( 
        <div
          key={category._id}
          className="h-40 w-full relative max-w-xs overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          onClick={() => handleCategoryClick(category.name)} // เพิ่มฟังก์ชันคลิก
        >
          <img
            src={category.image || "https://via.placeholder.com/150"} // ใส่รูปภาพ Placeholder ถ้าไม่มีรูป
            alt={category.name}
            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60">
            <h2 className="p-4 text-white font-bold">{category.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCategory;

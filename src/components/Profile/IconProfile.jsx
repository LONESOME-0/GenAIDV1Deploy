import React from 'react'
import { FaUser } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";

function IconProfile({ onEditClick }) {
  return (
    <div className="flex pt-40 justify-between ">
      {/* ไอคอนโปรไฟล์ */}
      <FaUser className="w-[160px] h-[160px] ml-28 rounded-full bg-gray-200" />
      
      {/* ลิงก์แก้ไข */}
      <button
        onClick={onEditClick}
        className="flex items-end mr-52 text-blue-600 hover:text-blue-800 focus:outline-none"
      >
        <MdOutlineEdit className="flex  m-2 w-6 h-6" />
        แก้ไขประวัติของฉัน
      </button>
    </div>
  );
}

export default IconProfile;
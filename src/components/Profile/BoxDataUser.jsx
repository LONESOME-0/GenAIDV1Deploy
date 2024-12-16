import React, { useState,useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../context/AuthProvider";

function BoxDataUser({ userData, isEditing, onSave, onCancel }) {
  const [formData, setFormData] = useState(userData); // เก็บข้อมูลในฟอร์ม
console.log("Infrom",formData);
  // ฟังก์ชันจัดการการเปลี่ยนแปลงข้อมูลในฟอร์ม
  const { backendUrl, token } = useContext(AuthContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ฟังก์ชันบันทึกข้อมูล
  const handleSave = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/user/edituserinfo/`,formData,
        { headers: { token } },);
      alert('บันทึกข้อมูลสำเร็จ');
      onSave();
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล:', error);
      alert('บันทึกข้อมูลล้มเหลว กรุณาลองใหม่');
    }
  };

  return (
    <div className="flex flex-col mt-8 ml-24 w-2/3 h-[auto] bg-white border border-3 grey-500 shadow-lg rounded">
      {/* ชื่อ-นามสกุล */}
      <div className="flex flex-col m-3 mt-12 p-6 border border-3 grey-500 shadow-lg rounded">
        ชื่อ-นามสกุล
        <input
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          disabled={!isEditing}
          className={`text-gray-800 ${!isEditing ? 'bg-gray-200 cursor-not-allowed' : ''}`}
        />
      </div>

      {/* เบอร์มือถือ */}
      <div className="flex flex-col m-3 p-6 border border-3 grey-500 shadow-lg rounded">
        เบอร์มือถือ
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={!isEditing}
          className={`${!isEditing ? 'bg-gray-200 cursor-not-allowed' : ''}`}
        />
      </div>

      {/* อีเมล */}
      <div className="flex flex-col m-3 p-6 border border-3 grey-500 shadow-lg rounded">
        อีเมล
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={!isEditing}
          className={`${!isEditing ? 'bg-gray-200 cursor-not-allowed' : ''}`}
        />
      </div>

      {/* ปุ่มบันทึกและยกเลิก */}
      {isEditing && (
        <div className="flex gap-4 m-3 mb-6">
          <button
            onClick={handleSave}
            className="p-4 border border-3 grey-500 shadow-lg rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            บันทึกข้อมูล
          </button>
          <button
            onClick={onCancel}
            className="p-4 border border-3 grey-500 shadow-lg rounded bg-gray-500 text-white hover:bg-gray-600"
          >
            ยกเลิก
          </button>
        </div>
      )}
    </div>
  );
}

export default BoxDataUser;


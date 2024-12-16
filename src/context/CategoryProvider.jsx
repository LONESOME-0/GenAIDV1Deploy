import React, { useContext, useState, createContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]); // เปลี่ยนชื่อ state ให้ชัดเจน
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // เพิ่ม state สำหรับจัดการ Error
  const { backendUrl } = useContext(AuthContext);

  // Fetch categories from API
  const fetchCategories = async () => {
    if (!backendUrl) {
      console.error("Backend URL is missing.");
      setError("Backend URL is missing.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true); // ตั้งค่า loading ก่อนเรียก API
      const response = await axios.get(`${backendUrl}/api/category`);
      setCategories(response.data); // เซ็ตข้อมูลหมวดหมู่
      setError(null); // ลบ Error หากเคยเกิดขึ้น
    } catch (err) {
      //console.error("Error fetching categories:", err.message);
      setError("");
    } finally {
      setLoading(false); // ปิด Loading เสมอไม่ว่าจะสำเร็จหรือไม่
    }
  };

  // เรียก fetchCategories เมื่อ Component ถูก Mount
  useEffect(() => {
    fetchCategories();
  }, [backendUrl]);

  return (
    <CategoryContext.Provider value={{ categories, loading, error, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext must be used within a CategoryProvider");
  }
  return context;
};

export default CategoryProvider;

import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]); // สินค้าทั้งหมด
  const [loading, setLoading] = useState(true); // สถานะการโหลด
  const [error, setError] = useState(null); // ข้อผิดพลาด
  const { backendUrl } = useContext(AuthContext);

  // ฟังก์ชันสำหรับดึงข้อมูลสินค้า
  const fetchProductData = async () => {
    if (!backendUrl) {
      console.error("Backend URL is missing. Check AuthContext.");
      setError("Backend URL is missing.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null); // รีเซ็ตข้อผิดพลาดก่อน
      const response = await axios.get(`${backendUrl}/api/products`);
      setProduct(response.data || []); // กำหนดข้อมูลสินค้า
    } catch (error) {
      console.error("Error fetching product data:", error.message);
      setError("Failed to fetch product data. Please try again.");
      setProduct([]); // รีเซ็ตสินค้าเมื่อมีข้อผิดพลาด
    } finally {
      setLoading(false);
    }
  };

  // ดึงข้อมูลสินค้าเมื่อ Mount
  useEffect(() => {
    fetchProductData();
  }, [backendUrl]); // ดึงข้อมูลใหม่เมื่อ backendUrl เปลี่ยน

  return (
    <ProductContext.Provider value={{ product, loading, error, fetchProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// Custom hook สำหรับใช้งาน ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

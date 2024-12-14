import React, { createContext, useState, useContext, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const ProductsByCategoryContext = createContext();

const ProductsByCategoryProvider = ({ children }) => {
  const [productCategories, setProductCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { backendUrl } = useContext(AuthContext); // URL ของ backend

  // ฟังก์ชันสำหรับเรียกข้อมูลหมวดหมู่และสินค้าทั้งหมด
  const fetchCategoriesWithProducts = useCallback(async () => {
    if (loading) return; // Prevent re-fetching if already loading

    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${backendUrl}/api/categories`);
      setProductCategories(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [backendUrl, loading]);

  return (
    <ProductsByCategoryContext.Provider
      value={{
        productCategories,
        fetchCategoriesWithProducts,
        loading,
        error,
      }}
    >
      {children}
    </ProductsByCategoryContext.Provider>
  );
};

// Custom Hook สำหรับใช้งาน Context
export const useProductsByCategory = () => {
  const context = useContext(ProductsByCategoryContext);
  if (!context) {
    throw new Error(
      "useProductsByCategory must be used within a ProductsByCategoryProvider"
    );
  }
  return context;
};

export default ProductsByCategoryProvider;
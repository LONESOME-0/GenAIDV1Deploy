import React, { createContext, useState, useContext, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const ProductsByCategoryContext = createContext();

const ProductsByCategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]); // Store all categories
  const [products, setProducts] = useState([]); // Store products by category
  const [loading, setLoading] = useState(false); // Generic loading state
  const [error, setError] = useState(null); // Store error messages
  const { backendUrl } = useContext(AuthContext); // Backend URL from AuthContext

  const isFetchingCategories = useRef(false); // To prevent concurrent fetches for categories

  // Fetch all categories
  const fetchCategoriesWithProducts = useCallback(async () => {
    console.log("Fetching categories..."); // ตรวจสอบว่าฟังก์ชันถูกเรียก
  
    if (isFetchingCategories.current || categories.length > 0) return;
    isFetchingCategories.current = true;
  
    setLoading(true);
    setError(null);
  
    try {
      if (!backendUrl) throw new Error("Backend URL is missing");
  
      const response = await axios.get(`${backendUrl}/api/categories`);
      console.log("API Response:", response.data); // ตรวจสอบข้อมูล API
  
      if (response.data && Array.isArray(response.data)) {
        // หาก API ส่งเป็น Array โดยตรง
        setCategories(response.data);
      } else if (response.data) {
        // หาก API ส่งเป็น Object แต่มีข้อมูลภายใน
        const normalizedCategories = response.data.map((item) => ({
          categoriesname: item.categoriesname,
          id: item._id,
        }));
        setCategories(normalizedCategories);
        console.log("Categories set successfully:", normalizedCategories);
      } else {
        throw new Error("Invalid data structure received from API");
      }
    } catch (err) {
      console.error("Error fetching categories:", err.message);
      setError(err.response?.data?.message || "Error fetching categories");
    } finally {
      setLoading(false);
      isFetchingCategories.current = false;
    }
  }, [backendUrl, categories.length]);

  // Fetch products by category
  const fetchProductsByCategory = useCallback(
    async (category) => {
      try {
        const response = await axios.get(`${backendUrl}/api/categories/filter-by-category`, {
          params: { category },
        });
        setProducts(response.data); // ดึงข้อมูลสินค้า
      } catch (err) {
        setError("Failed to fetch products.");
      }
    },
    [backendUrl]
  );

  // Fetch categories on mount
  useEffect(() => {
    fetchCategoriesWithProducts();
  }, [fetchCategoriesWithProducts]);

  return (
    <ProductsByCategoryContext.Provider
      value={{
        products,
        categories,
        fetchCategoriesWithProducts,
        fetchProductsByCategory,
        loading,
        error,
      }}
    >
      {children}
    </ProductsByCategoryContext.Provider>
  );
};

// Custom Hook for easier access
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

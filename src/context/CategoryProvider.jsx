import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
<<<<<<< HEAD
  const [categories, setCategories] = useState([]); // เก็บข้อมูลหมวดหมู่
  const [products, setProducts] = useState([]); // เก็บข้อมูลสินค้า
  const [error, setError] = useState(null);
  const { backendUrl } = useContext(AuthContext);

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/categories`);
      setCategories(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching categories");
    }
  };

  // Fetch products by category
  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/categories/filter-by-category/`,
        { params: { category } }
      );
      setProducts(response.data);
      console.log("Context",response.data)
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching products");
    }
  };

  useEffect(() => {
    fetchCategories();
=======
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { backendUrl } = useContext(AuthContext);
    const categoryData = async () => {
        try {
          const fetchData = await axios.get(backendUrl + "/api/category");
          setCategory(fetchData.data);
          setLoading(false);
          // console.log("cate", fetchData);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      };
useEffect(() => {
    categoryData();
>>>>>>> b250142935bb83eb70380beb324aa3bd604e7564
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        products,
        error,
        fetchProductsByCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};

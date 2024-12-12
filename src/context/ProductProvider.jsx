import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { backendUrl } = useContext(AuthContext);

  useEffect(() => {
    const productData = async () => {
      if (!backendUrl) {
        console.error("Backend URL is missing. Check AuthContext.");
        setLoading(false);
        return;
      }

      try {
        const fetchData = await axios.get(`${backendUrl}/api/products`);
        setProduct(fetchData.data || []); // Set default to empty array
      } catch (error) {
        console.error("Error fetching product data:", error.message);
        setProduct([]); // Clear product data on error
      } finally {
        setLoading(false);
      }
    };

    productData();
  }, [backendUrl]); // Fetch data whenever backendUrl changes

  return (
    <ProductContext.Provider value={{ product, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

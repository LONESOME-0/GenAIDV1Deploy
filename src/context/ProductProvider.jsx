import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { backendUrl } = useContext(AuthContext);
  const productData = async () => {
    try {
      const fetchData = await axios.get(backendUrl + "/api/products");
      setProduct(fetchData.data);
      setLoading(false);
      // console.log("provider", product);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    productData();
  }, []);

  return (
    <ProductContext.Provider value={{ product, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

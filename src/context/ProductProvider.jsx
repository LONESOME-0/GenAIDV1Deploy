import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const productData = async () => {
    try {
      const fetchData = await axios.get(
        "https://api.jsonbin.io/v3/b/673a2a59e41b4d34e455da2d?meta=false"
      );
      setProduct(fetchData.data);
      setLoading(false);
      // console.log(fetchData.data)
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

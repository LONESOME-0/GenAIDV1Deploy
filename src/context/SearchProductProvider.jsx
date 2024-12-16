import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthProvider";

// Create a context
export const SearchProductContext = createContext();

const SearchProductProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { backendUrl } = useContext(AuthContext);

  const searchProducts = async (params = {}) => {
    if (!backendUrl) {
      console.error("Backend URL is missing.");
      setError("Backend URL is not configured.");
      return;
    }
  
    try {
      setLoading(true);
      setError(null);
  
      //console.log("Query Params Sent:", params); // Debug Query Params
  
      const response = await axios.get(`${backendUrl}/api/products/search`, {
        params, // ส่ง params ไปยัง API
      });
  
      //console.log("Search Response:", response.data); // Debug Response Data
      setSearchResults(response.data || []);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setError("Failed to fetch search results. Please try again.");
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchProductContext.Provider
      value={{
        searchResults,
        loading,
        error,
        searchProducts,
      }}
    >
      {children}
    </SearchProductContext.Provider>
  );
};

export default SearchProductProvider;

// Custom hook for using the context
export const useSearchProduct = () => {
  return useContext(SearchProductContext);
};

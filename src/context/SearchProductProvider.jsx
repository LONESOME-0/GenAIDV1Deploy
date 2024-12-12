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

  const searchProducts = async (params) => {
    // Validate params
    if (!params || Object.keys(params).length === 0) {
      setSearchResults([]);
      setError(null);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`${backendUrl}/api/products/search`, {
        params, // Sends query parameters dynamically
      });

      setSearchResults(response.data || []);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setError("Error fetching search results");
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

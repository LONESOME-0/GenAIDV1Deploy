// Search.jsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../context/ProductsByCategoryProvider";
import Nav from "../components/Navbar/Nav.jsx";
import CardProduct from "../components/Product/CardProduct.jsx";

const Search = () => {
  const { categoryName } = useParams(); // Extract category from URL
  const { productCategories, fetchCategoriesWithProducts, loading, error } =
    useProductsByCategory();

  // Fetch all categories and products on mount
  useEffect(() => {
    console.log("[Search] Calling fetchCategoriesWithProducts");
    fetchCategoriesWithProducts();
  }, [fetchCategoriesWithProducts]);

  // Find the category and its products based on categoryName
  const currentCategory = productCategories.find(
    (category) => category.category === categoryName
  );

  console.log("[Search] Current Category:", currentCategory);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white items-center">
        <Nav search back cart />
      </nav>

      {/* Breadcrumb */}
      <div className="mt-8 lg:my-40">
        <span className="text-xl font-bold text-gray-800 block text-left">
          Home / {categoryName || "Category"}
        </span>
      </div>

      {/* Content */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : currentCategory ? (
        <div className="flex">
          {/* Sidebar Placeholder */}
          <div className="hidden md:block w-1/4 bg-gray-100 p-4">
            <h3 className="text-lg font-semibold text-gray-700">Sidebar</h3>
          </div>
          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full p-4 md:w-3/4 md:ml-auto">
            {currentCategory.productDetails.map((product, index) => (
              <CardProduct key={product._id || index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <p>No products found for this category.</p>
      )}
    </>
  );
};

export default Search;

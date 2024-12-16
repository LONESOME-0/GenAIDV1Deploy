import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryProvider"; // Import Category Context
import { useProductsByCategory } from "../context/ProductsByCategoryProvider"; // Import Product Context
import Nav from "../components/Navbar/Nav.jsx";
import CardProduct from "../components/Product/CardProduct.jsx";

const Search = () => {
  const { categoryName } = useParams(); // Extract category from URL
  const navigate = useNavigate();

  // ดึงข้อมูลหมวดหมู่จาก CategoryProvider
  const { categories, loading: loadingCategories, error: categoryError } =
    useCategoryContext();

  // ดึงข้อมูลสินค้าในหมวดหมู่จาก ProductsByCategoryProvider
  const {
    products = [],
    error: productError,
    fetchProductsByCategory,
  } = useProductsByCategory();

  // Fetch products เมื่อเปลี่ยนหมวดหมู่
  useEffect(() => {
    if (categoryName) {
      fetchProductsByCategory(categoryName);
    }
  }, [categoryName, fetchProductsByCategory]);

  // เปลี่ยนหมวดหมู่ใน URL
  const handleCategoryChange = (categoryName) => {
    navigate(`/search/${encodeURIComponent(categoryName)}`);
  };

  const handlePriceFilter = (min, max) => {
    fetchProductsByCategory(categoryName, { minPrice: min, maxPrice: max });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white items-center">
        <Nav search back cart />
      </nav>

      {/* Breadcrumb */}
      <div className="relative mt-40 mb-2">
        <span className="text-xl font-bold text-gray-800 block text-left absolute bottom-0 left-7">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          / {categoryName || "Category"}
        </span>
      </div>

      {/* Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-[20%] bg-white ml-3 p-4 border-r border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Category</h3>
          {loadingCategories ? (
            <p>Loading categories...</p>
          ) : categoryError ? (
            <p className="text-red-500">{categoryError}</p>
          ) : (
            <ul className="text-gray-600 text-sm space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <input
                    type="radio"
                    name="category"
                    id={category.name}
                    className="mr-2"
                    checked={category.name === categoryName}
                    onChange={() => handleCategoryChange(category.name)}
                  />
                  <label htmlFor={category.name}>{category.name}</label>
                </li>
              ))}
            </ul>
          )}

          <h3 className="text-lg font-semibold text-gray-700 mt-6 mb-4">Price</h3>
          <ul className="text-gray-600 text-sm space-y-2">
            <li>
              <input
                type="radio"
                name="price"
                id="all-prices"
                className="mr-2"
                onChange={() => handlePriceFilter(0, 10000)}
              />
              <label htmlFor="all-prices">All</label>
            </li>
            <li>
              <input
                type="radio"
                name="price"
                id="0-50"
                className="mr-2"
                onChange={() => handlePriceFilter(0, 50)}
              />
              <label htmlFor="0-50">฿0 - ฿99</label>
            </li>
            <li>
              <input
                type="radio"
                name="price"
                id="50-100"
                className="mr-2"
                onChange={() => handlePriceFilter(50, 100)}
              />
              <label htmlFor="50-100">฿100 - ฿499</label>
            </li>
            <li>
              <input
                type="radio"
                name="price"
                id="100-150"
                className="mr-2"
                onChange={() => handlePriceFilter(100, 150)}
              />
              <label htmlFor="100-150">฿500 - ฿999</label>
            </li>
            <li>
              <input
                type="radio"
                name="price"
                id="over-150"
                className="mr-2"
                onChange={() => handlePriceFilter(150, 10000)}
              />
              <label htmlFor="over-150">Over ฿1000</label>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 w-full p-3 md:ml-auto">
          {productError ? (
            <p className="text-red-500">{productError}</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="w-full max-w-[500px] mx-auto">
                <CardProduct product={product} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products found for this category.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

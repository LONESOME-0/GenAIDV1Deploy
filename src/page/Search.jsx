import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryProvider"; // Import Category Context
import { ProductContext } from "../context/ProductProvider"; // Import Product Context for All Products
import Nav from "../components/Navbar/Nav.jsx";
import CardProduct from "../components/Product/CardProduct.jsx";

const Search = () => {
  const { categoryName } = useParams(); // Extract category from URL
  const navigate = useNavigate();

  // ดึงข้อมูลหมวดหมู่จาก CategoryProvider
  const { categories, loading: loadingCategories, error: categoryError } =
    useCategoryContext();

  // ดึงข้อมูลสินค้าทั้งหมดจาก ProductProvider
  const { product: allProducts, loading: loadingProducts, error: productError } =
    useContext(ProductContext);

  // State สำหรับสินค้าตามหมวดหมู่
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter สินค้าตามหมวดหมู่
  useEffect(() => {
    if (!categoryName) {
      setFilteredProducts(allProducts); // แสดงสินค้าทั้งหมด
    } else {
      const filtered = allProducts.filter(
        (product) =>
          product.categoriesname &&
          product.categoriesname.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [categoryName, allProducts]);

  // เปลี่ยนหมวดหมู่ใน URL
  const handleCategoryChange = (category) => {
    if (category === "all") {
      navigate(`/search`); // สำหรับสินค้าทั้งหมด
    } else {
      navigate(`/search/${encodeURIComponent(category)}`);
    }
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
          / {categoryName || "All Products"}
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
              <li>
                <input
                  type="radio"
                  name="category"
                  id="all-products"
                  className="mr-2"
                  checked={!categoryName} // ถ้าไม่มี categoryName แสดงว่าสินค้าทั้งหมดถูกเลือก
                  onChange={() => handleCategoryChange("all")}
                />
                <label htmlFor="all-products">All Products</label>
              </li>
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
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 w-full p-3 md:ml-auto">
          {loadingProducts ? (
            <p className="text-gray-600">Loading products...</p>
          ) : productError ? (
            <p className="text-red-500">{productError}</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="w-full max-w-[500px] mx-auto">
                <CardProduct product={product} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

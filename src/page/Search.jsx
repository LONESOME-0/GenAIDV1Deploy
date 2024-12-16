import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useCategoryContext } from "../context/CategoryProvider";
import { ProductContext } from "../context/ProductProvider";
import Nav from "../components/Navbar/Nav.jsx";
import CardProduct from "../components/Product/CardProduct.jsx";

const Search = () => {
  const { categoryName } = useParams(); // Extract category from URL
  const { search } = useLocation(); // Get query string
  const navigate = useNavigate();

  const query = new URLSearchParams(search); // Parse query string
  const searchTerm = query.get("search");

  // Fetch data from contexts
  const { categories, loading: loadingCategories, error: categoryError } = useCategoryContext();
  const { product: allProducts, loading: loadingProducts, error: productError } = useContext(ProductContext);

  // State สำหรับสินค้าที่แสดง
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      // ค้นหาสินค้าจากชื่อ
      const filtered = allProducts.filter((product) =>
        product.productname.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else if (categoryName) {
      // ค้นหาจากหมวดหมู่
      const filtered = allProducts.filter(
        (product) =>
          product.categoriesname &&
          product.categoriesname.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [categoryName, searchTerm, allProducts]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white items-center">
        <Nav search back cart />
      </nav>

      {/* Breadcrumb */}
      <div className="relative mt-32 ">
        <div className="text-xl font-bold text-gray-800 block text-left absolute bottom-0 left-8 mb-2">
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          / {categoryName || searchTerm || "All Products"}
        </div>
      </div>

      {/* Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:block w-[25%] bg-white ml-3 p-4 border-r border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4"> <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          / {categoryName || searchTerm || "All Products"}</h3>
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
                  checked={!categoryName}
                  onChange={() => navigate(`/search`)}
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
                    onChange={() => navigate(`/search/${category.name}`)}
                  />
                  <label htmlFor={category.name}>{category.name}</label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 p-3 w-full">
          {loadingProducts ? (
            <p className="text-gray-600 col-span-2 text-center">Loading products...</p>
          ) : productError ? (
            <p className="text-red-500 col-span-2 text-center">{productError}</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id}>
                <CardProduct product={product} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-2">
              No products found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;

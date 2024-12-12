import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Navbar/Nav.jsx";
import CardProduct from "../components/Product/CardProduct.jsx";

const Search = () => {
  const { categoryName } = useParams(); // Extract category from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/cardProducts/card-products?categoriesname=${categoryName}`
        );
        if (!res.ok) {
          throw new Error("No products found for this category");
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryName]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white items-center">
        <Nav search back cart />
      </nav>

      {/* Title */}
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
      ) : (
        <div className="flex">
          {/* Sidebar Placeholder */}
          <div className="hidden md:block w-1/4 bg-gray-100 p-4">
            {/* Add Sidebar Content */}
            <h3 className="text-lg font-semibold text-gray-700">Sidebar</h3>
          </div>
          {/* Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full p-4 md:w-3/4 md:ml-auto">
            {products.map((product) => (
              <CardProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;

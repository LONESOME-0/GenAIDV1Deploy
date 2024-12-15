import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CardProduct = ({ product }) => {
  // Helper function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <AiFillStar key={i} className="text-yellow-400" />
        ) : (
          <AiOutlineStar key={i} className="text-gray-300" />
        )
      );
    }
    return stars;
  };
  console.log("Card",product)

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-h-full max-w-[250px] flex-shrink-0 snap-start mx-4 hover:shadow-xl transition-shadow duration-200">
      {/* Product Image */}
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.productname || "Product Image"}
        className="w-full h-48 object-contain bg-white"
      />
      
      {/* Product Details */}
      <div className="p-4 flex flex-col">
        {/* Product Name */}
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.productname || "Unknown Product"}
        </h2>

        {/* Product Description */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description || "No description available."}
        </p>

        {/* Product Tags */}
        <p className="text-xs text-blue-500 mt-2 line-clamp-1">
          {product.tags || "#NoTags"}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-red-500 font-bold text-xl">
            ฿{product.price || "0"}
          </span>
          <span className="text-xs text-gray-500">
            {product.form || "Unit"}
          </span>
        </div>

        {/* Star Rating */}
        <div className="flex items-center mt-3">
          {renderStars(product.rating || 0)} {/* Render stars */}
          <span className="ml-2 text-gray-600 text-sm">
            {product.rating || 0}/5
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

import React from "react";
import Tag from "../Tag/Tag";
import { Link } from "react-router-dom";
const CardDesc = ({ product }) => {
  return (
    <div className="bg-white my-8 min-h-96 p-4 lg:mx-10">
      <p>{product.productname}</p>
      <p>หมวดหมู่: {product.categoriesname}</p>
      <p>บรรจุภัณฑ์: {product.form}</p>
      <p>ปริมาตร: {product.quantity}</p>
      <p>{product.description}</p>

      <div id="section-tag" className="justify-self-end flex">
        {product.tags[0].split(', ').map((tag, index) => (
          <Link key={index} to={`/search/?search=${encodeURIComponent(tag)}`}>
            <Tag tag={tag} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardDesc;

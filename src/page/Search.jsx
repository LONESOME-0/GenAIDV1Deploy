import React from 'react';
import Nav from "../components/Navbar/Nav.jsx";
import CardProduct from '../components/Product/CardProduct.jsx';
import Tag from '../components/Tag/Tag.jsx';

const Search = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-white items-center">
        <Nav search back cart />
      </nav>

      {/* Title */}
      <div className="mt-8 lg:my-40">
        <span className="text-xl font-bold text-gray-800 block text-left">
          Home / ยาแก้ปวด ลดไข้ แก้อักเสบ
        </span>
      </div>

      {/* Tags */}
      <div className="px-4 flex gap-2 mt-4 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <Tag /><Tag /><Tag /><Tag /><Tag /><Tag />
      </div>

      {/* CardProduct Grid */}
      <div className="px-4 flex flex-col items-center ml-auto w-full mt-12 lg:w-[calc(100%-250px)] 2xl:w-[calc(100%-300px)]">
        <div className="grid gap-4 w-full max-w-screen-xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </>
  );
}

export default Search;

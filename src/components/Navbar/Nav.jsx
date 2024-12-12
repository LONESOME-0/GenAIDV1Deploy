import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSearchProduct } from "../../context/SearchProductProvider";

const Nav = ({ logo, back, search, title, cart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchResults, loading, error, searchProducts } = useSearchProduct();

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim()) {
      // Perform search only if the term is not empty
      searchProducts({ search: term });
    }
  };

  const iconSize = "2.3rem";

  return (
    <>
      {(logo || back || search || title || cart) && (
        <nav className="nav lg:hidden flex justify-between items-center h-[60px] p-3 space-x-6 bg-white fixed top-0 w-full z-50">
          {back && (
            <Link to={-1}>
              <button className="nav-back">
                <IoMdArrowRoundBack className="text-2xl" />
              </button>
            </Link>
          )}
          {logo && (
            <div className="nav-logo">
              <img src="img/logo-genaid.png" alt="" className="max-h-10" />
            </div>
          )}
          <div className="flex-grow flex justify-center relative">
            {title && <div className="nav-title">{title}</div>}
            {search && (
              <div className="w-full relative">
                {/* Search Product */}
                <input
                  className="nav-search w-full rounded-full p-1 border-solid border-[3px] border-ga-primary"
                  type="text"
                  placeholder="ค้นหา สินค้า ประเภทสินค้า อาการ แท็ก"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {error && <p className="text-sm text-red-500 absolute top-full mt-1">{error}</p>}
                {searchTerm.trim() && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white shadow-lg border mt-1 max-h-60 overflow-y-auto z-10">
                    {searchResults.map((item) => (
                      <div
                        key={item._id}
                        className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                      >
                        <img
                          src={item.image || "https://via.placeholder.com/150"}
                          alt={item.productname}
                          className="w-10 h-10 object-cover mr-3"
                        />
                        <span className="text-sm font-medium text-gray-800">
                          {item.productname}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          {cart && (
            <button className="nav-cart">
              <FaCartShopping size={24} />
            </button>
          )}
        </nav>
      )}
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white shadow-xl w-full fixed top-0 z-50">
        <div className="container mx-auto">
          {/* Top Section */}
          <div className="flex items-center justify-between p-4">
            <Link to="/">
              <div className="nav-logo">
                <img src="img/logo-genaid.png" alt="" className="h-12" />
              </div>
            </Link>
            <div className="flex-1 mx-8 relative">
              <input
                className="w-full rounded-full px-4 py-2 border-2 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="ค้นหา สินค้า ประเภทสินค้า อาการ แท็ก"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              {error && <p className="text-sm text-red-500 absolute top-full mt-1">{error}</p>}
              {searchTerm.trim() && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg border mt-1 max-h-60 overflow-y-auto z-10">
                  {searchResults.map((item) => (
                    <div
                      key={item._id}
                      className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
                    >
                      <img
                        src={item.image || "https://via.placeholder.com/150"}
                        alt={item.productname}
                        className="w-10 h-10 object-cover mr-3"
                      />
                      <span className="text-sm font-medium text-gray-800">
                        {item.productname}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center space-x-6">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-ga-primary"
                    : "flex items-center space-x-2 cursor-pointer hover:text-ga-primary"
                }
              >
                <div className="flex flex-col items-center cursor-pointer hover:text-ga-primary">
                  <FaCartShopping className="text-2xl mb-1" />
                  <span className="text-sm">รถเข็น</span>
                </div>
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-ga-primary"
                    : "flex items-center space-x-2 cursor-pointer hover:text-ga-primary"
                }
              >
                <div className="flex flex-col items-center cursor-pointer hover:text-ga-primary">
                  <FaUser className="text-2xl mb-1" />
                  <span className="text-sm">บัญชี</span>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

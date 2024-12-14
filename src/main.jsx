// main.jsx

import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProductProvider from "./context/ProductProvider";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import CategoryProvider from "./context/CategoryProvider";
import SearchProductProvider from "./context/SearchProductProvider";
<<<<<<< HEAD
import ProductsByCategoryProvider from "./context/ProductsByCategoryProvider"; // Import ใหม่
=======

>>>>>>> 727398b8ed2c6afa671cd335234615b4cf0bbd42
import Home from "./page/Home";
import Cart from "./page/Cart";
import Category from "./page/Category";
import Chat from "./page/Chat";
import CheckOut from "./page/CheckOut";
import Login from "./page/login";
import OrderHistory from "./page/OrderHistory";
import OrderHistoryDetail from "./page/OrderHistoryDetail";
import ProductDetail from "./page/ProductDetail";
import Profile from "./page/Profile";
import Register from "./page/Register";
import Search from "./page/Search";

const routePublic = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/productdetail",
    element: <ProductDetail />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search/:categoryName",
    element: (
      <ProductsByCategoryProvider>
        <Search />
      </ProductsByCategoryProvider>
    ),
  },
];
const routeAuthen = [
  {
    path: "/orderhistory",
    element: <OrderHistory />,
  },
  {
    path: "/orderhistorydetail",
    element: <OrderHistoryDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
];

function RouteWithAuth() {
  const { backendUrl, token } = useContext(AuthContext);
  const router = createBrowserRouter([
    ...routePublic,
    ...(token ? routeAuthen : []),
  ]);

  console.log("token is ", token);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <SearchProductProvider>
      <CategoryProvider>
        <ProductProvider>
<<<<<<< HEAD
          
            <RouteWithAuth />
          
=======
         <RouteWithAuth />
>>>>>>> 727398b8ed2c6afa671cd335234615b4cf0bbd42
        </ProductProvider>
      </CategoryProvider>
    </SearchProductProvider>
    </AuthProvider>
  </React.StrictMode>
);

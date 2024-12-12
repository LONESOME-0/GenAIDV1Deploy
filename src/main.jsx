import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProductProvider from "./context/ProductProvider";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import CategoryProvider from "./context/CategoryProvider";
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
    path: "/search",
    element: <Search />,
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

//const router = createBrowserRouter([...routePublic,...token?routeAuthen:[]]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
//   {
//     path: "/category",
//     element: <Category />,
//   },
//   {
//     path: "/chat",
//     element: <Chat />,
//   },
//   {
//     path: "/checkout",
//     element: <CheckOut />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/orderhistory",
//     element: <OrderHistory />,
//   },
//   {
//     path: "/orderhistorydetail",
//     element: <OrderHistoryDetail />,
//   },
//   {
//     path: "/productdetail",
//     element: <ProductDetail />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/search",
//     element: <Search />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          {/* <RouterProvider router={router} /> */}

          <RouteWithAuth />
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  </React.StrictMode>
);

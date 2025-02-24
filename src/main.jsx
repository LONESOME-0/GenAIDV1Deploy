import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ProductProvider from "./context/ProductProvider";
import AuthProvider, { AuthContext } from "./context/AuthProvider";
import CategoryProvider from "./context/CategoryProvider";
import SearchProductProvider from "./context/SearchProductProvider";
import CartProvider from "./context/CartProvider"; // Import CartProvider
import ProductsByCategoryProvider from "./context/ProductsByCategoryProvider";
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
    path: "/productdetail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/search",
    element: (
        <Search />
    ),
  },
  {
    path: "/search/:categoryName",
    element: (
        <Search />
    ),
  },
];
const routeAuthen = [
  {
    path: "/orderhistory",
    element: <OrderHistory />,
  },
  {
    path: "/orderhistorydetail/:id",
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
  const { backendUrl, token } = useContext(AuthContext); // Ensure token and backendUrl are available
  const router = createBrowserRouter([
    ...routePublic,
    ...(token ? routeAuthen : []),
  ]);

  console.log("Token is:", token);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthProvider>
    <SearchProductProvider>
      <CategoryProvider>
        <ProductProvider>
          <ProductsByCategoryProvider>
            <CartProvider> 
              <RouteWithAuth />
            </CartProvider>
          </ProductsByCategoryProvider>
        </ProductProvider>
      </CategoryProvider>
    </SearchProductProvider>
  </AuthProvider>

);

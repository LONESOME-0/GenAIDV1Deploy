import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(localStorage.getItem("token"));
  // useEffect(() => {
  //     if (!token && localStorage.getItem("token")) {
  //       setToken(localStorage.getItem("token"));

  //     }
  //     if (token) {
  //     //   getUserCart(token);
  //     }
  //   }, [token]);

  const value = {
    backendUrl,
    token,
  };
  //   console.log("token is ",value.token)
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

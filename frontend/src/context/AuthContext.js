import { createContext, useEffect, useState } from "react";
import produce from "immer";
import axiosInstance from "../utils/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    access_token: localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : null,
    refresh_token: localStorage.getItem("refresh_token")
      ? localStorage.getItem("refresh_token")
      : null,
  });

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

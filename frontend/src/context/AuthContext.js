import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axios";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() =>
    localStorage.getItem("refresh_token")
      ? jwt_decode(localStorage.getItem("refresh_token"))
      : null
  );

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getCurrentUserData = async () => {
      // getting current user data
      const res = await axiosInstance.get(`api/user/me/`);
      setUserData(res.data);
    };
    if (auth) getCurrentUserData();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

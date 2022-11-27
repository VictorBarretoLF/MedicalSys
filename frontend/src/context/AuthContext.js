import { createContext, useEffect, useState } from "react";
import produce from "immer";
import axiosInstance from "../utils/axios";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    localStorage.getItem("access_token")
      ? localStorage.getItem("access_token")
      : null
  );

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getCurrentUserData = async () => {
      const user_id = jwt_decode(auth).user_id;

      try {
        const res = await axiosInstance.get(`user/${user_id}/`);
        setUserData(res.data);
      } catch (error) {
        alert("Um erro aconteceu!");
      }
    };
    if (auth) getCurrentUserData();
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

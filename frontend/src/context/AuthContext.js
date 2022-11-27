import { createContext, useEffect, useState } from "react";
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
    // get current user date based on the decoded id of jwt
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

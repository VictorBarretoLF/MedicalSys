import { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  console.log(userData);

  useEffect(() => {
    const getCurrentUserData = async () => {
      // getting current user data
      const res = await axiosInstance.get(`api/user/me/`);
      setUserData(res.data);
    };
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("refresh_token")
    )
      getCurrentUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

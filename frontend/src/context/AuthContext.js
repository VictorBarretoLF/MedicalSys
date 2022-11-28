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
    // get current user date based on the decoded id of jwt
    const getCurrentUserData = async () => {
      const user_id = auth.user_id;

      const res = await axiosInstance.get(`user/${user_id}/`);
      // console.log(res);
      setUserData(res.data);
    };
    // console.log('aqui primeiro!!!', auth);
    if (auth) {
      getCurrentUserData();
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

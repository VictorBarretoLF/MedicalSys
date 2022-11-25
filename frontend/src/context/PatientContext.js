import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PatientContext = createContext({});

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const res = await axios.get("http://localhost:8000/api/");
      setPatients(res.data);
    };
    getPatients();
  }, []);

  return (
    <PatientContext.Provider value={{ patients }}>
      {children}
    </PatientContext.Provider>
  );
};

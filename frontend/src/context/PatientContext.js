import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PatientContext = createContext({});

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    console.log("context working");
  }, []);

  return (
    <PatientContext.Provider value={{ patients }}>
      {children}
    </PatientContext.Provider>
  );
};

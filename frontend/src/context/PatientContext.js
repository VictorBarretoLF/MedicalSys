import axios from "axios";
import { createContext, useEffect, useState } from "react";
import produce from "immer";

export const PatientContext = createContext({});

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const addNewPatient = async (data) => {
    try {
      const res = await axios.post("http://localhost:8000/api/", data, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      });

      if (res.data) {
        const nextState = produce(patients, (draft) => {
          draft.push(res.data);
        });
        setPatients(nextState);
        alert("Paciente Adicionado com Sucesso!");
      }
      return res;
    } catch (error) {
      alert("Erro ao Adicionar um novo Paciente");
    }
  };

  useEffect(() => {
    const getPatients = async () => {
      const res = await axios.get("http://localhost:8000/api/");
      setPatients(res.data);
    };
    getPatients();
  }, []);

  return (
    <PatientContext.Provider value={{ patients, addNewPatient }}>
      {children}
    </PatientContext.Provider>
  );
};

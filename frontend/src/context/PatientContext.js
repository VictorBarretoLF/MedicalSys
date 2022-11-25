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

  const deletePatient = async (patient, patientIndex) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/${patient.id}/`
      );

      if (res.status === 204) {
        const nextState = produce(patients, (draft) => {
          draft.splice(patientIndex, 1);
        });
        setPatients(nextState);
        return alert("Paciente deletado com Sucesso!");
      }
      alert("Erro inesperado!");
    } catch (error) {
      alert("Erro ao Adicionar um novo Paciente");
    }
  };

  const updatePatient = async (patient, patientIndex) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/${patient.id}/`,
        patient,
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );
      
      if (res.data) {
        const nextState = produce(patients, (draft) => {
          draft[patientIndex] = res.data;
        });
        setPatients(nextState);
        return alert("Paciente atualizado com Sucesso!");
      }
      alert("Erro inesperado!");
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
    <PatientContext.Provider
      value={{ patients, addNewPatient, deletePatient, updatePatient }}
    >
      {children}
    </PatientContext.Provider>
  );
};

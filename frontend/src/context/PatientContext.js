import { createContext, useState } from "react";
import produce from "immer";
import axiosInstance from "../utils/axios";

export const PatientContext = createContext({});

export const PatientProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const addNewPatient = async (data) => {
    try {
      const res = await axiosInstance.post("http://localhost:8000/api/", data);

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
      const res = await axiosInstance.delete(
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
      const res = await axiosInstance.put(
        `http://localhost:8000/api/${patient.id}/`,
        patient
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

  const getPatients = async () => {
    try {
      const res = await axiosInstance.get("http://localhost:8000/api/");
      setPatients(res.data);
    } catch (error) {
      alert("Um inesperado ao carregar os pacientes aconteceu");
    }
  };

  return (
    <PatientContext.Provider
      value={{
        patients,
        addNewPatient,
        deletePatient,
        updatePatient,
        getPatients,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

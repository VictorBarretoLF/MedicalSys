import { createContext, useState } from "react";
import produce from "immer";
import axiosInstance from "../utils/axios";

export const SchedulesContext = createContext({});

export const SchedulesProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [status] = useState({
    AC: {
      text: "A Confirmar",
      background: "bg-danger",
    },
    FN: {
      text: "Finalizado",
      background: "bg-secondary",
    },
    CF: {
      text: "Confirmado",
      background: "bg-success",
    },
  });

  const addNewAppointment = async (data) => {
    try {
      const res = await axiosInstance.post("scheduling/", data);

      if (res.data) {
        const nextState = produce(schedules, (draft) => {
          draft.push(res.data);
        });
        setSchedules(nextState);
        alert("Paciente Adicionado com Sucesso!");
      }
      return res;
    } catch (error) {
      alert("Erro ao Adicionar um novo Paciente");
    }
  };

  const deleteAppointment = async (appointment, appointmentIndex) => {
    try {
      const res = await axiosInstance.delete(`scheduling/${appointment.id}/`);

      if (res.status === 204) {
        const nextState = produce(schedules, (draft) => {
          draft.splice(appointmentIndex, 1);
        });
        setSchedules(nextState);
        return alert("Paciente deletado com Sucesso!");
      }
      alert("Erro inesperado!");
    } catch (error) {
      alert("Erro ao Adicionar um novo Paciente");
    }
  };

  const getSchedules = async () => {
    const res = await axiosInstance.get("scheduling/");
    setSchedules(res.data);
  };

  const getUsers = async () => {
    const res = await axiosInstance.get("user/all/");
    setDoctors(res.data);
  };

  return (
    <SchedulesContext.Provider
      value={{
        getSchedules,
        schedules,
        status,
        getUsers,
        doctors,
        deleteAppointment,
        addNewAppointment,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};

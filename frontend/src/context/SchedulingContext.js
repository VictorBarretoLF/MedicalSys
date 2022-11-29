import { createContext, useState } from "react";
import produce from "immer";
import axiosInstance from "../utils/axios";

export const SchedulesContext = createContext({});

export const SchedulesProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
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
      const res = await axiosInstance.post("api/scheduling/", data);

      if (res.data) {
        const nextState = produce(appointments, (draft) => {
          draft.push(res.data);
        });
        setAppointments(nextState);
        alert("Paciente Adicionado com Sucesso!");
      }
      return res;
    } catch (error) {
      alert("Erro ao Adicionar um novo Paciente");
    }
  };

  const updateAppointment = async (appointment, appointmentIndex) => {
    try {
      const res = await axiosInstance.put(
        `api/scheduling/${appointment.id}/`,
        appointment
      );
      // console.log(res, appointmentIndex);
      if (res.data) {
        const nextState = produce(appointments, (draft) => {
          draft[appointmentIndex] = res.data;
        });
        setAppointments(nextState);
        return alert("Consulta atualizado com Sucesso!");
      }
      // alert("Erro inesperado!");
    } catch (error) {
      alert("Erro ao ATUALIZAR consulta");
    }
  };

  const deleteAppointment = async (appointment, appointmentIndex) => {
    try {
      const res = await axiosInstance.delete(`api/scheduling/${appointment.id}/`);

      if (res.status === 204) {
        const nextState = produce(appointments, (draft) => {
          draft.splice(appointmentIndex, 1);
        });
        setAppointments(nextState);
        return alert("Consulta deletada com Sucesso!");
      }
      alert("Erro inesperado!");
    } catch (error) {
      alert("Erro ao DELETE uma consulta");
    }
  };

  const getSchedules = async () => {
    const res = await axiosInstance.get("api/scheduling/");
    setAppointments(res.data);
  };

  const getUsers = async () => {
    const res = await axiosInstance.get("api/user/all/");
    setDoctors(res.data);
  };

  return (
    <SchedulesContext.Provider
      value={{
        getSchedules,
        appointments,
        status,
        getUsers,
        doctors,
        deleteAppointment,
        addNewAppointment,
        updateAppointment,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};

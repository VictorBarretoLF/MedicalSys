import { createContext, useEffect, useState } from "react";
import produce from "immer";
import axiosInstance from "../utils/axios";

export const SchedulesContext = createContext({});

export const SchedulesProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);
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

  const getSchedules = async () => {
    const res = await axiosInstance.get("scheduling/");
    setSchedules(res.data);
  };

  const getUsers = async () => {
    const res = await axiosInstance.get("user/all/");
    setUsers(res.data);
  };

  return (
    <SchedulesContext.Provider
      value={{
        getSchedules,
        schedules,
        status,
        getUsers,
        users,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};

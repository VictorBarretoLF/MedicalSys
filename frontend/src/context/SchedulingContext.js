import { createContext, useState } from "react";
import produce from "immer";
import axiosInstance from "../utils/axios";

export const SchedulesContext = createContext({});

export const SchedulesProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);

  const getSchedules = async () => {
    const res = await axiosInstance.get("scheduling/");
    setSchedules(res.data);
  };

  return (
    <SchedulesContext.Provider
      value={{
        getSchedules,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};

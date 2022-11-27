import { useContext } from "react";
import { SchedulesContext } from "../context/SchedulingContext";

const useSchedulingContext = () => {
  return useContext(SchedulesContext);
};

export default useSchedulingContext;

import { useContext } from "react";
import { SchedulingContext } from "../context/SchedulingContext";

const useSchedulingContext = () => {
  return useContext(SchedulingContext);
};

export default useSchedulingContext;

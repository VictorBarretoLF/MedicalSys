import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

const usePatientContext = () => {
  return useContext(PatientContext);
};

export default usePatientContext;

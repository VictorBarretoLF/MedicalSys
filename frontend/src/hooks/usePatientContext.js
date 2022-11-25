import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

const useAuth = () => {
  return useContext(PatientContext);
};

export default useAuth;

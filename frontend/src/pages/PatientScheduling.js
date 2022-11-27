import React, { useEffect } from "react";
import useSchedulingContext from "../hooks/useSchedulingContext";

const PatientScheduling = () => {
  const { schedules, getSchedules } = useSchedulingContext();

  useEffect(() => {
    getSchedules();
  }, []);

  console.log(schedules);

  return (
    <div className="h-100 w-100">
      <h1>Agendamento de Pacientes</h1>
    </div>
  );
};

export default PatientScheduling;

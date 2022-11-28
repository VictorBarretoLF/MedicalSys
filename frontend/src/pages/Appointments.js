import React, { useEffect, useState } from "react";
import useSchedulingContext from "../hooks/useSchedulingContext";
import Button from "react-bootstrap/Button";
import AppointmentConfigModal from "../components/AppointmentConfigModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AppointmentCard from "../components/AppointmentCard";
import usePatientContext from "../hooks/usePatientContext";

const Appointments = () => {
  const [modalShow, setModalShow] = useState(false);
  const { schedules, getSchedules, getUsers, users } = useSchedulingContext();
  const { patients, getPatients } = usePatientContext();

  useEffect(() => {
    const fetchPromisses = async () => {
      await Promise.all([getSchedules(), getUsers(), getPatients()]);
    };
    fetchPromisses();
  }, []);

  return (
    <div className="h-100">
      <header className="py-2 px-4 d-flex justify-content-sm-end">
        <Button variant="success" onClick={() => setModalShow(true)}>
          Marcar Consulta
        </Button>

        <AppointmentConfigModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </header>
      <main className="px-4 mt-2">
        <Container>
          <Row>
            {schedules.map((schedule, index) => {
              return (
                <AppointmentCard
                  key={schedule.id}
                  data={schedule}
                  appointmentIndex={index}
                  doctors={users}
                  patients={patients}
                />
              );
            })}
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Appointments;

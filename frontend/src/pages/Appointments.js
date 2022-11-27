import React, { useEffect, useState } from "react";
import useSchedulingContext from "../hooks/useSchedulingContext";
import Button from "react-bootstrap/Button";
import AppointmentConfigModal from "../components/AppointmentConfigModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AppointmentCard from "../components/AppointmentCard";

const Appointments = () => {
  const [modalShow, setModalShow] = useState(false);
  const { schedules, getSchedules } = useSchedulingContext();

  useEffect(() => {
    getSchedules();
  }, []);

  console.log(schedules);

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
            {schedules.map((patient, index) => {
              return (
                <AppointmentCard
                  key={patient.id}
                  data={patient}
                  patientIndex={index}
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

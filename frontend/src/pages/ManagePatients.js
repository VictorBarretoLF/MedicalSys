// import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import PatientsConfigModal from "../components/PatientsConfigModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import PatientCard from "../components/PatientCard";
import usePatientContext from "../hooks/usePatientContext";


const ManagePatients = () => {
  const [modalShow, setModalShow] = useState(false);
  const { patients } = usePatientContext();

  return (
    <div className="h-100">
      <header className="py-2 px-4 d-flex justify-content-sm-end">
        <Button variant="success" onClick={() => setModalShow(true)}>
          Adicionar Paciente
        </Button>

        <PatientsConfigModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </header>
      <main className="px-4 mt-2">
        <Container>
          <Row>
            {patients.map((patient) => {
              return <PatientCard key={patient.id} data={patient} />;
            })}
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default ManagePatients;

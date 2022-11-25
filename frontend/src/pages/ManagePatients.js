import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import PatientsConfigModal from "../components/PatientsConfigModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PatientCard from "../components/PatientCard";

const ManagePatients = () => {
  const [modalShow, setModalShow] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const getPatients = async () => {
      const res = await axios.get("http://localhost:8000/api/");
      setPatients(res.data);
    };
    getPatients();
  }, []);

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
              return (
                <Col key={patient.id}>
                  <PatientCard data={patient} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default ManagePatients;

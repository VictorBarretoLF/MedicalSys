import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import PatientsConfigModal from "../components/PatientsConfigModal";

const PatientCard = ({ data }) => {
  const [infoModal, setInfoModal] = useState(false);
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
        <Button variant="info" onClick={() => setInfoModal(true)}>
          Info
        </Button>

        <PatientsConfigModal
          show={infoModal}
          onHide={() => setInfoModal(false)}
          propData={data}
          edit={true}
          patientId={data.id}
        />
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Telefone: {data.telephone}</ListGroup.Item>
        <ListGroup.Item>Cidade: {data.city}</ListGroup.Item>
        <ListGroup.Item>Endereco: {data.address}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PatientCard;

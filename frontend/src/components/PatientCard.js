import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import PatientsConfigModal from "../components/PatientsConfigModal";

const PatientCard = ({ data }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Card className="mb-4" style={{ width: "16.3rem" }}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
        <Button variant="success" onClick={() => setModalShow(true)}>
          Info
        </Button>

        <PatientsConfigModal
          show={modalShow}
          onHide={() => setModalShow(false)}
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

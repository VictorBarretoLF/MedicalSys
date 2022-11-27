import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const AppointmentCard = ({ data, patientIndex }) => {
  const [infoModal, setInfoModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <Card className="mb-4">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <Button variant="info" onClick={() => setInfoModal(true)}>
            Info
          </Button>

          <Button variant="danger" onClick={() => setDeleteModal(true)}>
            Delete
          </Button>
        </div>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Telefone: </ListGroup.Item>
        <ListGroup.Item>Cidade: </ListGroup.Item>
        <ListGroup.Item>Endereco: </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default AppointmentCard;

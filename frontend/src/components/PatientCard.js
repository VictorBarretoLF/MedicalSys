import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const PatientCard = ({ data }) => {
  return (
    <Card className="mb-4" style={{ width: "16.3rem" }}>
      <Card.Header>
        {data.name.length > 20 ? data.name.slice(0, 20) + "..." : data.name}
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

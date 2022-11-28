import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import * as moment from "moment";
import "moment/locale/pt-br";
import useSchedulingContext from "../hooks/useSchedulingContext";

const AppointmentCard = ({ data, scheduleIndex, doctors }) => {
  const [infoModal, setInfoModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { status } = useSchedulingContext();

  return (
    <Card className="mb-4">
      <Card.Header className={`${status[data.status].background} text-light`}>
        <ListGroup.Item>Status : {status[data.status].text}</ListGroup.Item>
      </Card.Header>
      <ListGroup variant="flush">
        <Container>
          <Row>
            <Col md={6}>
              <ListGroup.Item>
                Medico :{" "}
                {doctors.find((doctor) => doctor.id === data.doctor).name}
              </ListGroup.Item>
            </Col>
            <Col>
              <ListGroup.Item>Paciente : {data.patient}</ListGroup.Item>
            </Col>
          </Row>
        </Container>
        <Container>
          <ListGroup.Item>Descrição: {data.description}</ListGroup.Item>

          <Row className="d-flex justify-content-between align-items-center">
            <Col md={6}>
              <ListGroup.Item>
                Data : {moment(data.date).format("L [às] h:mm:ss")}
              </ListGroup.Item>
            </Col>

            <Col md={6} className="d-flex gap-3 justify-content-end">
              <Button variant="info" onClick={() => setInfoModal(true)}>
                Info
              </Button>

              <Button variant="danger" onClick={() => setDeleteModal(true)}>
                Delete
              </Button>
            </Col>
          </Row>
        </Container>
      </ListGroup>
    </Card>
  );
};

export default AppointmentCard;

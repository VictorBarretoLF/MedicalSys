import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import * as moment from "moment";
import "moment/locale/pt-br";

import usePatientContext from "../hooks/usePatientContext";
import useSchedulingContext from "../hooks/useSchedulingContext";

const DEFAULT_FORM = {
  description: "",
  date: moment().format("YYYY-MM-DDTkk:mm"),
  doctor: "",
  patient: "",
  status: "",
};

const AppointmentConfigModal = ({
  show,
  onHide,
  dataToUpdate = DEFAULT_FORM,
  edit = false,
  appointmentIndex,
}) => {
  const [form, setForm] = useState(dataToUpdate);
  const { patients } = usePatientContext();
  const { doctors, status, addNewAppointment, updateAppointment } =
    useSchedulingContext();

  useEffect(() => {
    if (edit) setForm(dataToUpdate);
  }, [show, dataToUpdate, edit]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = () => setForm(DEFAULT_FORM);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(form);

    if (edit) {
      await updateAppointment(form, appointmentIndex);
    } else {
      await addNewAppointment(form);
      setForm(DEFAULT_FORM);
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={onSubmitHandler}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {edit ? "Info/Atualizar Consulta" : "Marcar Consulta"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="date">Data consulta</InputGroup.Text>
            <Form.Control
              aria-label="data"
              aria-describedby="dia do agendamento"
              onChange={onChangeHandler}
              name="date"
              value={moment(form.date).format("YYYY-MM-DDTkk:mm")}
              type="datetime-local"
              required
            />
          </InputGroup>

          <Row className="g-2">
            <Col md>
              <FloatingLabel
                className="mb-3"
                controlId="selectDoctor"
                label="Escolha um médico"
              >
                <Form.Select
                  aria-label="Select para escolher médico"
                  onChange={onChangeHandler}
                  value={form.doctor}
                  name="doctor"
                  required
                >
                  <option></option>
                  {doctors.map((doctor) => {
                    return (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.username}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                className="mb-3"
                controlId="selectPatient"
                label="Escolha um paciente"
              >
                <Form.Select
                  aria-label="Select para escolher paciente"
                  onChange={onChangeHandler}
                  value={form.patient}
                  name="patient"
                  required
                >
                  <option></option>
                  {patients.map((patient) => {
                    return (
                      <option key={patient.id} value={patient.id}>
                        {patient.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel
            className="mb-3"
            controlId="status"
            label="Situação da Consulta"
          >
            <Form.Select
              aria-label="Escolha a situação da consulta"
              onChange={onChangeHandler}
              value={form.status}
              name="status"
              required
            >
              <option></option>
              {["AC", "FN", "CF"].map((stats, index) => {
                return (
                  <option key={index} value={stats}>
                    {status[stats]?.text}
                  </option>
                );
              })}
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Descrição">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={onChangeHandler}
              name="description"
              value={form.description}
              required
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          {!edit && (
            <Button variant="warning" onClick={clearForm}>
              Limpar
            </Button>
          )}
          <Button onClick={onHide}>Fechar</Button>
          <Button variant="success" type="submit">
            {edit ? "Atualizar" : "Salvar"}
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AppointmentConfigModal;

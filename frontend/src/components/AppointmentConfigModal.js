import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import axios from "axios";

import InputMask from "react-input-mask";
import usePatientContext from "../hooks/usePatientContext";

const DEFAULT_FORM = {
  description: "",
  date: "",
  doctor: "",
  patient: "",
};

const AppointmentConfigModal = ({
  show,
  onHide,
  propData = DEFAULT_FORM,
  edit = false,
  patientIndex,
}) => {
  const [form, setForm] = useState(propData);

  // prevent the data form desapearing after the user closes the info modal
  useEffect(() => {
    if (edit) setForm(propData);
  }, [show, propData, edit]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const clearForm = () => setForm(DEFAULT_FORM);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(form);
    // if (edit) {
    //   await updatePatient(form, patientIndex);
    // } else {
    //   await addNewPatient(form);
    //   setForm(DEFAULT_FORM);
    // }
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
            {edit ? "Info/Atualizar" : "Marcar Consulta"}
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
              value={form.date}
              type="datetime-local"
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
                >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                >
                  <option></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="floatingTextarea2" label="Descrição">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={onChangeHandler}
              name="description"
              value={form.description}
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

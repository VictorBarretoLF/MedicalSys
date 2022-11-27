import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useEffect, useState } from "react";
import axios from "axios";

import InputMask from "react-input-mask";
import usePatientContext from "../hooks/usePatientContext";

const DEFAULT_FORM = {
  name: "",
  telephone: "",
  address: "",
  number: "",
  city: "",
  state: "",
  country: "",
  cep: "",
};

const AppointmentConfigModal = ({
  show,
  onHide,
  propData = DEFAULT_FORM,
  edit = false,
  patientIndex,
}) => {
  const [form, setForm] = useState(propData);
  const { addNewPatient, updatePatient } = usePatientContext();

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
            {edit ? "Info/Atualizar" : "Adicionar Paciente"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="telefone">Telefone</InputGroup.Text>
            <InputMask
              mask="(99)99999-9999"
              value={form.telephone}
              onChange={onChangeHandler}
            >
              {() => (
                <Form.Control
                  aria-label="telefone"
                  aria-describedby="numero de telefone"
                  onChange={onChangeHandler}
                  name="telephone"
                  value={form.telephone}
                  required
                />
              )}
            </InputMask>
            <InputGroup.Text id="cidade">Cidade</InputGroup.Text>
            <Form.Control
              aria-label="cidade"
              aria-describedby="cidade atual"
              onChange={onChangeHandler}
              name="city"
              value={form.city}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="endereco">Endereço</InputGroup.Text>
            <Form.Control
              aria-label="endereço"
              aria-describedby="endereço da moradia, rua"
              onChange={onChangeHandler}
              name="address"
              value={form.address}
              required
            />
            <InputGroup.Text id="numero">N°</InputGroup.Text>
            <Form.Control
              aria-label="numero"
              aria-describedby="numero da casa"
              onChange={onChangeHandler}
              name="number"
              value={form.number}
              required
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="estado">Estado</InputGroup.Text>
            <Form.Control
              aria-label="estado"
              aria-describedby="endereço da moradia, rua"
              onChange={onChangeHandler}
              name="state"
              value={form.state}
              required
            />
            <InputGroup.Text id="pais">País</InputGroup.Text>
            <Form.Control
              aria-label="país"
              aria-describedby="país com moradia atual"
              onChange={onChangeHandler}
              name="country"
              value={form.country}
              required
            />
          </InputGroup>
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

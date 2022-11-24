import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import axios from "axios";

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

// cep teste 65603-750

const PatientsConfigModal = ({ show, onHide, propData = DEFAULT_FORM }) => {
  const [form, setForm] = useState(propData);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getCepData = async () => {
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
      const { bairro, localidade, uf, logradouro } = await res.data;
      const newForm = { ...form };
      newForm.city = localidade;
      newForm.state = uf;
      newForm.address = logradouro + ", " + bairro;
      console.log(res.data);
      setForm({ ...form, ...newForm });
    } catch (err) {
      console.log("ERROR ACONTECEU", err);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Adicionar Paciente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="nome">Nome</InputGroup.Text>
            <Form.Control
              aria-label="nome"
              aria-describedby="nome"
              onChange={onChangeHandler}
              name="name"
              value={form.name}
            />
            <InputGroup.Text id="cep">CEP</InputGroup.Text>
            <Form.Control
              aria-label="cep"
              aria-describedby="cep"
              onBlur={getCepData}
              onChange={onChangeHandler}
              name="cep"
              value={form.cep}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="telefone">Telefone</InputGroup.Text>
            <Form.Control
              aria-label="telefone"
              aria-describedby="numero de telefone"
              onChange={onChangeHandler}
              name="telephone"
              value={form.telephone}
            />
            <InputGroup.Text id="cidade">Cidade</InputGroup.Text>
            <Form.Control
              aria-label="cidade"
              aria-describedby="cidade atual"
              onChange={onChangeHandler}
              name="city"
              value={form.city}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="endereco">Endereço</InputGroup.Text>
            <Form.Control
              aria-label="endereço"
              aria-describedby="endereço da moradia, rua"
              onChange={onChangeHandler}
              name="address"
              value={form.address}
            />
            <InputGroup.Text id="numero">N°</InputGroup.Text>
            <Form.Control
              aria-label="numero"
              aria-describedby="numero da casa"
              onChange={onChangeHandler}
              name="number"
              value={form.number}
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="estado">Estado</InputGroup.Text>
            <Form.Control
              aria-label="estado"
              aria-describedby="endereço da moradia, rua"
              onChange={onChangeHandler}
              name="state"
              value={form.state}
            />
            <InputGroup.Text id="pais">País</InputGroup.Text>
            <Form.Control
              aria-label="país"
              aria-describedby="país com moradia atual"
              onChange={onChangeHandler}
              name="country"
              value={form.country}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Fechar</Button>
          <Button variant="success" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default PatientsConfigModal;

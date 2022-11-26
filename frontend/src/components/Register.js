import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const DEFAULT_FORM = {
  email: "",
  name: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [form, setForm] = useState(DEFAULT_FORM);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setForm(DEFAULT_FORM);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1 className="text-center mb-3">Cadastrar</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="nome">Nome</InputGroup.Text>
        <Form.Control
          aria-label="nome"
          aria-describedby="nome completo"
          type="text"
          onChange={onChangeHandler}
          name="name"
          value={form.name}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="email">E-mail</InputGroup.Text>
        <Form.Control
          aria-label="Email"
          aria-describedby="email"
          type="email"
          onChange={onChangeHandler}
          name="email"
          value={form.email}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="senha">Senha</InputGroup.Text>
        <Form.Control
          aria-label="senha"
          aria-describedby="senha"
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={form.password}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="confirmar-senha">Confirmar Senha</InputGroup.Text>
        <Form.Control
          aria-label="confirmar-senha"
          aria-describedby="confirmar-senha"
          type="password"
          onChange={onChangeHandler}
          name="confirmPassword"
          value={form.confirmPassword}
          required
        />
      </InputGroup>
      <Button type="submit" className="w-100" variant="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default Register;

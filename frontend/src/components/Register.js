import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Register = () => {
  return (
    <form>
      <h1 className="text-center mb-3">Cadastrar</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="nome">Nome</InputGroup.Text>
        <Form.Control aria-label="nome" aria-describedby="nome" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="email">E-mail</InputGroup.Text>
        <Form.Control
          aria-label="Email"
          aria-describedby="email"
          type="email"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="senha">Senha</InputGroup.Text>
        <Form.Control
          aria-label="senha"
          aria-describedby="senha"
          type="password"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="confirmar-senha">Confirmar Senha</InputGroup.Text>
        <Form.Control
          aria-label="confirmar-senha"
          aria-describedby="confirmar-senha"
          type="password"
        />
      </InputGroup>
      <Button className="w-100" variant="primary">
        Cadastrar
      </Button>
    </form>
  );
};

export default Register;

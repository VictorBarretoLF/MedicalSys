import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Login = () => {
  return (
    <form>
      <h1 className="text-center mb-4">Entrar</h1>
      <InputGroup className="mb-4">
        <InputGroup.Text id="email">E-mail</InputGroup.Text>
        <Form.Control aria-label="Email" aria-describedby="email" />
      </InputGroup>
      <InputGroup className="mb-4">
        <InputGroup.Text id="email">Senha</InputGroup.Text>
        <Form.Control
          aria-label="Email"
          aria-describedby="email"
          type="password"
        />
      </InputGroup>
      <Button className="w-100" variant="primary">
        Entrar
      </Button>
    </form>
  );
};

export default Login;

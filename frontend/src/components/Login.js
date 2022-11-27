import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axiosInstance from "../utils/axios";
import { useState } from "react";
import CustomAlert from "./Alert";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Login = () => {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value.trim() });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("token/", form);
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
      setAuth({
        access_token: localStorage.getItem("access_token"),
        refresh_token: localStorage.getItem("refresh_token"),
      });
      console.log(res.data);
      navigate("/app");
    } catch (error) {
      return showAlert(true, "danger", "E-mail ou senha inválidos!");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {alert.show && <CustomAlert {...alert} removeAlert={showAlert} />}
      <h1 className="text-center mb-3">Entrar</h1>
      <InputGroup className="mb-3">
        <InputGroup.Text id="email">E-mail</InputGroup.Text>
        <Form.Control
          aria-label="Email"
          aria-describedby="email do usuario"
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
          aria-describedby="senha do usuário"
          type="password"
          onChange={onChangeHandler}
          name="password"
          value={form.password}
          required
        />
      </InputGroup>
      <Button type="submit" className="w-100" variant="primary">
        Entrar
      </Button>
    </form>
  );
};

export default Login;

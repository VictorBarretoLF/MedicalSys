import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axiosInstance from "../utils/axios";
import { useState } from "react";
import CustomAlert from "./Alert";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import FacebookLogin from "react-facebook-login";
import facebookLogin from "../utils/facebookLogin";

const Login = () => {
  const { setUserData } = useAuthContext();
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
      const res = await axiosInstance.post("auth/token", {
        username: form.email,
        password: form.password,
        grant_type: "password",
        client_secret: process.env.REACT_APP_OAUTH2_CLIENT_SECRET,
        client_id: process.env.REACT_APP_OAUTH2_CLIENT_ID,
      });
      // console.log("the new response here", res);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      axiosInstance.defaults.headers["Authorization"] =
        "Bearer " + localStorage.getItem("access_token");

      const userData = await axiosInstance.get(`api/user/me/`);
      setUserData(userData.data);
      navigate("/app");
    } catch (error) {
      // console.log(error);
      return showAlert(true, "danger", "E-mail ou senha inválidos!");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  
  const facebookResponse = async (response) => {
    const res = await facebookLogin(response.accessToken);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    axiosInstance.defaults.headers["Authorization"] =
      "Bearer " + localStorage.getItem("access_token");
    const userData = await axiosInstance.get(`api/user/me/`);
    setUserData(userData.data);
    navigate("/app");
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
      <Button type="submit" className="w-100 mb-4" variant="primary">
        Entrar
      </Button>
      <div className="text-center">
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_KEY}
          size="medium"
          callback={facebookResponse}
        />
      </div>
    </form>
  );
};

export default Login;

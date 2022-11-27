import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const NavigationBar = () => {
  const { userData } = useAuthContext();
  const navigate = useNavigate();
  let activeClassName = "text-decoration-underline text-white";

  const logout = async () => {
    await axiosInstance.post("user/logout/blacklist/", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    axiosInstance.defaults.headers["Authorization"] = null;
    navigate("/");
  };

  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="text-white fs-3">MedicalSys v2.0</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="d-flex gap-3 mt-lg-0 mt-4">
            <Nav.Item className="d-flex align-items-center">
              <NavLink
                to="/app"
                className={({ isActive }) =>
                  isActive ? activeClassName : "text-white"
                }
                end
              >
                Agendamento
              </NavLink>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center">
              <NavLink
                to="management"
                className={({ isActive }) =>
                  isActive ? activeClassName : "text-white"
                }
                end
              >
                Gerenciamento
              </NavLink>
            </Nav.Item>
            <NavDropdown title={userData.email} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logout}>Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
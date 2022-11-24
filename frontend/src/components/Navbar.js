import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand className="text-white fs-3">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="d-flex gap-3 mt-lg-0 mt-4">
            <Nav.Item className="d-flex align-items-center text-white">
              <NavLink className="text-white" to="/app" end>
                Agendamento
              </NavLink>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center text-white">
              <NavLink className="text-white" to="management" end>
                Gerenciamento
              </NavLink>
            </Nav.Item>
            <NavDropdown className="mr-4" title="Opções" id="basic-nav-dropdown">
              <NavDropdown.ItemText>Logado como:</NavDropdown.ItemText>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

// <Navbar bg="light" expand="lg">
// <Container>
//   <NavLink className="fs-2 text-decoration-none" to="/app">
//     MedicalSys
//   </NavLink>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
//     <Nav className="d-flex gap-3 mt-lg-0 mt-4">
//       <span>Bem vindo, Fulano de Tal.</span>
//       <NavLink
//         className={({ isActive }) =>
//           isActive ? "" : 'text-dark'
//         }
//         to="/app"
//         end
//       >
//         Agendameto
//       </NavLink>
//       <NavLink
//         className={(({ isActive }) => isActive ? "" : 'text-dark')}
//         to="management"
//         end
//       >
//         Gerenciamento
//       </NavLink>
//     </Nav>
//   </Navbar.Collapse>
// </Container>
// </Navbar>

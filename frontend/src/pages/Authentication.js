import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Login from "../components/Login";
import Register from "../components/Register";

const Authentication = () => {
  const [key, setKey] = useState("entrar");
  return (
    <section className="d-flex flex-column justify-content-center align-items-center h-100 bg-primary">
      <Container className="d-flex flex-column justify-content-center align-items-center h-100 ">
        <main
          className="w-100 border p-4 rounded bg-white shadow"
          style={{
            maxWidth: "496px",
          }}
        >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            justify
            className="mb-4 w-100"
          >
            <Tab eventKey="entrar" title="Entrar">
              <Login />
            </Tab>
            <Tab eventKey="cadastrar" title="Cadastrar">
              <Register />
            </Tab>
          </Tabs>
        </main>
      </Container>
    </section>
  );
};

export default Authentication;

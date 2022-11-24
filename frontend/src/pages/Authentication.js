import React, { useState } from "react";
import { Container, Row, Tabs, Tab, InputGroup, Form, Button } from "react-bootstrap";

const Authentication = () => {
  const [key, setKey] = useState("home");
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
            <Tab eventKey="home" title="Entrar">
              <h1 className="text-center">Entrar</h1>
              <form>
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
                <Button className="w-100" variant="primary">Entrar</Button>
              </form>
            </Tab>
            <Tab eventKey="profile" title="Cadastrar">
              <h1>Registrar</h1>
            </Tab>
          </Tabs>
        </main>
      </Container>
    </section>
  );
};

export default Authentication;

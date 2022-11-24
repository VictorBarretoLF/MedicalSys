import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Authentication = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <h1>Hello</h1>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h1>Hi</h1>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Authentication;

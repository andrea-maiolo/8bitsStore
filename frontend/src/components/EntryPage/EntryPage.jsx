import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

const EntryPage = function () {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <Container fluid className="vh-100">
      <Row>
        <h1>8bitsStore</h1>
      </Row>
      <Row className="mt-4">
        {!selectedElement && (
          <Col>
            <p>welcome to 8bistStore please register to start browsing our deals, otherwise login</p>
            <div className="d-flex justify-content-around">
              <Button onClick={() => setSelectedElement("login")}>Login</Button>
              <Button onClick={() => setSelectedElement("register")}>Register</Button>
            </div>
          </Col>
        )}
        {selectedElement == "login" && (
          <Col>
            <p>welcome to 8bistStore please register to start browsing our deals, otherwise login</p>
            <Login />
            <Button onClick={() => setSelectedElement("register")}>Register</Button>
          </Col>
        )}
        {selectedElement == "register" && (
          <Col>
            <p>welcome to 8bistStore please register to start browsing our deals, otherwise login</p>
            <Register />
            <Button onClick={() => setSelectedElement("login")}>Login</Button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default EntryPage;

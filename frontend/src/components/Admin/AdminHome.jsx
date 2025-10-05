import { useState } from "react";
import { Button, Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";

const AdminHome = function () {
  const [inputCategory, setInputCategory] = useState("");

  const createCategory = async function () {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:3001/category/new", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name: inputCategory }),
      });

      if (!response.ok) {
        throw new Error("error with the creation");
      }

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(inputCategory);
    createCategory();
  };
  return (
    <>
      <Navbar expand="lg" className="bg-secondary">
        <Container>
          <Navbar.Brand href="#home">8bitsStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Manage orders</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col>
            <p>Create a new category</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Set a name for your category</Form.Label>
                <Form.Control type="text" placeholder="Enter category name" value={inputCategory} onChange={(e) => setInputCategory(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <p>create products and mange it</p>
      </Container>
    </>
  );
};

export default AdminHome;

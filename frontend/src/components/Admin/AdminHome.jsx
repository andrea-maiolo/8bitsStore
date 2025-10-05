import { Container, Nav, Navbar } from "react-bootstrap";
import CategoryManager from "./CategoryManager";

const AdminHome = function () {
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

      <CategoryManager />
    </>
  );
};

export default AdminHome;

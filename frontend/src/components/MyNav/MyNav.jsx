import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const MyNav = function () {
  return (
    <Navbar expand="lg" bg="secondary">
      <Container>
        <Navbar.Brand href="#home">
          <h3>8bitsStore</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">profile</Nav.Link>
            <Nav.Link href="#link">cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;

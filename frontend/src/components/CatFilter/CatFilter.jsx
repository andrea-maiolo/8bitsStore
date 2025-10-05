import { Button, Container, Form } from "react-bootstrap";

const CatFilter = function () {
  return (
    <Container fluid className="mt-3">
      <Form className="d-flex flex-row align-items-center justify-content-center">
        <p className="m-0 me-3">Search</p>
        <Form.Select aria-label="Default select example" className="w-25 me-3">
          <option>Open this select menu</option>
          <option value="1">One cat</option>
          <option value="2">cat Two</option>
          <option value="3">cat Three</option>
        </Form.Select>
        <Form.Group className="me-3 w-50" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="start exploring" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default CatFilter;

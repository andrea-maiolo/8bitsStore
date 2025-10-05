import { Col, Container, Row } from "react-bootstrap";

const MyFooter = function () {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <p>copyright</p>
        </Col>
        <Col>
          <p>contacts</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;

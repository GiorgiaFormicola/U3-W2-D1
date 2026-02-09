import { Container, Row, Col, Alert } from "react-bootstrap";

function Welcome() {
  return (
    <Container fluid={true} className="bg-dark shadow-lg">
      <Row>
        <Col>
          <Alert variant="light" className="text-center px-4 mb-0 rounded-4">
            <Alert.Heading className="fs-2">WELCOME TO EPIBOOKS</Alert.Heading>
            <hr />
            <p className="mb-0">The best web library you've ever seen!</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyFooter() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Nav className="mx-auto">
          <Nav.Link href="#">Go back to top</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyFooter;

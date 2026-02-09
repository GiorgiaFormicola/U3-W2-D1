import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import booksList from "../data/scifi.json";

function AllTheBooks() {
  return (
    <Container className="bg-secondary rounded-4 py-4">
      <Row className="justify-content-center g-4 mx-1">
        {booksList.map((book) => {
          return (
            <Col className="col-12 col-md-6 col-lg-3" key={book.asin}>
              <Card bg="dark" text="light" border="secondary" className="shadow rounded-4 overflow-hidden h-100">
                <Card.Img variant="top" src={book.img} alt="Book cover" className="h-75" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="flex-grow-1 text-truncate">{book.title}</Card.Title>
                  <Card.Text className="d-flex justify-content-between align-items-baseline">
                    $ {book.price}
                    <Badge bg="secondary" text="light" className="w-25 py-2">
                      {book.category}
                    </Badge>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTheBooks;

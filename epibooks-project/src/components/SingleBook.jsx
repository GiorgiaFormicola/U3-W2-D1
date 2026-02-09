import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <Col className="col-12 col-md-6 col-lg-4">
        <Card
          bg="dark"
          text="light"
          className={
            "shadow rounded-4 overflow-hidden border-secondary h-100" + (this.props.selectedID === this.props.book.asin ? " border-danger border-4" : "")
          }
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt="Book cover"
            className="h-75"
            onClick={() => {
              this.props.setSelectedBookID(this.props.book.asin);
              this.props.setSelectedBookTitle(this.props.book.title);
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-center">
            <Card.Title className="text-center">{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;

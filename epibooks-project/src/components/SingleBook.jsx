import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col className="col-12 col-md-6 col-lg-3">
        <Card
          bg="dark"
          text="light"
          className={"shadow rounded-4 overflow-hidden border-secondary h-100" + (this.state.selected ? " border-danger border-4" : "")}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt="Book cover"
            className="h-75"
            onClick={() => {
              this.setState({
                selected: !this.state.selected,
              });

              this.props.setSelectedBookID(this.props.book.asin);
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

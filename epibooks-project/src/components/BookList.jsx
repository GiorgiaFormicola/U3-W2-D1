import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchValue: "",
    selectedBookID: null,
  };

  setSelectedBookID = (selectID) => {
    this.setState({
      selectedBookID: selectID,
    });
  };
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={7} className="px-4">
              <Row className="justify-content-center">
                <Col className="col-12 p-0">
                  <Form>
                    <Form.Control
                      type="text"
                      placeholder="Search your book here..."
                      value={this.state.searchValue}
                      onChange={(e) => {
                        this.setState({
                          searchValue: e.target.value,
                        });
                      }}
                    />
                  </Form>
                </Col>
                <Row className="justify-content-center g-4 bg-secondary rounded-4 pb-4">
                  {this.props.booksList.filter((b) => b.title.toLowerCase().includes(this.state.searchValue)).length === 0 ? (
                    <p className="mb-0 text-center text-light">We're sorry, no books matching your search!</p>
                  ) : (
                    this.props.booksList
                      .filter((b) => b.title.toLowerCase().includes(this.state.searchValue))
                      .map((book) => {
                        return <SingleBook book={book} key={book.asin} setSelectedBookID={this.setSelectedBookID} selectID={this.state.selectedBookID} />;
                      })
                  )}
                </Row>
              </Row>
            </Col>
            <Col xs={5} className="px-4">
              <h3 className="text-danger text-center border border-1 border-light py-1 rounded-2 mb-3">Reviews</h3>
              {!this.state.selectedBookID && <p className="text-secondary text-center">Select a book to read its reviews or leave yours!</p>}
              {this.state.selectedBookID && <CommentArea bookID={this.state.selectedBookID}></CommentArea>}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;

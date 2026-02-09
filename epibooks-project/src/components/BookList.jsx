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
    selectedBookTitle: null,
  };

  setSelectedBookID = (selectedID) => {
    this.setState({
      selectedBookID: selectedID,
    });
  };
  setSelectedBookTitle = (selectedTitle) => {
    this.setState({
      selectedBookTitle: selectedTitle,
    });
  };
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col xs={7} className="ps-5">
              <Row className="justify-content-center">
                <Col className="col-12 px-0">
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
                        return (
                          <SingleBook
                            book={book}
                            key={book.asin}
                            setSelectedBookID={this.setSelectedBookID}
                            selectedID={this.state.selectedBookID}
                            setSelectedBookTitle={this.setSelectedBookTitle}
                          />
                        );
                      })
                  )}
                </Row>
              </Row>
            </Col>
            <Col xs={5} className="px-5">
              <h3 className="text-danger text-center border border-1 border-secondary rounded-2 pb-1">Reviews</h3>
              {!this.state.selectedBookID && <p className="text-secondary text-center mt-5">Select a book to read its reviews or leave yours!</p>}
              {this.state.selectedBookID && <CommentArea bookID={this.state.selectedBookID} bookTitle={this.state.selectedBookTitle}></CommentArea>}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;

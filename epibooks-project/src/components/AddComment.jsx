import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzA2NDM4NTMsImV4cCI6MTc3MTg1MzQ1M30.Cm9gOiPR0KyOzR70lK_Fl6k-6KIZR3NS3RaJU7DRle0";

class AddComment extends Component {
  state = {
    newComment: {
      comment: "",
      rate: "1",
      elementId: this.props.bookID,
    },
  };
  componentDidUpdate(prevProps) {
    if (prevProps.bookID !== this.props.bookID) {
      this.setState({
        newComment: {
          ...this.state.newComment,
          elementId: this.props.bookID,
        },
      });
    }
  }
  render() {
    return (
      <Form
        className="text-center bg-black bg-opacity-50 rounded-2 mt-4"
        onSubmit={(e) => {
          e.preventDefault();
          fetch(URL, {
            method: "POST",
            body: JSON.stringify(this.state.newComment),
            headers: {
              Authorization: key,
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                alert("New comment saved!");
                this.setState({
                  newComment: {
                    ...this.state.newComment,
                    comment: "",
                    rate: "1",
                  },
                });
                this.props.getComments();
              } else {
                throw new Error("Error in adding your comment");
              }
            })
            .catch((err) => {
              console.log("ERROR ON SUBMIT", err);
            });
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="mt-3 text-light">Add a comment</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={2}
            className="w-75 mx-auto border-0 bg-secondary bg-opacity-25"
            data-bs-theme="dark"
            placeholder="Leave your comment here..."
            value={this.state.newComment.comment}
            onChange={(e) => {
              this.setState({
                newComment: {
                  ...this.state.newComment,
                  comment: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-light">Leave a rating</Form.Label>
          <Form.Select
            data-bs-theme="dark"
            className="w-75 mx-auto border-0 bg-secondary bg-opacity-25"
            value={this.state.newComment.rate}
            onChange={(e) => {
              this.setState({
                newComment: {
                  ...this.state.newComment,
                  rate: e.target.value,
                },
              });
            }}
          >
            <option value="1" className="bg-dark">
              1 star
            </option>
            <option value="2" className="bg-dark">
              2 stars
            </option>
            <option value="3" className="bg-dark">
              3 stars
            </option>
            <option value="4" className="bg-dark">
              4 stars
            </option>
            <option value="5" className="bg-dark">
              5 stars
            </option>
          </Form.Select>
        </Form.Group>

        <Button variant="danger" type="submit" className="w-75 mt-2 mb-4 py-1">
          Submit
        </Button>
      </Form>
    );
  }
}
export default AddComment;

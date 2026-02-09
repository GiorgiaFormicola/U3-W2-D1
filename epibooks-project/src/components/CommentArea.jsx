import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const URL = "https://striveschool-api.herokuapp.com/api/comments/";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Q1ODg1ZTNiMTAwMTViNWVkOTIiLCJpYXQiOjE3NzA2NDM4NTMsImV4cCI6MTc3MTg1MzQ1M30.Cm9gOiPR0KyOzR70lK_Fl6k-6KIZR3NS3RaJU7DRle0";
class CommentArea extends Component {
  state = {
    commentsArray: [],
  };

  getComments = () => {
    fetch(URL + this.props.bookID, {
      headers: {
        Authorization: key,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in getting the book comments");
        }
      })
      .then((bookCommentsArray) => {
        this.setState({
          commentsArray: bookCommentsArray,
        });
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookID !== this.props.bookID) {
      this.getComments();
    }
  }
  render() {
    return (
      <>
        {!this.props.bookID && <h4>Select a book to leave a comment or read its reviews!</h4>}
        {this.props.bookID && (
          <>
            <h4 className="text-light text-center pt-3">{this.props.bookTitle}</h4>
            <CommentList commentsArray={this.state.commentsArray}></CommentList>
            <AddComment bookID={this.props.bookID} getComments={this.getComments}></AddComment>
          </>
        )}
      </>
    );
  }
}

export default CommentArea;

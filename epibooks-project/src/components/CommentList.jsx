import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup variant="flush" data-bs-theme="dark" className="border-top border-bottom border-1 mt-4">
          {this.props.commentsArray.map((comment) => {
            return <SingleComment key={comment._id} commentText={comment.comment} commentRate={comment.rate}></SingleComment>;
          })}
        </ListGroup>
      </>
    );
  }
}

export default CommentList;

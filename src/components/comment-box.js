import React from "react";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";
import "../base.css";

class CommentBox extends React.Component {
  constructor() {
    super();
    this.state = {
      default: "comment-box"
    };
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;

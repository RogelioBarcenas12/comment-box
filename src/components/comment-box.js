import React from "react";
import CommentForm from "./comment-form";
import CommentList from "./comment-list";
import "../base.css";

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
  }
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList comments={this.state.comments} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;

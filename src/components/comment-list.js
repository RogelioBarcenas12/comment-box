import React from "react";
import { map } from "ramda";
import Comment from "./comment-comments";

class CommentList extends React.Component {
  constructor(props) {
    super(); //only pass in props if accessing in "this.state" as this.props.whatever
    this.state = {
      default: "comment-list"
    };
  }
  render() {
    let List = map(n => {
      return (
        <Comment author={n.author} image={n.image} date={n.date}>
          {n.text}
        </Comment>
      );
    }, this.props.comments);
    return <div className="commentList">{List}</div>;
  }
}

export default CommentList;

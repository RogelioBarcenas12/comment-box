import React from "react";
import Comment from "./comment-comments";
import Emmett from "./emmet_brown.jpg";
import Rick from "./rick_sanchez.jpg";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: "comment-list"
    };
  }
  render() {
    return (
      <div className="commentList">
        <Comment author={"Emmett Brown"} image={Emmett}>
          I invented time travel and I did it in style!
        </Comment>
        <Comment author={"Rick Sanchez"} image={Rick}>
          Two words...portal gun...douchbag!
        </Comment>
      </div>
    );
  }
}

export default CommentList;

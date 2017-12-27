import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: "comment-child"
    };
  }
  render() {
    return (
      <div className="comment">
        <div class="commenterImage">
          <img src={this.props.image} />
        </div>
        <div class="commentText">
          <h2 className="commentAuthor">{this.props.author}</h2>
          <span class="date sub-text">on Decmber 27th, 2017</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Comment;

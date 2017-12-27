import React from "react";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: "comment"
    };
  }
  render() {
    return (
      <div className="comment">
        <div class="commenterImage">
          <img src={this.props.image} className="userImage" alt="user" />
        </div>
        <div class="commentText">
          <h2 className="commentAuthor">{this.props.author}</h2>
          <span class="date sub-text">{this.props.date}</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Comment;

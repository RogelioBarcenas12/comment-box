import React from "react";
import "../base.css";

class CommentForm extends React.Component {
  //TODO
  constructor() {
    super();
    this.state = {
      default: "comment-form"
    };
  }
  render() {
    return (
      <div class="commentFormdiv">
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            class="saySomethingBox"
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default CommentForm;

import React from "react";
import "../base.css";

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: "drop-down"
    };
  }
  render() {
    return (
      <div className="dropdown">
        <select value={"A"} class="dropdown-content" id="myDropdown">
          <option value="A">Sort by Newest</option>
          <option value="B">Sort by Best</option>
          <option value="C">Sort by Oldest</option>
        </select>
      </div>
    );
  }
}

export default DropDown;

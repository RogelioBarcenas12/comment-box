import React from "react";
import DropDown from "./drop-down";
import "../base.css";

const Navbar = ({ number }) => {
  //TODO: DropDown
  return (
    <nav className="navbar wrap">
      <ul className="navbar-nav wrap">
        <li>
          <a className="navbar-item">{`${number} Comments`}</a>
        </li>
        <li>
          <DropDown />
        </li>
        <li>
          <a className="navbar-item">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

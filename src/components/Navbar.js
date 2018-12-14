import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    );
  }
}

export default Navbar;

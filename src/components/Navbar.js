import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { authedUser } = this.props;
    console.log(authedUser);
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/user">
          <div className="text-center">
            <img src={authedUser.avatarURL} className="avatar" alt="avatar" />
          </div>
          {authedUser.name}
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

const mapStateToProps = state => {
  const authedUser = state.authedUser ? state.authedUser : "Sign In";

  return { authedUser };
};

export default connect(mapStateToProps)(Navbar);

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionList from "./components/QuestionList";
import { connect } from "react-redux";
import { initialData } from "./actions/shared";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialData());
  }

  render() {
    return (
      <Router>
        <div className="container mt-3">
          <Navbar />
          <div>
            <Route path="/" exact component={QuestionList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionList from "./components/QuestionList";
import { connect } from "react-redux";
import { initialData } from "./actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initialData());
  }

  render() {
    const { questions } = this.props;
    return (
      <div className="container mt-3">
        <QuestionList questions={questions} />
      </div>
    );
  }
}

export default connect()(App);

import React, { Component, Fragment } from "react";
import LoadingBar from "react-redux-loading-bar";
import "./questionList.css";
import { connect } from "react-redux";

class QuestionList extends Component {
  render() {
    const { questions } = this.props;

    if (questions.length === 0) {
      return <div>No data</div>;
    }
    // todo: mouse hover button: show votes for that option
    return (
      <Fragment>
        <LoadingBar
          style={{
            backgroundColor: "#28a745"
          }}
        />
        {Object.values(questions).map(question => (
          <div className="card" key={question.id}>
            <h3 className="card-header">Would you rather ...?</h3>
            <div className="card-body">
              <button className="btn btn-success option">
                {question.optionOne.text}
              </button>
              <button className="btn btn-success option">
                {question.optionTwo.text}
              </button>
            </div>
            <div className="card-footer">Author: {question.author}</div>
          </div>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ questions: state.questions });

export default connect(mapStateToProps)(QuestionList);

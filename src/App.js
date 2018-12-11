import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from './components/QuestionList';

class App extends Component {
  render() {
    return (
      <div className="card">
        <QuestionList />
      </div>
    );
  }
}

export default App;

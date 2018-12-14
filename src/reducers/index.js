import { combineReducers } from "redux";
import questions from "./questions";
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  questions
});

export default rootReducer;

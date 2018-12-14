import { combineReducers } from "redux";
import questions from "./questions";
import { loadingBarReducer } from "react-redux-loading-bar";
import authedUser from "./authedUser";

const rootReducer = combineReducers({
  loadingBar: loadingBarReducer,
  questions,
  authedUser
});

export default rootReducer;

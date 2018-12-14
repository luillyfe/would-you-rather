import { _getQuestions } from "../_DATA";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const initialData = () => {
  return dispatch => {
    dispatch(showLoading());
    _getQuestions().then(questions => {
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
};

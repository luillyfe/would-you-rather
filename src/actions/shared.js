import { _getQuestions } from "../_DATA";
import { getQuestions } from "./questions";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getAuthedUser } from "./authedUser";

const AUTHED_USER = {
  id: "sarahedo",
  name: "Sarah Edo",
  avatarURL: "https://via.placeholder.com/150",
  answers: {
    "8xf0y6ziyjabvozdd253nd": "optionOne",
    "6ni6ok3ym7mf1p33lnez": "optionTwo",
    am8ehyc8byjqgar0jgpub9: "optionTwo",
    loxhs1bqm25b708cmbf3g: "optionTwo"
  },
  questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
};

export const initialData = () => {
  return dispatch => {
    dispatch(showLoading());
    _getQuestions().then(questions => {
      dispatch(getQuestions(questions));
      dispatch(getAuthedUser(AUTHED_USER));
      dispatch(hideLoading());
    });
  };
};

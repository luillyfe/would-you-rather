import { createStore } from "redux";

const configureStore = preLoadedState =>
  createStore(() => {}, preLoadedState);

export default configureStore;
import { createStore } from "redux";
import rootReducer from "../reducers";
import middleWare from "../middleware";

const configureStore = preLoadedState =>
  createStore(rootReducer, middleWare);

export default configureStore;

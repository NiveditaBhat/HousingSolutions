import reducer from "../reducers";
import { createStore } from "redux";

const initialState = {};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __store__: any;
  }
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.__store__ = store;

export default store;

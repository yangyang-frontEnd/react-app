import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import Thunk from "redux-thunk";

let store = createStore(combineReducers(reducers), applyMiddleware(Thunk));
export default store;

import { combineReducers, createStore } from "redux";
import todoReducers from "./todo-reducers";

const rootReducers=combineReducers({todoReducers});
const store=createStore(rootReducers);
export default store;
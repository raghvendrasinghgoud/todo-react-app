import { combineReducers, createStore } from "redux";
import todoReducers, { upDataReducer } from "./todo-reducers";

const rootReducers=combineReducers({todoReducers,upDataReducer});
const store=createStore(rootReducers);
export default store;
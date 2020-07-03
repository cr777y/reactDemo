import { combineReducers } from "redux";
import todolist from "./todolist";
import login from "./login";
export default combineReducers({
  todolist,
  login
});

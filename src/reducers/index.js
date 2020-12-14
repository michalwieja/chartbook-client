import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import currentPostReducer from "./currentPostReducer";

const combineReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
  currentPost: currentPostReducer,
});

export default combineReducer;

import { combineReducers } from "redux";
import candidatesReducer from "./candidates";

export default combineReducers({
  candidates: candidatesReducer
});

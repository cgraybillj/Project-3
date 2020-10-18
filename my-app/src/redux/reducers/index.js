import { combineReducers } from "redux";
import Filter from "./Filters";
import tasks from "./tasks";

export default combineReducers({ tasks, Filter });

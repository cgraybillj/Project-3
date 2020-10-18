import { combineReducers } from "redux";
import Filter from "./Filter";
import tasks from "./tasks";

export default combineReducers({ tasks, Filter });

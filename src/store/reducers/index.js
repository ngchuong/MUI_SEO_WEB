import { combineReducers } from "redux";

import task from "./task";
import user from "./user";
import admin from "./admin";

export default combineReducers({
  task,
  user,
  admin,
});

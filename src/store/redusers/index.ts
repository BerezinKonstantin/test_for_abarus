import { combineReducers } from "redux";
import { tableActionReducer } from "./tableReduser";

export const rootReducer = combineReducers({
  table: tableActionReducer,
});

import { combineReducers } from "redux";
import { tableReducer } from "./tableReduser";

export const rootReducer = combineReducers({
  table: tableReducer,
});

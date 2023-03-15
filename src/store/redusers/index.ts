import { combineReducers } from "redux";
import { paginationReducer } from "./paginationReduser";
import { tableReducer } from "./tableReduser";

export const rootReducer = combineReducers({
  table: tableReducer,
  pagination: paginationReducer,
});

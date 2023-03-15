import {
  IPost,
  TableSortActionsType,
  TableSortActions,
  TableFetchActions,
  TableFetchActionsType,
} from "../../types/table";
import { Dispatch } from "redux";
import axios from "axios";

export function setTableSort(sortBy: TableSortActions): TableSortActionsType {
  return { type: sortBy };
}

export const fetchData = () => {
  return async (dispatch: Dispatch<TableFetchActionsType>) => {
    try {
      dispatch({ type: TableFetchActions.FETCH_TABLE });
      const response = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: TableFetchActions.FETCH_TABLE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TableFetchActions.FETCH_TABLE_ERROR,
        payload: "Произошла ошибка при получении данных",
      });
    }
  };
};

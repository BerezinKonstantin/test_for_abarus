import {
  IPost,
  TableActionType,
  TableActionTypes,
  TableFetchType,
  TableFetchTypes,
} from "../../types/table";
import { Dispatch } from "redux";
import axios from "axios";

export function setTableSort(sortBy: TableActionTypes): TableActionType {
  return { type: sortBy };
}

export const fetchData = () => {
  return async (dispatch: Dispatch<TableFetchType>) => {
    try {
      dispatch({ type: TableFetchTypes.FETCH_TABLE });
      const response = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({
        type: TableFetchTypes.FETCH_TABLE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: TableFetchTypes.FETCH_TABLE_ERROR,
        payload: "Произошла ошибка при получении данных",
      });
    }
  };
};

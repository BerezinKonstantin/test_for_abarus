import { TableAction, TableActionTypes } from "../../types/types";
import { Dispatch } from "redux";
import axios from "axios";
//import { AppDispatch } from "../index";

export function setTableSort(sortBy: TableActionTypes): TableAction {
  return { type: sortBy };
}

/*export const fetchUsers = () => {
  return async (dispatch: Dispatch<TableAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: UserActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей",
      });
    }
  };
};*/

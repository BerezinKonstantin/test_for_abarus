export interface IPost {
  id: number;
  title: string;
  body: string;
}
export interface ITableState {
  posts: IPost[];
  currentPosts: IPost[];
  filteredPosts?: IPost[];
  isSorted?: boolean;
  loading?: boolean;
  error?: null | string;
}
export enum TableActionTypes {
  SORT_BY_ID = "SORT_BY_ID",
  SORT_BY_TITLE = "SORT_BY_TITLE",
  SORT_BY_BODY = "SORT_BY_BODY",
}
export type TableActionType = {
  type: TableActionTypes;
};
export enum TableFetchTypes {
  FETCH_TABLE = "FETCH_TABLE",
  FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS",
  FETCH_TABLE_ERROR = "FETCH_TABLE_ERROR",
}
interface ITableFetchAction {
  type: TableFetchTypes.FETCH_TABLE;
}
interface ITableFetchSuccessAction {
  type: TableFetchTypes.FETCH_TABLE_SUCCESS;
  payload: IPost[];
}
interface ITableFetchErrorAction {
  type: TableFetchTypes.FETCH_TABLE_ERROR;
  payload: string;
}
export type TableFetchType =
  | ITableFetchAction
  | ITableFetchSuccessAction
  | ITableFetchErrorAction;

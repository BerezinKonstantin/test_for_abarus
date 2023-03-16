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

export enum TablePostActions {
  GET_CURRENT_POSTS = "GET_CURRENT_POSTS",
}
export type TablePostActionsType = {
  type: TablePostActions;
  payload: IPost[];
  currentPage: number;
};

export enum TableFilterActions {
  GET_FILTRED_POSTS = "GET_FILTRED_POSTS",
}
export type TableFilterActionsType = {
  type: TableFilterActions;
  payload: IPost[];
};

export enum TableSortActions {
  SORT_BY_ID = "SORT_BY_ID",
  SORT_BY_TITLE = "SORT_BY_TITLE",
  SORT_BY_BODY = "SORT_BY_BODY",
}
export type TableSortActionsType = {
  type: TableSortActions;
  currentPage: number;
};

export enum TableFetchActions {
  FETCH_TABLE = "FETCH_TABLE",
  FETCH_TABLE_SUCCESS = "FETCH_TABLE_SUCCESS",
  FETCH_TABLE_ERROR = "FETCH_TABLE_ERROR",
}
interface ITableFetchAction {
  type: TableFetchActions.FETCH_TABLE;
}
interface ITableFetchSuccessAction {
  type: TableFetchActions.FETCH_TABLE_SUCCESS;
  payload: IPost[];
}
interface ITableFetchErrorAction {
  type: TableFetchActions.FETCH_TABLE_ERROR;
  payload: string;
}
export type TableFetchActionsType =
  | ITableFetchAction
  | ITableFetchSuccessAction
  | ITableFetchErrorAction;

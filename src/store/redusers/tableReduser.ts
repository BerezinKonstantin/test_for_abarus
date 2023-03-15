import {
  TableActionType,
  TableActionTypes,
  TableFetchType,
  TableFetchTypes,
  ITableState,
} from "../../types/table";

const initialState: ITableState = {
  posts: [],
  currentPosts: [],
  filteredPosts: [],
  isSorted: false,
  loading: false,
  error: null,
};

export const tableActionReducer = (
  state = initialState,
  action: TableActionType | TableFetchType
): ITableState => {
  switch (action.type) {
    case TableActionTypes.SORT_BY_ID:
      return {
        posts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.id - next.id;
          }
          return next.id - prev.id;
        }),
        currentPosts: state.posts.slice(0, 10),
        filteredPosts: state.filteredPosts,
        isSorted: !state.isSorted,
      };
    case TableActionTypes.SORT_BY_BODY:
      return {
        posts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.body > next.body ? -1 : 1;
          }
          return prev.body > next.body ? 1 : -1;
        }),
        currentPosts: state.posts.slice(0, 10),
        filteredPosts: state.filteredPosts,
        isSorted: !state.isSorted,
      };
    case TableActionTypes.SORT_BY_TITLE:
      return {
        posts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.title > next.title ? -1 : 1;
          }
          return prev.title > next.title ? 1 : -1;
        }),
        currentPosts: state.posts.slice(0, 10),
        filteredPosts: state.filteredPosts,
        isSorted: !state.isSorted,
      };
    case TableFetchTypes.FETCH_TABLE:
      return { loading: true, error: null, posts: [], currentPosts: [] };
    case TableFetchTypes.FETCH_TABLE_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: action.payload,
        currentPosts: action.payload.slice(0, 10),
      };
    case TableFetchTypes.FETCH_TABLE_ERROR:
      return {
        loading: false,
        error: action.payload,
        posts: [],
        currentPosts: [],
      };
    default:
      return state;
  }
};

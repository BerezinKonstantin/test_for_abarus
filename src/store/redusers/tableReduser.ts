import { TableAction, TableActionTypes, ITableState } from "../../types/types";

const initialState: ITableState = {
  posts: [],
  filteredPosts: [],
  isSorted: false,
};

export const tableReducer = (
  state = initialState,
  action: TableAction
): ITableState => {
  switch (action.type) {
    case TableActionTypes.SORT_BY_ID:
      return {
        posts: state.posts,
        filteredPosts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.id - next.id;
          }
          return next.id - prev.id;
        }),
        isSorted: !state.isSorted,
      };
    case TableActionTypes.SORT_BY_BODY:
      return {
        posts: state.posts,
        filteredPosts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.body > next.body ? -1 : 1;
          }
          return prev.body > next.body ? 1 : -1;
        }),
        isSorted: !state.isSorted,
      };
    case TableActionTypes.SORT_BY_TITLE:
      return {
        posts: state.posts,
        filteredPosts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.title > next.title ? -1 : 1;
          }
          return prev.title > next.title ? 1 : -1;
        }),
        isSorted: !state.isSorted,
      };
    default:
      return state;
  }
};

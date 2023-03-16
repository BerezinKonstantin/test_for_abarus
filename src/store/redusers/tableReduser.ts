import {
  ITableState,
  TableSortActions,
  TableSortActionsType,
  TableFetchActions,
  TableFetchActionsType,
  TablePostActions,
  TablePostActionsType,
  TableFilterActions,
  TableFilterActionsType,
} from "../../types/table";

const initialState: ITableState = {
  posts: [],
  currentPosts: [],
  filteredPosts: [],
  isSorted: false,
  loading: false,
  error: null,
};

export const tableReducer = (
  state = initialState,
  action:
    | TableSortActionsType
    | TableFetchActionsType
    | TablePostActionsType
    | TableFilterActionsType
    | TableSortActionsType
): ITableState => {
  switch (action.type) {
    case TableSortActions.SORT_BY_ID:
      return {
        posts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.id - next.id;
          }
          return next.id - prev.id;
        }),
        currentPosts: state.posts.slice(
          action.currentPage * 10 - 10,
          action.currentPage * 10
        ),
        filteredPosts: state.filteredPosts,
        isSorted: !state.isSorted,
      };
    case TableSortActions.SORT_BY_BODY:
      return {
        posts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.body > next.body ? -1 : 1;
          }
          return prev.body > next.body ? 1 : -1;
        }),
        currentPosts: state.posts.slice(
          action.currentPage * 10 - 10,
          action.currentPage * 10
        ),
        filteredPosts: state.filteredPosts,
        isSorted: !state.isSorted,
      };
    case TableSortActions.SORT_BY_TITLE:
      return {
        posts: state.posts.sort((prev, next) => {
          if (state.isSorted) {
            return prev.title > next.title ? -1 : 1;
          }
          return prev.title > next.title ? 1 : -1;
        }),
        currentPosts: state.posts.slice(
          action.currentPage * 10 - 10,
          action.currentPage * 10
        ),
        filteredPosts: state.filteredPosts,
        isSorted: !state.isSorted,
      };
    case TableFetchActions.FETCH_TABLE:
      return { loading: true, error: null, posts: [], currentPosts: [] };
    case TableFetchActions.FETCH_TABLE_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: action.payload,
        currentPosts: action.payload.slice(0, 10),
      };
    case TableFetchActions.FETCH_TABLE_ERROR:
      return {
        loading: false,
        error: action.payload,
        posts: [],
        currentPosts: [],
      };
    case TablePostActions.GET_CURRENT_POSTS:
      return {
        posts: state.posts,
        currentPosts: action.payload.slice(
          action.currentPage * 10 - 10,
          action.currentPage * 10
        ),
        isSorted: state.isSorted,
      };
    case TableFilterActions.GET_FILTRED_POSTS:
      return {
        posts: state.posts,
        filteredPosts: action.payload,
        currentPosts: state.currentPosts,
        isSorted: state.isSorted,
      };
    default:
      return state;
  }
};

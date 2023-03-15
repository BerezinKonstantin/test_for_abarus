import {
  IPaginationState,
  PaginationActionsType,
  PaginationActions,
} from "../../types/pagination";

const initialState: IPaginationState = {
  currentPage: 1,
  numberOfPages: 1,
};

export const paginationReducer = (
  state = initialState,
  action: PaginationActionsType
): IPaginationState => {
  switch (action.type) {
    case PaginationActions.PAG_SET_CURRENT_PAGE ||
      PaginationActions.PAG_NEXT_PAGE ||
      PaginationActions.PAG_PREV_PAGE:
      return {
        currentPage: action.payload,
        numberOfPages: state.numberOfPages,
      };
    case PaginationActions.PAG_SET_NUM_OF_PAGE:
      return {
        currentPage: state.currentPage,
        numberOfPages: action.payload,
      };
    default:
      return state;
  }
};

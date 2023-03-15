import {
  IPaginationState,
  PaginationActionsType,
  PaginationActions,
} from "../../types/pagination";

const initialState: IPaginationState = {
  currentPage: 1,
  numberOfPages: 10,
};

export const paginationReducer = (
  state = initialState,
  action: PaginationActionsType
): IPaginationState => {
  switch (action.type) {
    case PaginationActions.PAG_SET_CURRENT_PAGE:
      return {
        currentPage: action.payload,
        numberOfPages: state.numberOfPages,
      };

    default:
      return state;
  }
};

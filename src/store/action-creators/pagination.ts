import {
  IPaginationState,
  PaginationActions,
  PaginationActionsType,
} from "../../types/pagination";

export function setCurrentPage(page: number): PaginationActionsType {
  return { type: PaginationActions.PAG_SET_CURRENT_PAGE, payload: page };
}
export function nextPage(page: number): PaginationActionsType {
  return { type: PaginationActions.PAG_NEXT_PAGE, payload: page };
}
export function prevPage(page: number): PaginationActionsType {
  return { type: PaginationActions.PAG_PREV_PAGE, payload: page };
}
export function setNumOfPages(pages: number): PaginationActionsType {
  return { type: PaginationActions.PAG_SET_NUM_OF_PAGE, payload: pages };
}

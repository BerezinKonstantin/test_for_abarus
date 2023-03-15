import {
  IPaginationState,
  PaginationActions,
  PaginationActionsType,
} from "../../types/pagination";
import { Dispatch } from "redux";

export function setCurrentPage(page: number): PaginationActionsType {
  return { type: PaginationActions.PAG_SET_CURRENT_PAGE, payload: page };
}

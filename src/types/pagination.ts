import { IPost } from "./table";

export interface IPaginationState {
  //nextPage: (data: IPost[]) => void;
  //prevPage: () => void;
  //setPage: (page: number) => void;
  //getDataOnPage: (data: IPost[]) => IPost[];
  //getPages: (data: IPost[]) => number[];
  currentPage: number;
  numberOfPages: number;
}
export enum PaginationActions {
  PAG_NEXT_PAGE = "PAG_NEXT_PAGE",
  PAG_PREV_PAGE = "PAG_PREV_PAGE",
  PAG_SET_CURRENT_PAGE = "PAG_SET_CURRENT_PAGE",
  PAG_SET_NUM_OF_PAGE = "PAG_SET_NUM_OF_PAGE",
}
export type PaginationActionsType = {
  type: PaginationActions;
  payload: number;
};

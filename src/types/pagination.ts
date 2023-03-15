import { IPost } from "./table";

export interface IPagination {
  nextPage: (data: IPost[]) => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  getDataOnPage: (data: IPost[]) => IPost[];
  getPages: (data: IPost[]) => number[];
  currentPage: number;
}

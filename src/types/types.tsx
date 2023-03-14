export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface ITableState {
  posts: IPost[];
  filteredPosts: IPost[];
  isSorted: boolean;
}

export enum TableActionTypes {
  SORT_BY_ID = "SORT_BY_ID",
  SORT_BY_TITLE = "SORT_BY_TITLE",
  SORT_BY_BODY = "SORT_BY_BODY",
}

export type TableAction = {
  type: TableActionTypes;
};

/*export interface IPagination {
  nextPage: (data: IPost[]) => void;
  prevPage: () => void;
  setPage: (page: number) => void;
  //getDataOnPage: (data: IPost[]) => IPost[];
  //getPages: (data: IPost[]) => number[];
  currentPage: number;
}*/

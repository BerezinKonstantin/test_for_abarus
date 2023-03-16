import { FC } from "react";
import { IPost, TableSortActions } from "../types/table";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

interface TableProps {
  posts: IPost[];
  clickHandler: (sorting: TableSortActions) => void;
}
const Table: FC<TableProps> = ({ posts, clickHandler }) => {
  return (
    <table className="table">
      <colgroup>
        <col width="110" />
        <col width="529" />
        <col width="432" />
      </colgroup>
      <thead>
        <TableHeading clickHandler={clickHandler} />
      </thead>
      <tbody>
        {posts.map((post) => (
          <TableRow key={post.id} post={post} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

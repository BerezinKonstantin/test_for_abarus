import { FC } from "react";
import { IPost, TableActionTypes } from "../types/table";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

interface TableProps {
  posts: IPost[];
  clickHandler: (arg0: TableActionTypes) => void;
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

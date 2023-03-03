import React, { FC } from "react";
import { IPost } from "../types/types";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";
interface TableProps {
  posts: IPost[];
}
const Table: FC<TableProps> = ({ posts }) => {
  return (
    <table className="table">
      <col width="110" />
      <col width="529" />
      <col width="432" />
      <TableHeading />
      {posts.map((post) => (
        <TableRow key={post.id} post={post} />
      ))}
    </table>
  );
};

export default Table;

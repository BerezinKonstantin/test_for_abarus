import { FC } from "react";
import { IPost } from "../types/types";
import TableHeading from "./TableHeading";
import TableRow from "./TableRow";

interface TableProps {
  posts: IPost[];
}
const Table: FC<TableProps> = ({ posts }) => {
  return (
    <table className="table">
      <colgroup>
        <col width="110" />
        <col width="529" />
        <col width="432" />
      </colgroup>
      <thead>
        <TableHeading />
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

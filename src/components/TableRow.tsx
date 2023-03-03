import React, { FC } from "react";
import { IPost } from "../types/types";
interface TableRowProps {
  post: IPost;
}
const TableRow: FC<TableRowProps> = ({ post }) => {
  return (
    <tr className="table__row">
      <td>{post.id}</td>
      <td>{post.title}</td>
      <td>{post.body}</td>
    </tr>
  );
};

export default TableRow;

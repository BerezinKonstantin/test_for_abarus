import React from "react";

const TableHeading = () => {
  const tableHeadingTitles: string[] = ["ID", "Заголовок", "Описание"];
  return (
    <tr className="table__heading">
      {tableHeadingTitles.map((title) => (
        <th>
          <p className="table__heading_text">{title}</p>
        </th>
      ))}
    </tr>
  );
};

export default TableHeading;
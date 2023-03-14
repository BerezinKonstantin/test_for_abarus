import { FC } from "react";
import { TableActionTypes } from "../types/types";

interface TableHeadingProps {
  clickHandler: (arg0: TableActionTypes) => void;
}

const TableHeading: FC<TableHeadingProps> = ({ clickHandler }) => {
  const tableHeadingSort: TableActionTypes[] = [
    TableActionTypes.SORT_BY_ID,
    TableActionTypes.SORT_BY_TITLE,
    TableActionTypes.SORT_BY_BODY,
  ];
  //Попробовать Array.from TableActionTypes

  const tableHeadingTitles: string[] = ["ID", "Заголовок", "Описание"];
  return (
    <tr className="table__heading">
      {tableHeadingSort.map((arr, index) => (
        <th
          key={index}
          id={arr[index]}
          onClick={() => clickHandler(tableHeadingSort[index])}
        >
          <p className="table__heading_text" id={arr[index]}>
            {tableHeadingTitles[index]}
          </p>
        </th>
      ))}
    </tr>
  );
};

export default TableHeading;

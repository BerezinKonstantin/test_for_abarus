import { FC } from "react";
import { TableSortActions } from "../types/table";

interface TableHeadingProps {
  clickHandler: (arg0: TableSortActions) => void;
}

const TableHeading: FC<TableHeadingProps> = ({ clickHandler }) => {
  const tableHeadingSort: TableSortActions[] = [
    TableSortActions.SORT_BY_ID,
    TableSortActions.SORT_BY_TITLE,
    TableSortActions.SORT_BY_BODY,
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

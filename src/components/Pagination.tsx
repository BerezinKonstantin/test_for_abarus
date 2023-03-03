import React, { FC } from "react";

interface PaginationProps {
  numPages: number | null;
  currentPage: number;
  changePageHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Pagination: FC<PaginationProps> = ({
  numPages,
  currentPage,
  changePageHandler,
}) => {
  const numPagesBlock: JSX.Element[] = [];
  function addNumPagesHandler(i: number) {
    numPagesBlock.push(
      <div
        className={`pagination__page_button ${
          currentPage === i && "pagination__page_button_active"
        }`}
        id={String(i)}
        onClick={changePageHandler}
      >
        {i}
      </div>
    );
  }
  if (numPages && numPages - currentPage >= 4) {
    for (let i = currentPage; i <= currentPage + 4; i++) {
      addNumPagesHandler(i);
    }
  } else if (numPages && numPages - currentPage < 4) {
    for (let i = numPages - 4; i <= numPages; i++) {
      addNumPagesHandler(i);
    }
  }
  return (
    <div className="pagination">
      <div className="pagination__nav_button" id="back">
        Назад
      </div>
      <div className="pagination__page_group">{numPagesBlock}</div>
      <div className="pagination__nav_button" id="next">
        Далее
      </div>
    </div>
  );
};

export default Pagination;

import React, { FC } from "react";

interface PaginationProps {
  numPages: number | null;
  currentPage: number;
  changePageHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination: FC<PaginationProps> = ({
  numPages,
  currentPage,
  changePageHandler,
}) => {
  const numPagesBlock: JSX.Element[] = [];
  const nextButton = document.getElementById("next");
  const backButton = document.getElementById("back");
  function addNumPagesHandler(i: number) {
    numPagesBlock.push(
      <button
        className={`pagination__page_button ${
          currentPage === i && "pagination__page_button_active"
        }`}
        id={String(i)}
        onClick={changePageHandler}
      >
        {i}
      </button>
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
  nextButton && currentPage === numPages
    ? nextButton.setAttribute("disabled", "disabled")
    : nextButton?.removeAttribute("disabled");
  backButton && currentPage === 1
    ? backButton.setAttribute("disabled", "disabled")
    : backButton?.removeAttribute("disabled");
  return (
    <div className="pagination">
      <button
        className="pagination__nav_button"
        id="back"
        onClick={changePageHandler}
      >
        Назад
      </button>
      <div className="pagination__page_group">{numPagesBlock}</div>
      <button
        className="pagination__nav_button"
        id="next"
        onClick={changePageHandler}
      >
        Далее
      </button>
    </div>
  );
};

export default Pagination;

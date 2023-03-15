import React, { FC, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Table from "./Table";
import { IPost, TableSortActions } from "../types/table";
//import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useAction";
import { useAppSelector } from "../hooks/reduxHooks";

type PageParams = {
  page: string;
};
const Main = () => {
  const params = useParams<PageParams>();
  const navigate = useNavigate();
  //const [data, setData] = useState<IPost[]>([]);
  //const [currentPosts, setCurrentPosts] = useState<IPost[]>([]);
  //const [currentPage, setCurrentPage] = useState(1);
  //const [numPages, setNumPages] = useState<number | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const {
    setTableSort,
    fetchData,
    setCurrentPage,
    setNumOfPages,
    getCurrentPosts,
    nextPage,
    prevPage,
  } = useActions();
  const { posts, filteredPosts, isSorted, currentPosts, error } =
    useAppSelector((state) => state.table);
  const { currentPage, numberOfPages } = useAppSelector(
    (state) => state.pagination
  );
  const numPages = posts.length / 10;
  const getPages = () => {
    const page = Number(params.page);
    setNumOfPages(numPages);
    if (isNaN(page) || page < 1 || page > numPages) {
      setCurrentPage(1);
      navigate(`/1`, { replace: true });
    } else {
      setCurrentPage(page);
      getCurrentPosts(posts, page);
    }
  };
  /*const getCurrentPosts = (posts: IPost[]) => {
    setCurrentPosts(posts.slice(currentPage * 10 - 10, currentPage * 10));
  };*/
  const changePageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const etarget = e.target as HTMLButtonElement;
    if (etarget.id === "back") {
      navigate(`/${currentPage - 1}`, { replace: true });
      setCurrentPage(currentPage - 1);
    }
    if (etarget.id === "next") {
      navigate(`/${currentPage + 1}`, { replace: true });
      setCurrentPage(currentPage + 1);
    }
    getCurrentPosts(posts, currentPage);
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    console.log(searchInputValue);
  };
  const sortHandler = (arg0: TableSortActions) => {
    setTableSort(arg0);
  };

  useEffect(() => {
    fetchData();
    getPages();
  }, []);

  useEffect(() => {
    document.title = `Таблица, стр. ${currentPage} `;
  }, [currentPage]);

  useEffect(() => {
    getPages();
  }, [params]);
  /*useEffect(() => {
    getCurrentPosts(data);
  }, [currentPage]);*/

  return (
    <div className="app">
      <SearchInput
        value={searchInputValue}
        changeHandler={inputChangeHandler}
      />
      <Table posts={currentPosts} clickHandler={sortHandler} />
      <Pagination
        numPages={numberOfPages}
        currentPage={currentPage}
        changePageHandler={changePageHandler}
      />
      {error && <div> Ошибка : {error}</div>}
    </div>
  );
};

export default Main;

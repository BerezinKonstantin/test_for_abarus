import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Table from "./Table";
import { IPost, TableSortActions } from "../types/table";
import { useActions } from "../hooks/useAction";
import { useAppSelector } from "../hooks/reduxHooks";

type PageParams = {
  page: string;
};

const Main = () => {
  const params = useParams<PageParams>();
  const navigate = useNavigate();

  const {
    setTableSort,
    fetchData,
    setCurrentPage,
    setNumOfPages,
    getCurrentPosts,
    setFiltredPosts,
  } = useActions();
  const { posts, filteredPosts, currentPosts, error } = useAppSelector(
    (state) => state.table
  );
  const { currentPage, numberOfPages } = useAppSelector(
    (state) => state.pagination
  );
  const page = Number(params.page);
  const numPages = posts.length / 10;
  if (filteredPosts) {
    getCurrentPosts(filteredPosts, currentPage);
  }

  const getInitialPage = () => {
    setNumOfPages(numPages);
    if (isNaN(page) || page < 1 || page > numPages) {
      setCurrentPage(1);
      navigate(`/1`, { replace: true });
    } else {
      setCurrentPage(page);
      getCurrentPosts(posts, page);
    }
  };

  const getPage = () => {
    setCurrentPage(page);
    getCurrentPosts(posts, page);
  };

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
    const value = e.target.value;
    if (value.trim() === "") {
      setFiltredPosts(posts);
      return;
    }
    const search = getFiltredPosts(posts, value);
    if (!search.length) {
      setFiltredPosts([{ id: 0, title: "Ничего не нашлось", body: "" }]);
      return;
    }
    setFiltredPosts(search);
  };

  const getFiltredPosts = (items: IPost[], keyword: string) => {
    const searchKey = keyword.toLowerCase();
    return items.filter((value) => {
      return (
        value.title.toLowerCase().match(new RegExp(searchKey, "g")) ||
        value.body.toLowerCase().match(new RegExp(searchKey, "g"))
      );
    });
  };

  const sortHandler = (sorting: TableSortActions) => {
    setTableSort(sorting, currentPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getInitialPage();
  }, [posts]);

  useEffect(() => {
    getPage();
  }, [params]);

  useEffect(() => {
    document.title = `Таблица, стр. ${currentPage} `;
  }, [currentPage]);

  return (
    <div className="app">
      <SearchInput changeHandler={inputChangeHandler} />
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

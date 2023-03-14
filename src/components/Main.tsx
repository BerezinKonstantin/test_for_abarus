import React, { FC, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Table from "./Table";
import { IPost, TableActionTypes } from "../types/types";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "../hooks/useAction";

type PageParams = {
  page: string;
};
const Main = () => {
  const { setTableSort } = useActions();
  const params = useParams<PageParams>();
  const navigate = useNavigate();
  const [data, setData] = useState<IPost[]>([]);
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  const getCurrentPage = () => {
    const numPage = Number(params.page);
    if (isNaN(numPage) || numPage < 1 || (numPages && numPage > numPages)) {
      setCurrentPage(1);
      navigate(`/1`, { replace: true });
    } else {
      setCurrentPage(numPage);
      document.title = `Таблица, стр. ${numPage} `;
    }
  };
  const getCurrentPosts = (posts: IPost[]) => {
    setCurrentPosts(posts.slice(currentPage * 10 - 10, currentPage * 10));
  };
  const changePageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const etarget = e.target as HTMLButtonElement;
    if (etarget.id === "back") {
      navigate(`/${currentPage - 1}`, { replace: true });
    }
    if (etarget.id === "next") {
      navigate(`/${currentPage + 1}`, { replace: true });
    }
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    console.log(searchInputValue);
  };
  const sortHandler = (arg0: TableActionTypes) => {
    setTableSort(arg0);
  };

  async function getData() {
    await axios
      .get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        getCurrentPosts(response.data);
        setNumPages(response.data.length / 10);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getCurrentPage();
  }, [params, numPages]);
  useEffect(() => {
    getCurrentPosts(data);
  }, [currentPage]);

  return (
    <div className="app">
      <SearchInput
        value={searchInputValue}
        changeHandler={inputChangeHandler}
      />
      <Table posts={currentPosts} clickHandler={sortHandler} />
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        changePageHandler={changePageHandler}
      />
    </div>
  );
};

export default Main;

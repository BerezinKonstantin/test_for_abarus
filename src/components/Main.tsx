import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import Table from "./Table";
import { IPost } from "../types/types";
import "../index.css";

const Main = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<IPost[]>([]);
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  function getCurrentPage() {
    const numPage = Number(page);
    if (isNaN(numPage) || numPage < 1 || (numPages && numPage > numPages)) {
      setCurrentPage(1);
      navigate(`/1`, { replace: true });
    } else {
      setCurrentPage(numPage);
      document.title = `Таблица, стр. ${numPage} `;
    }
  }
  function getCurrentPosts(posts: IPost[]) {
    setCurrentPosts(posts.slice(currentPage * 10 - 10, currentPage * 10));
  }
  function changePageHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const etarget = e.target as HTMLButtonElement;
    if (etarget.id === "back") {
      navigate(`/${currentPage - 1}`, { replace: true });
    }
    if (etarget.id === "next") {
      navigate(`/${currentPage + 1}`, { replace: true });
    }
  }
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    console.log(searchInputValue);
  };
  const clickHandler = (e: React.MouseEvent<HTMLTableCellElement>) => {};
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
  }, [page, numPages]);
  useEffect(() => {
    getCurrentPosts(data);
  }, [currentPage]);

  return (
    <div className="app">
      <SearchInput
        value={searchInputValue}
        changeHandler={inputChangeHandler}
      />
      <Table posts={currentPosts} />
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        changePageHandler={changePageHandler}
      />
    </div>
  );
};

export default Main;

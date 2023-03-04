import axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css";
import Pagination from "./components/Pagination";
import SearchInput from "./components/SearchInput";
import Table from "./components/Table";
import { IPost } from "./types/types";

function App() {
  const [data, setData] = useState<IPost[]>([]);
  const [currentPosts, setCurrentPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [searchInputValue, setSearchInputValue] = useState<string>("");

  function getCurrentPosts(posts: IPost[]) {
    setCurrentPosts(posts.slice(currentPage * 10 - 10, currentPage * 10));
  }

  function changePageHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const etarget = e.target as HTMLButtonElement;
    const num = Number(etarget.id);
    if (etarget.id === "back") {
      setCurrentPage(currentPage - 1);
    }
    if (etarget.id === "next") {
      setCurrentPage(currentPage + 1);
    }
    if (numPages && num <= numPages) {
      setCurrentPage(num);
    }
  }

  useEffect(() => {
    getCurrentPosts(data);
  }, [currentPage]);

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
    document.title = `Таблица, стр. ${currentPage} `;
  }, [currentPage]);

  return (
    <>
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
    </>
  );
}

export default App;

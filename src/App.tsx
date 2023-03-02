import React, { useEffect } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import Table from "./components/Table";

function App() {
  useEffect(() => {
    document.title = "new title";
  }, []);

  return (
    <>
      <div className="app">
        <SearchInput />
        <Table />
      </div>
    </>
  );
}

export default App;

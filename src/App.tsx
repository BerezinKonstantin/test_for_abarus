import React from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import Table from "./components/Table";

function App() {
  return (
    <div className="app">
      <SearchInput />
      <Table />
    </div>
  );
}

export default App;

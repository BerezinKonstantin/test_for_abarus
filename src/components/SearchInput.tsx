import React from "react";

const SearchInput = () => {
  return (
    <div className="search_input_wrapper">
      <input
        type="text"
        className="search_input"
        autoComplete="off"
        placeholder="Поиск"
      ></input>
    </div>
  );
};

export default SearchInput;

import React, { FC } from "react";
interface SearchInputProps {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput: FC<SearchInputProps> = ({ changeHandler }) => {
  return (
    <div className="search_input_wrapper">
      <input
        type="text"
        className="search_input"
        autoComplete="off"
        placeholder="Поиск"
        onChange={changeHandler}
      ></input>
    </div>
  );
};

export default SearchInput;

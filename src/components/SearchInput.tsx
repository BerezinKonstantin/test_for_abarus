import React, { FC } from "react";
interface SearchInputProps {
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput: FC<SearchInputProps> = ({ value, changeHandler }) => {
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

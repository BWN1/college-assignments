import React from 'react';
import { ReactComponent as SearchImg } from '../../assets/icons/search.svg';

const SearchBar = () => {
  return (
    <form action="/" method="post" className="search-form">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className="search-form-input"
      />
      <button type="submit">
        <SearchImg />
      </button>
    </form>
  );
};

export default SearchBar;

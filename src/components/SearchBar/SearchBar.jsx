import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchValue, onSearchChange }) => {
  return (
    <header className="search-bar">
      <input
        type="text"
        placeholder="Busqueda por título"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </header>
  );
};

export default SearchBar;

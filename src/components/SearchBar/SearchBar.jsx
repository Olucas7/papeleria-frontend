import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchValue, onSearchChange, onSearchSubmit }) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (value) => {
    onSearchChange(value); // Actualiza el valor de búsqueda

    if (value.length >= 2) { // Solo busca sugerencias si el usuario ha escrito al menos 2 caracteres
      try {
        const response = await fetch(`http://localhost:8080/api/books/suggest?prefix=${value}`);
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setSuggestions([]); // Limpia las sugerencias si el texto es muy corto
    }
  };

  return (
    <header className="search-bar">
      <input
        type="text"
        placeholder="Busqueda por título"
        value={searchValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => onSearchSubmit(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default SearchBar;
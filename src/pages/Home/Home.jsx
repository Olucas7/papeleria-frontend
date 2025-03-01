import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BooksList from '../../components/BookList/BookList';
import Cart from '../../components/Cart/Cart';
import './Home.css';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  // Función para buscar libros
  const searchBooks = async (query) => {
    try {
      const response = await fetch(`http://localhost:8080/api/books/search?query=${query}`);
      const data = await response.json();
      setFilteredBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Efecto para buscar libros cuando el valor de búsqueda cambia
  useEffect(() => {
    if (search) {
      searchBooks(search);
    } else {
      // Si no hay valor de búsqueda, obtener todos los libros
      fetch('http://localhost:8080/api/books')
        .then((response) => response.json())
        .then((data) => setFilteredBooks(data))
        .catch((error) => console.error("Error fetching all books:", error));
    }
  }, [search]);

  return (
    <div className="home-container">
      <Cart />
      <SearchBar
        searchValue={search}
        onSearchChange={setSearch}
        onSearchSubmit={(suggestion) => {
          setSearch(suggestion); // Establece la sugerencia como valor de búsqueda
          searchBooks(suggestion); // Realiza la búsqueda con la sugerencia
        }}
      />
      <BooksList books={filteredBooks} isDetailPage={false} />
    </div>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import books from '../../mocks/data/books.json';
import SearchBar from '../../components/SearchBar/SearchBar';
import BooksList from '../../components/BookList/BookList';
import Cart from '../../components/Cart/Cart';
import './Home.css';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBooks(results);
  }, [search]);

  return (
    <div className="home-container">
       <Cart />
      <SearchBar searchValue={search} onSearchChange={setSearch} />
      <BooksList books={filteredBooks} isDetailPage={false} />
    </div>
  );
};

export default HomePage;

import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookList.css';

const BooksList = ({ books, isDetailPage }) => {
  return (
    <div className="books-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} isDetailPage={isDetailPage} />
      ))}
    </div>
  );
};

export default BooksList;

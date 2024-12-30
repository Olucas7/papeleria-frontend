import React from 'react';
import './BookCard.css';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCardButton/AddToCardButton.jsx';

const BookCard = ({ book, isDetailPage }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.details}</p>
      <p className="price">${book.price.toFixed(2)}</p>
      {!isDetailPage  && <Link to={`/books/${book.id}`} className="details-link">Ver detalles</Link>}
      {isDetailPage && <AddToCartButton book={book} />}
    </div>
  );
};

export default BookCard;

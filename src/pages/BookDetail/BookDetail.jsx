import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import books from '../../mocks/data/books.json';
import './BookDetail.css';
import BookCard from '../../components/BookCard/BookCard.jsx';
import Cart from '../../components/Cart/Cart';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === parseInt(id, 10));

  const handleBackToHome = () => {
    navigate('/home');
  };

  if (!book) {
    return (
      <div className="book-detail">
        <h2>No se encuentra ninguna coincidencia</h2>
        <button onClick={handleBackToHome}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="book-detail">
        <Cart />
      <BookCard key={id} book={book} isDetailPage={true} />
      <button onClick={handleBackToHome}>Volver al inicio</button>
    </div>
  );
};

export default BookDetail;

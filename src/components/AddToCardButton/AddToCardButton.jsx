import React from 'react';
import './AddToCardButton';
import { useCart } from '../../context/CartContext';

const AddToCartButton = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book);
    alert(`"${book.title}" ha sido añadido al carrito.`);
  };

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      Añadir al carrito
    </button>
  );
};

export default AddToCartButton;

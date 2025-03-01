import React from 'react';
import './CartItem.css';

const CartItem = ({ book, removeFromCart }) => {
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <h3>{book.title}</h3>
        <p>{book.details}</p>
        <p>${book.price.toFixed(2)}</p>
      </div>
      <button className="remove-btn" onClick={() => removeFromCart(book)}>
        Eliminar
      </button>
    </li>
  );
};

export default CartItem;
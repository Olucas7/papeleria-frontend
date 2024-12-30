import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../CardItem/CartItem';
import CheckoutButton from '../CheckoutButton/CheckoutButton';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, book) => total + book.price, 0).toFixed(2);

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((book, index) => (
          <CartItem key={index} book={book} removeFromCart={removeFromCart} />
        ))}
      </ul>
      <div className="total-price">
        <p>Total: ${totalPrice}</p>
      </div>
      <CheckoutButton />
    </div>
  );
};

export default Cart;

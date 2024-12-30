import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../..//context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, book) => total + book.price, 0).toFixed(2);

  const handleConfirmOrder = () => {
    alert('¡Pago realizado con éxito! El pedido se ha confirmado.');

    navigate('/home');
    clearCart();
};

  if (cart.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No hay productos en el carrito.</h2>
        <button onClick={() => navigate('/home')}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Resumen de tu pedido</h2>
      <div className="order-summary">
        <ul>
          {cart.map((book, index) => (
            <li key={index} className="order-item">
              <div className="order-item-info">
                <h3>{book.title}</h3>
                <p>{book.details}</p>
                <p>${book.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="total-price">
        <p><strong>Total:</strong> ${totalPrice}</p>
      </div>
      <button className="confirm-btn" onClick={handleConfirmOrder}>Confirmar Pedido</button>
    </div>
  );
};

export default CheckoutPage;

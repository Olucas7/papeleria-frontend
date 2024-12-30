import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutButton.css';

const CheckoutButton = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('¡Procediendo al checkout!');
    navigate('/checkout');
  };

  return (
    <button className="checkout-btn" onClick={handleCheckout}>
      Proceder al Checkout
    </button>
  );
};

export default CheckoutButton;

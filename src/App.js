import React from 'react';
import { CartProvider } from './context/CartContext';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Home from '../pages/Home/Home';
import BookDetail from '../pages/BookDetail/BookDetail';
import CheckoutPage from '../pages/CheckoutPage/CheckoutPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default AppRouter;

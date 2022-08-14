import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function CheckoutPage() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Switch looks for it's children Routes and renders the first one that matches */}
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

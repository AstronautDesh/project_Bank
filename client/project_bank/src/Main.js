// Main.js
import React, { useState } from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navigate from './Components/Navigate';
import SignUpForm from './Components/SignUpForm';
import AccountDashboard from './Components/AccountDashboard';
import TransactionForm from './Components/TransactionForm';
import SecurityInputDropdown from './Components/SecurityInputDropdown';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import AccountPage from './Pages/AccountPage';
import ContactPage from './Pages/ContactPage';
import CareerPage from './Pages/CareerPage';

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    navigate('/');
  }

  return (
    <div className="Main-Container">
      <header>
        <h1>Bank Of The SouthWesternLands</h1>
      </header>
      <Navigate isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<HomePage isMenuOpen={isMenuOpen} />} />
        <Route path="/about" element={<AboutPage isMenuOpen={isMenuOpen} />} />
        <Route path="/account" element={<AccountPage isMenuOpen={isMenuOpen}/>} />
        <Route path="/contact" element={<ContactPage isMenuOpen={isMenuOpen} />} />
        <Route path="/career" element={<CareerPage isMenuOpen={isMenuOpen} />} />
        <Route path="/open_account" element={<SignUpForm isMenuOpen={isMenuOpen} />} />
        <Route path="/account-dashboard" element={<AccountDashboard isMenuOpen={isMenuOpen} />} />
        <Route path="/transaction-form" element={<TransactionForm isMenuOpen={isMenuOpen} />} />
        <Route path="/login-dropdown" element={<SecurityInputDropdown isMenuOpen={isMenuOpen} />} />
      </Routes>
    </div>
  );
}

export default Main;
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/inputDropdown.css';
import { verifyCredentials } from '../services/authService';

const SecurityInputDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const resetState = () => {
    setSelectedOption(null);
    setInputValue('');
    setIsDropdownOpen(false);
  };

  const startTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(resetState, 5000);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prev => !prev);
    startTimeout();
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setInputValue('');
    startTimeout();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    startTimeout();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedOption && inputValue) {
      try {
        const isValid = await verifyCredentials(selectedOption, inputValue);
        if (isValid) {
          navigate('/transaction');
        } else {
          alert('Invalid credentials');
        }
      } catch (error) {
        console.error('Error verifying credentials:', error);
        alert('An error occurred. Please try again.');
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="login-dropdown">
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          <button type="button" className="dropdown-button" onClick={handleDropdownToggle}>
            Select Security Type
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <button className='btn' type="button" onClick={() => handleOptionSelect('pin')}>PIN</button>
              <button className='btn' type="button" onClick={() => handleOptionSelect('password')}>Password</button>
            </div>
          )}
        </div>
        {selectedOption && (
          <div className='blocLayout'>
            <input
              type={selectedOption === 'pin' ? 'number' : 'password'}
              placeholder={`Enter ${selectedOption}`}
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit" className="submit-button">Submit</button>
          </div>
        )}
      </form>
      <Link to='/account' className='back'>
        <h3>Go Back To Accounts</h3>
      </Link>
    </div>
  );
};

export default SecurityInputDropdown;
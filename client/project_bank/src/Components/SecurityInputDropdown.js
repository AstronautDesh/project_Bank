import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/inputDropdown.css';
import '../css/inputDropdownMobile.css';
import { verifyCredentials } from '../services/authService';

const SecurityInputDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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

  return (
    <div className="login-dropdown">
      <form onSubmit={handleSubmit}>
        <div className="dropdown">
          <button type="button" className="dropdown-button">
            Select Security Type
          </button>
          <div className="dropdown-content">
            <button type="button" onClick={() => handleOptionSelect('pin')}>PIN</button>
            <button type="button" onClick={() => handleOptionSelect('password')}>Password</button>
          </div>
        </div>
        {selectedOption && (
          <input
            type={selectedOption === 'pin' ? 'number' : 'password'}
            placeholder={`Enter ${selectedOption}`}
            value={inputValue}
            onChange={handleInputChange}
          />
        )}
        <button type="submit">Submit</button>
      </form>
      <Link to='/account' className='linktag'>
        <h3 className='back'>Go Back To Accounts</h3>
      </Link>
    </div>
  );
};

export default SecurityInputDropdown;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/inputDropdown.css';
import '../css/inputDropdownMobile.css';

const SecurityInputDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="login-dropdown">
      <div className="dropdown">
        <button className="dropdown-button">
          Select Security Type
        </button>
        <div className="dropdown-content">
          <button onClick={() => handleOptionSelect('pin')}>PIN</button>
          <button onClick={() => handleOptionSelect('password')}>Password</button>
        </div>
      </div>
      {selectedOption && (
        <input
          type={selectedOption === 'pin' ? 'number' : 'password'}
          placeholder={`Enter ${selectedOption}`}
        />
      )}
        <Link to='/account' className='linktag'>
      <h3 className='back'>Go Back To Accounts</h3>
      </Link>
    </div>
  );
};

export default SecurityInputDropdown;

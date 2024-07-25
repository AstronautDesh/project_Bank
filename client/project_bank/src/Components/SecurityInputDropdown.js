import React, { useState } from 'react';
import '../css/inputDropdown.css';

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
    </div>
  );
};

export default SecurityInputDropdown;

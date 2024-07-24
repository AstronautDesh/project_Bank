import React from 'react';
import { FaPaperPlane, FaInbox, FaFileInvoiceDollar, FaEllipsisH } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/accountDashboard.css';

const AccountDashboard = () => {
  return (
    <div className="account-dashboard">
      <div className="card-row">
      <Link to='/transaction-form' className='linktag'>
        <div className="card">
          <FaPaperPlane className="icon" />
          <p>Send</p>
        </div>
        </Link>
        <div className="card">
          <FaInbox className="icon" />
          <p>Receive</p>
        </div>
        <div className="card">
          <FaFileInvoiceDollar className="icon" />
          <p>Utility Bills</p>
        </div>
        <div className="card">
          <FaEllipsisH className="icon" />
          <p>More</p>
        </div>
      </div>
      <div className="dashboard">
        <img src="account-holder-image-url" alt="Account Holder" className="account-image" />
        <div className="account-details">
          <h2>Account Holder Name</h2>
          <p>Account Number: 123456789</p>
          <p>Current Balance: $10,000</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;

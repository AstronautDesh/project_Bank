// AccountPage.js
import React from 'react';
import IconsComponent from '../Components/MenuList';
import { Link } from 'react-router-dom';
import '../css/accountpage.css';
import '../css/accountMobile.css';

function AccountPage({ isMenuOpen }) {
  console.log('im here too');
  
  return (
        <div
          className='account'>
          <div className='account-grid'>
            <Link to='/open_account' className='linktag'>
            <div className='account-type'>
              <h3>Open Account</h3>
            </div>
            </Link>

            <Link to='/account-dashboard' className='linktag'>
            <div className='internet-banking'>
              <h3>Sign-In To Your Account</h3>
            </div>
            </Link>
          </div>
          <button className='login-btn'>Accounts ?</button>
          <IconsComponent />
        </div>
  );
}

export default AccountPage;

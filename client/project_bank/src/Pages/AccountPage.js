// AccountPage.js
import React from 'react';
import '../css/accountpage.css';
import IconsComponent from '../Components/MenuList';
import UserLogin from '../Components/UserLogin';

function AccountPage({ isMenuOpen }) {
  console.log('im here too');
  
  return (
        <div
          className='account'>
          <div className='account-grid'>
            <div className='account-type'>
              <h3>Open Account</h3>
            </div>
            <div className='internet-banking'>
              <h3>Sign-In To Your Account</h3>
            </div>
          </div>
          <button className='login-btn'>Accounts ?</button>
          <IconsComponent />
          <UserLogin />
        </div>
  );
}

export default AccountPage;

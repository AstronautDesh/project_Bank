import React from 'react';
import { Link } from 'react-router-dom';
import '../css/signUpForm.css';

const SignUpForm = () => {
  return (
    <div className="open_account">
      <h1>Welcome</h1>
      <h1>Create Account Here</h1>
      <form>
        <div className="inputbox">
          <input type="text" required="required" />
          <span>Full Name</span>
        </div>
        <div className="inputbox">
          <input type="email" required="required" />
          <span>Email</span>
        </div>
        <div className="inputbox">
          <input type="tel" required="required" />
          <span>Phone Number</span>
        </div>
        <div className="inputbox">
          <input type="password" required="required" />
          <span>Password</span>
        </div>
        <div className="inputbox">
          <input type="password" required="required" />
          <span>Confirm Password</span>
        </div>
        <div className="inputbox">
          <input type="submit" value="Submit" />
        </div>
      </form>

      <Link to='/account' className='linktag'>
      <h3 className='back'>Go Back To Accounts</h3>
      </Link>
    </div>
  );
};

export default SignUpForm;
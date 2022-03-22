import React from 'react';
import '../assets/Form.css';
import error from '../assets/error.png';
//for test page
import logo from '../assets/logo.svg';
import { Redirect } from 'react-router-dom';

const ErrorLogin = () => {
  const redirect=_=>{
    Redirect("/error");
  }

  setTimeout(() => {
    redirect()
}, 1000);

  return (
    <div className='form-container'>
    <span className='close-btn'></span>
    <div className='form-content-left'>
      <img className='form-img' src={logo} alt='spaceship' />
    </div>
    
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={error} alt='error-login-image' />
    </div>
    </div>
    
  );
};

export default ErrorLogin;

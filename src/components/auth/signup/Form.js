import React, { useState } from 'react';
import '../assets/Form.css';
import FormSignup from './FormSignup';
//import FormSuccess from './FormSuccess';
import logo from '../assets/logo.svg';
import { Redirect } from 'react-router-dom';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  const redirect=_=>{
    setTimeout(() => {
      Redirect("/login");
  }, 1000);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'></span>
        <div className='form-content-left'>
          <img className='form-img' src={logo} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )
        }
      </div>
    </>
  );
};

export default Form;

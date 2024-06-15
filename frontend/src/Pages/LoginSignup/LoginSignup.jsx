import React from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>

      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name...' />
          <input type='email' placeholder='Email Address...' />
          <input type='password' placeholder='Password...' />
        </div>

        <button>Continue</button>

        <p className="loginsignup-login">
          Already have an account? <a href='/login'><span>Login Here</span></a>
        </p>

        <div className="loginsignup-agree">
          <input type='checkbox' />
          <p>By signing up, I agree to your Terms & Conditions.</p>
        </div>

        </div>
      </div>

      
  )
}

export default LoginSignup;
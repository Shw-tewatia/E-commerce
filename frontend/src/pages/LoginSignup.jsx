import React from 'react'
import './CSS/LoginSignup.css' 

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="div loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email ID' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsingup-login">Already have an account? Login here</p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p> By continuing, i agree to the terms of use & privacy policy.</p>

        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup

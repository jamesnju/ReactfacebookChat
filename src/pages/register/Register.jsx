import React from 'react'
import './login.css';
export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">jameslog</h3>
                <span className="loginDesc">
                    coonect with your freinds
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Username' className="loginInput" />
                    <input type="email" placeholder='email' className="loginInput" />
                    <input type="password" placeholder='password' className="loginInput" />
                    <input type="pasword" placeholder='Confirm password' className="loginInput" />
                    <button className="loginButton">sign up </button>
                    <button className="loginRegisterButton">Sign in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

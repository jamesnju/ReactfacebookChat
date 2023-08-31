import React from 'react'
import './login.css';
export default function Login() {
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
                    <input type="email" placeholder='email' className="loginInput" />
                    <input type="pasword" placeholder='password' className="loginInput" />
                    <button className="loginButton">Log In </button>
                    <span className="loginForgot">Forgot Password ?</span>
                    <button className="loginRegisterButton">Creat New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './SignUpForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const SignUpForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Sign Up</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Email' required />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Confirm Password' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Sign Up</button>
            <div className="register-link">
                <p>Have an account? <a href="#">Login</a></p>
            </div>
        </form>
    </div>
  );
};

export default SignUpForm;
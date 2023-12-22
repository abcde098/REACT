// Login.jsx
import React, { useState } from 'react';
import './Login.css';
import { FaUser,FaLock } from "react-icons/fa";
import Register from './Register';
import { Link } from 'react-router-dom';

const Login = () => {
   return (
    <div className='im'>
     <div className='wrapper'>
    <form action=""> 
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon'/>
        </div>
        
        <div className="remember-forgot">
          <lable><input type="checkbox" />Remember me</lable>
          <a href="#">Forgot password?</a>
        

        </div>
        <Link to='/Plantmain'><button type="submit">Login</button></Link>

        <div className="register-link">
<p>Don't have an account? <Link to='/Register'>Register</Link></p>
    </div>
    </form>

    
    </div>
    </div>
   );
};

export default Login;
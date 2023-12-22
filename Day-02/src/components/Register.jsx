
import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { FaUser,FaLock,FaUnlock} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";

const Register = () => {
   return (
     <div className='wrapper'>
    <form action="">

      <h1>Register</h1>
      <div className="input-box">
        <input type="text" placeholder='Username' required />
        <FaUser className='icon'/>
        </div>
        
        <div className="input-box">
          <input type="email" placeholder='Email' required />
          <IoIosMail className='icon'/>
        </div>
        
        <div className="input-box">
          <input type="password" placeholder='password' required />
          <FaLock className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Confirm password' required />
          <FaUnlock className='icon'/>
        </div>
        <button type="submit">Sign up</button>

        <div className="register-link">
<p>Have an account? <Link to='/Login'>Login</Link></p>


    </div>
    </form>
    <footer>
        <p>&copy; 2023 Bookings.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

    
export default Register;
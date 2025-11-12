import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
function Navbar() {
    
  return (
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/news'>News</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/registration'>Registration</Link>
      <Link to='/login'> Login</Link>
  </nav>
  )
}
export default Navbar;
import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
function Navbar() {
    
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/news'>News</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/registration'>Registration</Link>
  </nav>
  )
}
export default Navbar;
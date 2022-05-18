import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar section'>
      <Link to='/' className="link">form</Link>
      <Link to='/process'className="link">proceselist</Link>
    </nav>
  );
};
export default Navbar;

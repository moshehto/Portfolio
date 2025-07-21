import React from 'react';
import { Link } from 'react-router-dom';
import './styling-comp/navbar.css'; // <-- Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <h1 className="navbar-logo">Mo Shehto</h1>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/projects" className="navbar-link">Projects</Link>
          <Link to="/resume" className="navbar-link">Resume</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

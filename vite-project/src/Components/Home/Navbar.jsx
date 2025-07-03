import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">Parking Finder</Link>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/listings">Find Parking</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/download">Download App</Link></li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

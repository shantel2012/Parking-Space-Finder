// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Parking Space Finder. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Download App</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}

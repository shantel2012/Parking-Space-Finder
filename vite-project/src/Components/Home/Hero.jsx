import React from 'react';
import './Hero.css'; // Create this file for styles

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>The Best Deals For Parking Lots</h1>
        <p>Reserve your spot with ease and save time, money, and stress.</p>
        <button className="cta-btn">Contact Us</button>
      </div>
    </section>
  );
}

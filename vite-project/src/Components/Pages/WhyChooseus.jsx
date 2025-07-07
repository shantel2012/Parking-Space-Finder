import React from "react";
import "./Whychooseus.css";

export default function HowItWorks() {
  return (
    <main className="how-container">
      <section className="how-hero">
        <h1>How ParkEase Works 🚘</h1>
        <p>Our easy-to-use system makes parking simple, convenient, and stress-free.</p>
      </section>

      <section className="steps-section">
        <div className="step-card">
          <h2>1️⃣ Find Parking</h2>
          <p>Search available parking spots near your destination with our interactive map or list view.</p>
        </div>

        <div className="step-card">
          <h2>2️⃣ Book & Pay</h2>
          <p>Select your preferred spot, choose the time you need it, and pay securely online.</p>
        </div>

        <div className="step-card">
          <h2>3️⃣ Park Easily</h2>
          <p>Arrive at your reserved spot and park with confidence — no more circling the block!</p>
        </div>
      </section>

      <section className="how-cta">
        <h2>Ready to park smarter?</h2>
        <a href="/signup" className="cta-button">Sign Up Now</a>
      </section>
    </main>
  );
}

import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <main className="pricing-container">
      <section className="pricing-hero">
        <h1>Choose the Best Plan for You</h1>
        <p>Flexible pricing options to fit your parking needs.</p>
      </section>

      <section className="pricing-cards">
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">$0<span>/month</span></p>
          <ul>
            <li>Search parking spots</li>
            <li>Book hourly</li>
            <li>Secure payments</li>
          </ul>
          <button className="select-button">Get Started</button>
        </div>

        <div className="pricing-card popular">
          <h2>Premium</h2>
          <p className="price">$9.99<span>/month</span></p>
          <ul>
            <li>All Basic features</li>
            <li>Reserve in advance</li>
            <li>Priority support</li>
          </ul>
          <button className="select-button">Choose Premium</button>
        </div>

        <div className="pricing-card">
          <h2>Enterprise</h2>
          <p className="price">Contact Us</p>
          <ul>
            <li>Custom solutions</li>
            <li>Dedicated account manager</li>
            <li>Volume discounts</li>
          </ul>
          <button className="select-button">Contact Sales</button>
        </div>
      </section>
    </main>
  );
}

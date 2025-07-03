// src/components/Pricing.jsx
import React from 'react';
import './Pricing.css';

export default function Pricing() {
  const plans = [
    { title: "Hourly", price: "$5/hr", details: "Short-term parking with hourly rates." },
    { title: "Daily", price: "$20/day", details: "Best for day trips and commuters." },
    { title: "Premium", price: "$50/day", details: "Reserved premium spots with extra services." },
  ];

  return (
    <section className="pricing">
      <h2>Pricing & Plans</h2>
      <div className="pricing-container">
        {plans.map((plan, i) => (
          <div key={i} className="pricing-card">
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.details}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

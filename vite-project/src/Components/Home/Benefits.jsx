// src/components/Benefits.jsx
import React from 'react';
import './Benefits.css';
import { FaMoneyBillWave, FaClock, FaSmile } from 'react-icons/fa';

export default function Benefits() {
  const items = [
    { icon: <FaMoneyBillWave />, title: "Save Money", text: "Affordable parking with competitive rates." },
    { icon: <FaClock />, title: "Save Time", text: "Reserve ahead and avoid circling for a spot." },
    { icon: <FaSmile />, title: "Save Stress", text: "Hassle-free parking with guaranteed availability." },
  ];

  return (
    <section className="benefits">
      <div className="benefits-container">
        {items.map((item, i) => (
          <div key={i} className="benefit-card">
            <div className="benefit-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

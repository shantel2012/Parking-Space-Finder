// src/components/Services.jsx
import React from 'react';
import './Services.css';
import { FaShower, FaConciergeBell } from 'react-icons/fa';

export default function Services() {
  const services = [
    { icon: <FaShower />, title: "Car Wash", text: "Get your car washed while you park." },
    { icon: <FaConciergeBell />, title: "Concierge", text: "Premium services like valet or package delivery." },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

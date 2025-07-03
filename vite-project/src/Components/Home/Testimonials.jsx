// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    { name: "Alex", text: "Amazing service, parking has never been easier!" },
    { name: "Jamie", text: "Affordable and secure. Highly recommend!" },
    { name: "Pat", text: "Best parking experience I've had in the city." },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p>"{t.text}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

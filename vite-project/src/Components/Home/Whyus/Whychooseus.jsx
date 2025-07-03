// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css'

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="content">
        <h2>Why Choose Us</h2>
        <p>We offer secure, affordable, and convenient parking spaces to make your life easier. Our network covers multiple locations to meet your needs.</p>
        <button className='btn'>Read More</button>
      </div>
      <div className="gallery">
        <img src="/assets/parking1.jpg" alt="Parking" />
        <img src="/assets/parking2.jpg" alt="Parking" />
        <img src="/assets/parking3.jpg" alt="Parking" />
      </div>
    </section>
  );
}

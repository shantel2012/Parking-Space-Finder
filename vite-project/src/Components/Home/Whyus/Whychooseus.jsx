// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css'
import hyp from '../../../assets/hyp.jpeg'
import toyota from '../../../assets/toyota.jpeg'
import vibe from '../../../assets/vibe.jpeg'

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="content">
        <h2>Why Choose Us</h2>
        <p>We offer secure, affordable, and convenient parking spaces to make your life easier. Our network covers multiple locations to meet your needs.</p>
        <button className='btn'>Read More</button>
      </div>
      <div className="gallery">
        <img src={hyp} alt="Parking" />
        <img src={toyota} alt="Parking" />
        <img src={vibe} alt="Parking" />
      </div>
    </section>
  );
}

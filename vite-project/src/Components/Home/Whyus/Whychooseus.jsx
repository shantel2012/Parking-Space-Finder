// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css'
import vibe from '../../../assets/vibe.jpeg'
import tisha from '../../../assets/tisha.jpeg'
import toyota from '../../../assets/toyota.jpeg'
import ethan from '../../../assets/ethan.jpeg'



export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="content">
        <h2>Why Choose Us</h2>
        <p>We offer secure, affordable, and convenient parking spaces to make your life easier. Our network covers multiple locations to meet your needs.</p>
        <button className='btn'>Read More</button>
      </div>
      <div className="gallery">
        <img src={ethan} alt="Parking" />
        <img src={toyota} alt="Parking" />
        <img src={vibe} alt="Parking" />
        <img src={tisha} alt="Parking" />
      </div>
    </section>
  );
}

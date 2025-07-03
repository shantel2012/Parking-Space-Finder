import React, { useState } from 'react';
import './BookingForm.css';

export default function BookingForm() {
  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', { location, name, phone });
    alert(`Booking requested for ${name} at ${location}!`);
    setLocation('');
    setName('');
    setPhone('');
  };

  return (
    <section className="booking-section">
      <form className="booking-form" onSubmit={handleSubmit}>
        <select value={location} onChange={(e) => setLocation(e.target.value)} required>
          <option value="">Select Parking Location</option>
          <option value="First Floor">First Floor</option>
          <option value="Second Floor">Second Floor</option>
          <option value="Basement">Basement</option>
        </select>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Your Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Request a Spot</button>
      </form>
    </section>
  );
}

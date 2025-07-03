import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SpotDetails.css';

export default function SpotDetails() {
  const { id } = useParams();

  // Dummy data matching Listings page
  const spots = [
    {
      id: '1',
      title: 'Central Parking Lot',
      location: 'Downtown',
      price: '$5/hr',
      images: ['/assets/parking1.jpg', '/assets/parking2.jpg'],
      description: 'Secure, spacious parking in the heart of downtown.',
    },
    {
      id: '2',
      title: 'Basement Garage',
      location: 'City Center',
      price: '$4/hr',
      images: ['/assets/parking2.jpg'],
      description: 'Covered parking with 24/7 security.',
    },
    {
      id: '3',
      title: 'Mall Parking',
      location: 'Westside',
      price: '$6/hr',
      images: ['/assets/parking3.jpg'],
      description: 'Convenient parking near major shopping malls.',
    },
  ];

  const spot = spots.find(s => s.id === id);

  if (!spot) {
    return (
      <div className="spot-details">
        <h2>Spot not found</h2>
        <Link to="/listings" className="back-btn">Back to Listings</Link>
      </div>
    );
  }

  return (
    <div className="spot-details">
      <div className="spot-header">
        <h1>{spot.title}</h1>
        <p>{spot.location}</p>
        <p className="price">{spot.price}</p>
      </div>

      <div className="spot-gallery">
        {spot.images.map((img, i) => (
          <img key={i} src={img} alt={`${spot.title} ${i + 1}`} />
        ))}
      </div>

      <p className="description">{spot.description}</p>

      <button className="book-btn">Book This Spot</button>

      <Link to="/listings" className="back-btn">← Back to Listings</Link>
    </div>
  );
}

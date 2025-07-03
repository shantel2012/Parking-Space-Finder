import React, { useState } from 'react';
import './Listings.css';

export default function Listings() {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data for parking spots
  const spots = [
    {
      id: 1,
      title: 'Central Parking Lot',
      location: 'Downtown',
      price: '$5/hr',
      image: '/assets/parking1.jpg'
    },
    {
      id: 2,
      title: 'Basement Garage',
      location: 'City Center',
      price: '$4/hr',
      image: '/assets/parking2.jpg'
    },
    {
      id: 3,
      title: 'Mall Parking',
      location: 'Westside',
      price: '$6/hr',
      image: '/assets/parking3.jpg'
    },
  ];

  const filteredSpots = spots.filter(spot =>
    spot.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spot.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="listings-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search location or parking name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="map-container">
        {/* Replace with real map API later */}
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed/v1/place?q=Harare,Zimbabwe&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="spots-list">
        {filteredSpots.length ? (
          filteredSpots.map(spot => (
            <div key={spot.id} className="spot-card">
              <img src={spot.image} alt={spot.title} />
              <div className="spot-info">
                <h3>{spot.title}</h3>
                <p>{spot.location}</p>
                <p className="price">{spot.price}</p>
                <a href={`/spot/${spot.id}`} className="details-btn">View Details</a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No parking spots found.</p>
        )}
      </div>
    </section>
  );
}

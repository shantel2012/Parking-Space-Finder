import React from 'react';
import './DownloadApp.css';

export default function DownloadApp() {
  return (
    <section className="download-page">
      <div className="download-content">
        <h1>Get the Parking Space Finder App</h1>
        <p>Book your perfect spot faster and manage your bookings on the go with our mobile app.</p>
        
        <div className="app-buttons">
          <a href="#" className="app-btn google-play">
            <img src="/assets/google-play-badge.png" alt="Download on Google Play" />
          </a>
          <a href="#" className="app-btn app-store">
            <img src="/assets/app-store-badge.png" alt="Download on App Store" />
          </a>
        </div>

        <div className="qr-section">
          <h3>Or scan to download:</h3>
          <img src="/assets/qr-code.png" alt="QR code to download app" className="qr-code" />
        </div>
      </div>
    </section>
  );
}

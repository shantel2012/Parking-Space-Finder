import React from 'react';
import './Hero.css'; // Create this file for styles

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>The Best Deals For Parking Lots</h1>
        <p>Reserve your spot with ease and save time, money, and stress.</p>
        <button className="cta-btn">Contact Us</button>
      </div>
    </section>
  );
}


// import React from "react";
// import "./Hero.css"; 
// // import tynoe from '../../assets/tynoe.jpeg'

// export default function Home() {
//   return (
//     <main className="home-container">
//       <section className="hero-section">
//         <div className="hero-text">
//           <h1>Welcome to ParkEase 🚗</h1>
//           <p>Your ultimate solution for finding and booking secure parking spaces anytime, anywhere.</p>
//           <a href="/signup" className="cta-button">Get Started</a>
//         </div>
//         <div className="hero-image">
//           {/* <img src={tynoe} alt="Parking illustration" /> */}
//         </div>
//       </section>

//       <section className="features-section">
//         <h2>Why Choose ParkEase?</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <h3>Easy Booking</h3>
//             <p>Reserve your parking spot with just a few clicks.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Secure Parking</h3>
//             <p>All listed spots are verified and safe for your vehicle.</p>
//           </div>
//           <div className="feature-card">
//             <h3>Save Time & Money</h3>
//             <p>Skip the hassle of searching for parking and avoid overpaying.</p>
//           </div>
//         </div>
//       </section>

//       <section className="cta-section">
//         <h2>Ready to simplify your parking experience?</h2>
//         <a href="/signup" className="cta-button">Create an Account</a>
//       </section>
//     </main>
//   );
// }

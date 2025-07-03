import React from 'react';
// import Navbar from '../components/Navbar';
import Hero from '../Home/Hero';
import BookingForm from '../Home/Bookingform';
import Benefits from '../Home/Benefits';
import Whychooseus from '../Home/Whyus/Whychooseus';
import Services from '../Home/Services';
import Pricing from '../Home/Pricing';
import Testimonials from '../Home/Testimonials';
import Contact from '../Home/Contact';
// import Footer from '../Home/Footer';

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <BookingForm/>
       <Benefits />
      <Whychooseus />
      <Services />
      <Pricing />
      <Testimonials />
      <Contact />
      {/* <Footer />  */}
    </>
  );
}

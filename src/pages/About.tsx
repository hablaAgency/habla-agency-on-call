
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

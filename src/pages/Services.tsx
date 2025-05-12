
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import ServicesHero from '../components/ServicesHero';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-16">
        <ServicesHero />
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

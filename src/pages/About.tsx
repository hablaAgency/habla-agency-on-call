
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AboutPage from '../components/AboutPage';

const AboutPageView = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-16">
        <AboutPage />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPageView;

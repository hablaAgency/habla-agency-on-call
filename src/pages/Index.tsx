
import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import About from '../components/About';
import Podcast from '../components/Podcast';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Intro />
      <Testimonials />
      <Services isHomePage={true} />
      <About />
      <Podcast />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

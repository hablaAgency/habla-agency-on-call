
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactPage from '../components/ContactPage';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-24">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

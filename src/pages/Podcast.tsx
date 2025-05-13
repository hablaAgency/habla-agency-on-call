
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Podcast from '../components/Podcast';

const PodcastPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="pt-16">
        <Podcast />
      </div>
      <Footer />
    </div>
  );
};

export default PodcastPage;

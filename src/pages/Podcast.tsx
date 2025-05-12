
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Podcast from '../components/Podcast';

const PodcastPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <div className="pt-24">
        <Podcast />
      </div>
      <Footer />
    </div>
  );
};

export default PodcastPage;

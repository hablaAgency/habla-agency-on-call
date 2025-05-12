
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-16 px-4 flex items-center bg-gradient-to-b from-white to-habla-gray"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block">Your marketing dream team</span>
            <div className="flex items-center justify-center mt-4">
              <span className="on-call-badge animate-pulse-slow">on call</span>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

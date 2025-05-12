
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
            <span className="block mb-2">Your marketing dream team</span>
            <div className="flex items-center justify-center">
              <span className="on-call-badge animate-pulse-slow">on call</span>
            </div>
          </h1>
          
          <div className="mt-12 relative">
            {/* Doodle illustrations - Abstract people working */}
            <div className="absolute -top-10 -left-20 opacity-50 hidden md:block animate-float">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40,30 Q50,10 60,30 T80,30" stroke="#1EAEDB" strokeWidth="2" fill="none"/>
                <circle cx="60" cy="20" r="10" stroke="#1EAEDB" strokeWidth="2" fill="none"/>
                <path d="M50,40 L70,40 L70,70 L50,70 Z" stroke="#1EAEDB" strokeWidth="2" fill="none"/>
                <path d="M40,60 L45,55 L50,60 L45,65 Z" stroke="#1EAEDB" strokeWidth="2" fill="none"/>
                <path d="M70,60 L75,55 L80,60 L75,65 Z" stroke="#1EAEDB" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-10 -right-20 opacity-50 hidden md:block animate-float" style={{ animationDelay: "1s" }}>
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="30" r="10" stroke="#ea384c" strokeWidth="2" fill="none"/>
                <path d="M50,40 L70,40 L70,70 L50,70 Z" stroke="#ea384c" strokeWidth="2" fill="none"/>
                <path d="M30,60 Q40,40 50,60 T70,60" stroke="#ea384c" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

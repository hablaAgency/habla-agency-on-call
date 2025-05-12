
import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-16 px-4 flex items-center bg-gradient-to-b from-white to-habla-gray"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%231EAEDB' stroke-width='1' d='M42,21L66,21L66,59L42,59ZM50,34C50,36.2 52.2,38 55,38C57.8,38 60,36.2 60,34C60,31.8 57.8,30 55,30C52.2,30 50,31.8 50,34ZM34,58C34,60.2 36.2,62 39,62C41.8,62 44,60.2 44,58C44,55.8 41.8,54 39,54C36.2,54 34,55.8 34,58ZM71,76C71,78.2 73.2,80 76,80C78.8,80 81,78.2 81,76C81,73.8 78.8,72 76,72C73.2,72 71,73.8 71,76Z'/%3E%3Cpath fill='none' stroke='%231EAEDB' stroke-width='1' d='M20,60L30,60L30,70L20,70Z'/%3E%3Cpath fill='none' stroke='%231EAEDB' stroke-width='1' d='M70,20L80,20L80,30L70,30Z'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
        backgroundOpacity: 0.1
      }}
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

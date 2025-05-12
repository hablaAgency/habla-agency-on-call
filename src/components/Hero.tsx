
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-16 px-4 flex items-center bg-gradient-to-b from-white to-habla-gray"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <div className={isMobile ? "" : "whitespace-nowrap"}>Your marketing dream team</div>
            <div className="flex items-center justify-center mt-4">
              <span className="on-call-badge animate-pulse-slow">on call</span>
            </div>
          </h1>
          
          <div className="mt-8 flex justify-center">
            <img 
              src="/lovable-uploads/461389c2-f824-4df8-be93-f462910f226a.png"
              alt="Marketing team illustration" 
              className="max-w-full md:max-w-2xl animate-fade-in"
              style={{ maxHeight: isMobile ? '200px' : '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

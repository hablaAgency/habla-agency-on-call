
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Badge } from './ui/badge';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 pb-16 px-4 flex items-center bg-gradient-to-b from-white to-habla-gray"
    >
      <div className="container mx-auto">
        <div className="mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <div className={isMobile ? "" : "whitespace-nowrap"}>Your marketing dream team</div>
            <div className="flex items-center justify-center mt-4">
              <span className="on-call-badge text-base md:text-lg px-4 py-2 animate-pulse-slow">on call</span>
            </div>
          </h1>
          
          <div className="mt-8 w-full flex justify-center">
            <img 
              src="/lovable-uploads/461389c2-f824-4df8-be93-f462910f226a.png"
              alt="Marketing team illustration" 
              className="w-auto animate-fade-in"
              style={{ 
                maxHeight: isMobile ? '400px' : '650px', 
                objectFit: 'contain',
                maxWidth: '90%'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

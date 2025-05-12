
import React, { useEffect, useState } from 'react';

const ServicesHero = () => {
  const [currentWord, setCurrentWord] = useState("Performance");
  const words = ["Performance", "Branding", "Fun", "Results", "Growth"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[(currentIndex + 1) % words.length]);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="min-h-[70vh] bg-gradient-to-r from-habla-blue to-blue-300 relative overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-20">
          <div className="md:w-1/2 text-white z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              {currentWord}
              <span className="block mt-2">on demand</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center z-10 mt-8 md:mt-0">
            <img 
              src="/lovable-uploads/fc5c94ad-1ddd-4fc4-86ce-ea07935f27c4.png" 
              alt="Construction workers building letter A" 
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
      {/* Decorative vertical line */}
      <div className="absolute h-full w-0.5 bg-white/30 left-1/2 transform -translate-x-1/2 z-0"></div>
    </section>
  );
};

export default ServicesHero;

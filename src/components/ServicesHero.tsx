
import React, { useEffect, useState } from 'react';

const ServicesHero = () => {
  const words = ["Performance", "Branding", "Fun", "Results", "Growth"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const typingSpeed = isDeleting ? 80 : 150; // Faster when deleting
    
    const timeout = setTimeout(() => {
      // If typing
      if (!isDeleting) {
        // If we haven't finished typing the current word
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Pause at the end of typing before starting to delete
          setTimeout(() => setIsDeleting(true), 1000);
          setIsTyping(false);
        }
      } else {
        // If deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          setIsTyping(true);
        } else {
          // Move to next word after deletion is complete
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsTyping(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full pt-0 pb-24">
          <div className="md:w-1/2 text-black z-10 md:pt-0 pt-8 md:-mt-20">
            <h1 className="text-[72px] font-bold mb-4">
              <div className="h-24 flex items-center">
                <span>{displayText}</span>
                <span className={`h-16 w-[5px] bg-black ml-1 inline-block ${isTyping ? 'animate-[pulse_1s_infinite]' : 'opacity-0'}`}></span>
              </div>
              <span className="block -mt-4 text-[#ea384c] text-[80px]">on demand</span>
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center z-10 mt-8 md:mt-0">
            <img 
              src="/lovable-uploads/fc5c94ad-1ddd-4fc4-86ce-ea07935f27c4.png" 
              alt="Construction workers building letter A" 
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* Decorative vertical line */}
      <div className="absolute h-full w-0.5 bg-black/30 left-1/4 transform -translate-x-1/2 z-0"></div>
    </section>
  );
};

export default ServicesHero;

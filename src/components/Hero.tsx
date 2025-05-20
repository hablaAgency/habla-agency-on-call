
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from './ui/carousel';

const Hero = () => {
  const isMobile = useIsMobile();
  
  // Array of successive phrases for the carousel
  const carouselPhrases = [
    "always working for you",
    "creative marketing solutions",
    "strategic campaign planning",
    "data-driven results",
    "personalized approach"
  ];
  
  // Create a repeated array with each phrase appearing multiple times
  // to ensure continuous flow without gaps
  const repeatedPhrases = carouselPhrases.flatMap(phrase => 
    Array(3).fill(phrase) // Each phrase appears 3 times consecutively
  );
  
  return (
    <>
      <section 
        id="hero" 
        className="min-h-screen pt-24 pb-16 px-4 flex items-center bg-gradient-to-b from-white to-habla-gray"
      >
        <div className="container mx-auto">
          <div className="mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              <div className={isMobile ? "" : "whitespace-nowrap"}>Tu marketing dream team</div>
              <div className="flex items-center justify-center mt-4 gap-2">
                <span className="text-habla-red">a una</span>
                <span className="text-habla-red">
                  llamada
                </span>
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
      
      <div className="w-full bg-habla-blue py-6 overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          className="w-full max-w-none"
          autoplay={true}
        >
          <CarouselContent className="flex animate-carousel">
            {repeatedPhrases.map((phrase, index) => (
              <CarouselItem key={index} className="flex-shrink-0 px-4">
                <div className="text-white text-lg md:text-2xl font-semibold uppercase whitespace-nowrap">
                  {phrase}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;


import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from './ui/carousel';
import { Phone } from 'lucide-react';

const Hero = () => {
  const isMobile = useIsMobile();
  
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
                <span className="flex items-center gap-2 bg-habla-blue text-white rounded-md px-4 py-2">
                  <Phone className="h-4 w-4" />
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
      
      <div className="w-full bg-habla-blue py-4 overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: true,
            dragFree: true,
          }}
          className="w-full"
          autoplay={true}
        >
          <CarouselContent className="flex animate-carousel">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="flex-shrink-0 px-8">
                <div className="text-white text-lg md:text-xl font-semibold uppercase whitespace-nowrap">
                  always working for you
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

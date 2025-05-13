
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    avatar: "/placeholder.svg",
    text: "Habla.agency transformó nuestra visión en una estrategia digital cohesiva que superó todas nuestras expectativas de rendimiento.",
    name: "Carlos Rodríguez",
    position: "Director de Marketing",
    company: "Empresa Innovadora",
    rating: 5
  },
  {
    id: 2,
    avatar: "/placeholder.svg",
    text: "Su capacidad para entregar resultados de calidad en tiempos récord ha sido fundamental para nuestro crecimiento en el mercado.",
    name: "Maria Fernández",
    position: "CEO",
    company: "Startup Digital",
    rating: 5
  },
  {
    id: 3,
    avatar: "/placeholder.svg",
    text: "El equilibrio perfecto entre creatividad y efectividad. Un equipo que realmente entiende las necesidades del mercado actual.",
    name: "Javier López",
    position: "Director General",
    company: "Empresa Internacional",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 bg-habla-gray">
      <div className="container mx-auto">
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Lo que dicen nuestros clientes</h2>
          
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-white p-6 md:p-8 rounded-3xl shadow-md flex flex-col items-center">
                      <div className="mb-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                          <span className="text-gray-500 text-xl">LOGO</span>
                        </div>
                      </div>
                      
                      <blockquote className="mb-6 text-center text-gray-700 max-w-2xl">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex mb-3">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <footer className="text-center">
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </footer>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-habla-blue' : 'bg-gray-300'
                  }`}
                  aria-label={`Ver testimonio ${index + 1}`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white shadow-md border border-gray-200 rounded-full"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white shadow-md border border-gray-200 rounded-full"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

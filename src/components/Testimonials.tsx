
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    logo: "Logo Empresa 1",
    text: "Habla.agency transformó nuestra visión en una estrategia digital cohesiva que superó todas nuestras expectativas de rendimiento.",
    name: "Nombre del Cliente",
    position: "Cargo",
    company: "Empresa 1"
  },
  {
    id: 2,
    logo: "Logo Empresa 2",
    text: "Su capacidad para entregar resultados de calidad en tiempos récord ha sido fundamental para nuestro crecimiento en el mercado.",
    name: "Nombre del Cliente",
    position: "Cargo",
    company: "Empresa 2"
  },
  {
    id: 3,
    logo: "Logo Empresa 3",
    text: "El equilibrio perfecto entre creatividad y efectividad. Un equipo que realmente entiende las necesidades del mercado actual.",
    name: "Nombre del Cliente",
    position: "Cargo",
    company: "Empresa 3"
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
                    <Card className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                      <div className="flex flex-col items-center">
                        <div className="mb-6 w-24 h-12 bg-gray-200 flex items-center justify-center rounded">
                          {testimonial.logo}
                        </div>
                        <blockquote className="mb-6 text-center text-gray-700">
                          "{testimonial.text}"
                        </blockquote>
                        <footer className="text-center">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                        </footer>
                      </div>
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
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white shadow-md border border-gray-200"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white shadow-md border border-gray-200"
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

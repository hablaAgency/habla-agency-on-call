
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Intro = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-12 leading-relaxed text-gray-700">
            En <span className="font-semibold">habla.agency</span> nos comprometemos con la excelencia y los resultados inmediatos. 
            Somos la primera línea de respuesta para tu empresa, entregando soluciones superiores exactamente cuando las necesitas. 
            Nuestra misión es convertir tus urgencias en oportunidades y tus ideas en realidades tangibles.
          </p>
          
          <div className="mt-10">
            <Button 
              className="bg-habla-red hover:bg-red-600 text-white px-8 py-6 rounded-md text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              ¡HAZ CLIC AHORA!
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-3 text-sm text-gray-500">No esperes más para transformar tu negocio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

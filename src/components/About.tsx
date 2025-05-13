
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-habla-gray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nosotros</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Somos una empresa en constante evolución con alma de startup y músculo de corporación. 
              En habla.agency fusionamos la agilidad y la innovación con la solidez y la experiencia.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Nos focalizamos obsesivamente en resultados, tratando a cada cliente como si fuera el único. 
              Nuestro compromiso con la calidad nunca está reñido con los tiempos de entrega, porque 
              entendemos que en el mundo digital, la velocidad y la excelencia deben ir de la mano.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Creemos firmemente en el poder del buen humor y las relaciones genuinas como catalizadores 
              del éxito. Respaldados por un equipo talentoso y apasionado, convertimos desafíos en 
              oportunidades y urgencias en soluciones brillantes.
            </p>
            
            <div className="flex justify-center mt-8">
              <img 
                src="/lovable-uploads/e3b0639f-e590-4e90-8180-8248160e18b4.png"
                alt="Equipo habla.agency" 
                className="w-full max-w-md rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

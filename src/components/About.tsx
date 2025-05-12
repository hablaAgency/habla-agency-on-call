
import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 px-4 bg-gradient-to-br from-habla-blue to-habla-lightBlue text-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Nosotros</h2>
          
          <div className="space-y-6 text-lg">
            <p>
              Somos una empresa en constante evolución con alma de startup y músculo de corporación. En habla.agency fusionamos la agilidad y la innovación con la solidez y la experiencia. Nos focalizamos obsesivamente en resultados, tratando a cada cliente como si fuera el único. Nuestro compromiso con la calidad nunca está reñido con los tiempos de entrega, porque entendemos que en el mundo digital, la velocidad y la excelencia deben ir de la mano.
            </p>
            <p>
              Creemos firmemente en el poder del buen humor y las relaciones genuinas como catalizadores del éxito. Respaldados por un equipo talentoso y apasionado, convertimos desafíos en oportunidades y urgencias en soluciones brillantes.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="aspect-square bg-white/10 rounded-lg flex items-center justify-center p-4">
                <svg viewBox="0 0 100 100" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="35" r="15" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M30,75 Q50,60 70,75" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M30,35 L30,45 M70,35 L70,45" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

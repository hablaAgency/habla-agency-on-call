
import React from 'react';
import { MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="nosotros" className="py-20 px-4 bg-[#e6f3ff] text-habla-darkGray">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#2276c3]">¿Quiénes somos?</h1>
          
          <div className="mb-16">
            <p className="text-lg mb-6">
              Somos una empresa en constante evolución con alma de startup y músculo de corporación. 
              En <span className="font-bold">habla.agency</span> fusionamos la agilidad y la innovación con la solidez y la experiencia. 
              Nos focalizamos obsesivamente en resultados, tratando a cada cliente como si fuera el único. 
              Nuestro compromiso con la calidad nunca está reñido con los tiempos de entrega, porque entendemos que en el mundo digital, 
              la velocidad y la excelencia deben ir de la mano.
            </p>
            
            <p className="text-lg">
              Creemos firmemente en el poder del buen humor y las relaciones genuinas como catalizadores del éxito. 
              Respaldados por un equipo talentoso y apasionado, convertimos desafíos en oportunidades y urgencias en soluciones brillantes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-4 text-[#2276c3]">
                  <MessageSquare size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2276c3]">Transparencia y comunicación</h3>
                <p className="text-gray-600">
                  Nos enorgullece mantener una comunicación clara y constante con 
                  nuestros clientes. Creemos en la colaboración abierta y en compartir 
                  cada paso del proceso, para que siempre sepas cómo y dónde se está 
                  invirtiendo tu tiempo y dinero.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-4 text-[#2276c3]">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2276c3]">Sin dolores de cabeza</h3>
                <p className="text-gray-600">
                  Olvídate de contratar, capacitar, tasas de rotación o días de enfermedad. 
                  Solo enfócate en tus necesidades y disfruta de todos los resultados sin 
                  complicaciones.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-4 text-[#2276c3]">
                  <Star size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#2276c3]">Talento top</h3>
                <p className="text-gray-600">
                  Contamos con un equipo de profesionales altamente capacitados: 
                  diseñadores gráficos, licenciados en marketing y comunicación, 
                  especialistas en desarrollo web, entre otros. Nos enfocamos en trabajar con 
                  personas que no solo dominan su campo, sino que también sienten 
                  verdadera pasión por lo que hacen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;

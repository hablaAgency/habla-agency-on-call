
import React from 'react';
import { MessageSquare, ShieldCheck, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="nosotros" className="py-20 px-4 bg-white text-habla-darkGray">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-[#2276c3]">¿Quiénes somos?</h1>
              
              <p className="text-lg">
                En <span className="font-bold">habla.agency</span> somos un equipo de profesionales 
                apasionados por el marketing digital, la creatividad, y la 
                innovación. Nuestra misión es ayudar a marcas y 
                negocios a alcanzar su máximo potencial a través de 
                estrategias personalizadas y efectivas que conecten con 
                su audiencia y generen resultados tangibles.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/17f4de34-74f6-444a-ac6b-c545e750cbc3.png" 
                alt="Habla Agency Team Illustration" 
                className="w-full h-auto"
              />
            </div>
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
      
      <div className="container mx-auto mt-16">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img 
            src="/lovable-uploads/9ea472df-92a5-4420-8fb8-f416ccbbf785.png" 
            alt="Equipo Habla Agency" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

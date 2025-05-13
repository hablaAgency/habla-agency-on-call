
import React, { useEffect, useRef } from 'react';
import { MessageSquare, ShieldCheck, Star, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AboutPage = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const investmentSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Añadir las clases de animación cuando las cards entren en el viewport
            const cards = entry.target.querySelectorAll('.card-animate');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
                card.classList.remove('opacity-0');
              }, index * 150); // Añadir un pequeño retraso entre cada card
            });
            
            // Dejar de observar una vez que las cards ya se han animado
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Empezar la animación cuando el 20% del elemento es visible
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    if (investmentSectionRef.current) {
      observer.observe(investmentSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-100 text-habla-darkGray">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-[#ea384c]">¿Quiénes somos?</h1>
              
              <p className="text-lg">
                En <span className="font-bold">habla.agency</span> somos un equipo de profesionales 
                apasionados por el marketing digital, la creatividad, y la 
                innovación. Nuestra misión es ayudar a marcas y 
                negocios a alcanzar su máximo potencial a través de 
                estrategias personalizadas y efectivas que conecten con 
                su audiencia y generen resultados tangibles.
              </p>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <div className="relative w-full max-w-md mx-auto">
                <AspectRatio ratio={1}>
                  <img 
                    src="/lovable-uploads/e45f0afe-c2ce-401c-bdf5-eeb82bc79c2d.png" 
                    alt="Equipo de Habla Agency" 
                    className="rounded-lg object-contain"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-animate opacity-0 bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:shadow-[#2226]">
              <CardContent className="p-8">
                <div className="mb-4 text-[#ea384c]">
                  <MessageSquare size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Transparencia y comunicación</h3>
                <p className="text-gray-600">
                  Nos enorgullece mantener una comunicación clara y constante con 
                  nuestros clientes. Creemos en la colaboración abierta y en compartir 
                  cada paso del proceso, para que siempre sepas cómo y dónde se está 
                  invirtiendo tu tiempo y dinero.
                </p>
              </CardContent>
            </Card>

            <Card className="card-animate opacity-0 bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:shadow-[#2226]">
              <CardContent className="p-8">
                <div className="mb-4 text-[#ea384c]">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Sin dolores de cabeza</h3>
                <p className="text-gray-600">
                  Olvídate de contratar, capacitar, tasas de rotación o días de enfermedad. 
                  Solo enfócate en tus necesidades y disfruta de todos los resultados sin 
                  complicaciones.
                </p>
              </CardContent>
            </Card>

            <Card className="card-animate opacity-0 bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:shadow-[#2226]">
              <CardContent className="p-8">
                <div className="mb-4 text-[#ea384c]">
                  <Star size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">Talento top</h3>
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

          {/* Nueva sección: Retorno de inversión y resultados sostenibles */}
          <div ref={investmentSectionRef} className="mb-16">
            <div className="card-animate opacity-0 bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:shadow-[#2226]">
              <div className="p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="text-[#ea384c] mb-4">
                    <BarChart size={48} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">Retorno de inversión y resultados sostenibles</h3>
                </div>
                <p className="text-gray-600">
                  Entendemos que, al final del día, lo único que importa es un excelente resultado final. 
                  Por eso, no solo nos enfocamos en ofrecerte tarifas competitivas, sino también en 
                  construir estrategias a largo plazo que maximicen tu retorno de inversión de manera sostenible. 
                  Nuestro objetivo es asegurarnos de que cada acción tenga un impacto duradero en el 
                  crecimiento de tu negocio, generando beneficios que perduren con el tiempo y se adapten a futuros desafíos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

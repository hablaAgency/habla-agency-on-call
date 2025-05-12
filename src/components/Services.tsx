
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  return (
    <section id="servicios" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Results at the snap of your fingers.</h2>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-habla-blue">Branding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-40 mb-6 bg-habla-gray rounded-lg flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50,20 C32,20 20,32 20,50 C20,68 32,80 50,80 C68,80 80,68 80,50 C80,32 68,20 50,20 Z M50,75 C35,75 25,65 25,50 C25,35 35,25 50,25 C65,25 75,35 75,50 C75,65 65,75 50,75 Z" fill="#1EAEDB" />
                  <path d="M50,30 C38,30 30,38 30,50 C30,62 38,70 50,70 C62,70 70,62 70,50 C70,38 62,30 50,30 Z" fill="#33C3F0" fillOpacity="0.5" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Posicionamos tu marca en el corazón de tu audiencia. En el mercado actual, un vínculo emocional sólido es el activo más valioso que puedes construir. Desarrollamos identidades de marca que resuenan, conectan y perduran, porque sabemos que vender es mucho más fácil cuando estás estratégicamente posicionado. Transformamos percepciones en preferencias y curiosidad en lealtad.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-habla-blue">Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-40 mb-6 bg-habla-gray rounded-lg flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20,80 L80,80" stroke="#1EAEDB" strokeWidth="3" />
                  <path d="M20,80 L20,40 L35,50 L50,30 L65,45 L80,20" stroke="#1EAEDB" strokeWidth="3" fill="none" />
                  <circle cx="20" cy="40" r="3" fill="#33C3F0" />
                  <circle cx="35" cy="50" r="3" fill="#33C3F0" />
                  <circle cx="50" cy="30" r="3" fill="#33C3F0" />
                  <circle cx="65" cy="45" r="3" fill="#33C3F0" />
                  <circle cx="80" cy="20" r="3" fill="#33C3F0" />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Generamos resultados medibles que impulsan tu crecimiento. Nuestra metodología se basa en el ciclo virtuoso de aprender, mejorar y repetir. Analizamos datos en tiempo real para optimizar estrategias, maximizar el ROI y garantizar que cada acción tenga un impacto directo en tus objetivos de negocio. Con habla.agency, cada inversión se convierte en un paso medible hacia el éxito.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

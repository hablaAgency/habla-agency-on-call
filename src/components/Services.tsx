
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, Lightbulb, Instagram, Megaphone, 
  Code, Search, Palette, Film, Handshake, 
  Newspaper, ArrowsUpFromLine, Smartphone
} from 'lucide-react';

const Services = () => {
  const servicesList = [
    { name: 'Estrategia de negocio', icon: <TrendingUp size={40} /> },
    { name: 'Branding y posicionamiento', icon: <Lightbulb size={40} /> },
    { name: 'Gestión de redes sociales', icon: <Instagram size={40} /> },
    { name: 'Marketing digital de performance', icon: <TrendingUp size={40} /> },
    { name: 'Publicidad online', icon: <Megaphone size={40} /> },
    { name: 'Diseño y desarrollo web', icon: <Code size={40} /> },
    { name: 'Optimización SEO y contenido', icon: <Search size={40} /> },
    { name: 'Diseño gráfico y de piezas creativas', icon: <Palette size={40} /> },
    { name: 'Producción audiovisual y fotografía', icon: <Film size={40} /> },
    { name: 'Acuerdos comerciales y alianzas estratégicas', icon: <Handshake size={40} /> },
    { name: 'Gestión de medios y prensa', icon: <Newspaper size={40} /> },
    { name: 'Transformación digital y CRM', icon: <ArrowsUpFromLine size={40} /> },
  ];

  return (
    <>
      {/* First section with the blue pattern background */}
      <section 
        className="py-20"
        style={{
          backgroundColor: "#1EAEDB", // Solid blue background color
          backgroundImage: "linear-gradient(135deg, rgba(51, 195, 240, 0.3) 25%, transparent 25%, transparent 50%, rgba(51, 195, 240, 0.3) 50%, rgba(51, 195, 240, 0.3) 75%, transparent 75%, transparent)",
          backgroundSize: "40px 40px", // Pattern size
        }}
      >
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Somos tu primer llamado.
                <br />
                Y también el único que vas a necesitar
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-white">
                  Sabemos que hacer crecer un negocio en el entorno digital puede 
                  parecer complejo. Por eso, en nuestra agencia no solo te acompañamos: 
                  te resolvemos todo.
                </p>
                <p className="text-lg text-white">
                  No importa si necesitás posicionar tu marca, vender más, optimizar 
                  procesos o simplemente dejar de sentir que estás solo. Somos ese 
                  equipo de especialistas que trabaja detrás de escena para que todo 
                  funcione.
                </p>
                <p className="text-lg text-white">
                  Nuestra propuesta es integral. Te brindamos una solución a medida, 
                  diseñada con estrategia, creatividad y foco en resultados.
                </p>
              </div>
            </div>
            <div className="md:w-2/5 flex justify-center">
              <div className="w-1/2 md:w-64 h-auto flex items-center justify-center">
                <svg width="100" height="160" viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="20" y="10" width="60" height="140" rx="10" stroke="white" strokeWidth="4"/>
                  <rect x="35" y="20" width="30" height="5" rx="2.5" fill="white"/>
                  <rect x="30" y="130" width="40" height="10" rx="5" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second section with the gray background for services icons */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">¿Qué podemos hacer por tu marca?</h3>
            <p className="text-xl font-semibold text-habla-blue">Todo esto. Y más.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {servicesList.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-3 text-habla-blue">{service.icon}</div>
                <span className="text-sm font-medium">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">Results at the snap of your fingers.</h2>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="rounded-full overflow-hidden w-40 h-40 md:w-48 md:h-48">
                <img 
                  src="/lovable-uploads/2d951d1b-0057-47cd-98a5-69a467f9e526.png" 
                  alt="Character with infinity gauntlet" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

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
    </>
  );
};

export default Services;

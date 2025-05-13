
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  TrendingUp, Lightbulb, Instagram, Megaphone, 
  Code, Search, Palette, Film, Handshake, 
  Newspaper, ArrowsUpFromLine, Smartphone
} from 'lucide-react';

interface ServicesProps {
  isHomePage?: boolean;
}

const Services = ({ isHomePage = false }: ServicesProps) => {
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

  const portfolioItems = [
    {
      title: "Multitek",
      description: "Diseño web para empresa de soluciones B2B",
      category: "Diseño Web",
      image: "/lovable-uploads/fba5eb33-f856-448a-a7d4-d6ab47db66f0.png"
    },
    {
      title: "Easy Rent",
      description: "Plataforma de gestión inmobiliaria",
      category: "Diseño Web y UX/UI",
      image: "/lovable-uploads/da74bcb5-214a-455e-a838-5586bb8f0c56.png"
    },
    {
      title: "Panamá 'Onde Uno",
      description: "Portal de turismo y experiencias locales",
      category: "Diseño Web",
      image: "/lovable-uploads/299d6d2a-ad27-4264-91fc-876798e1b592.png"
    },
    {
      title: "Paradise Point",
      description: "Web para complejo turístico de lujo",
      category: "Diseño Web",
      image: "/lovable-uploads/02e0c444-f528-48f6-93c2-48d4fbb2fc1d.png"
    },
    {
      title: "Parque del Buen Retiro",
      description: "Estrategia digital y redes sociales",
      category: "Redes Sociales",
      image: "/lovable-uploads/5d79a657-afdb-4a84-9b88-432cf7bf7551.png"
    },
    {
      title: "La Oficina de mi Abuelo",
      description: "Web y gestión de redes para hospedaje",
      category: "Diseño Web y RRSS",
      image: "/lovable-uploads/19a68100-0c89-4ba2-8486-d7b6ee5cdeca.png"
    }
  ];

  return (
    <>
      {/* First section with the blue pattern background - Only show on Services page */}
      {!isHomePage && (
        <section 
          className="py-20"
          style={{
            backgroundImage: "url('/lovable-uploads/657c7256-5a30-4dba-9fa4-1f163d3f5012.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto max-w-6xl px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-white">
                  Somos tu primer llamado.
                  <br />
                  Y también el único que vas a necesitar
                </h2>
                <div className="space-y-2">
                  <p className="text-xs md:text-sm text-white">
                    Sabemos que hacer crecer un negocio en el entorno digital puede 
                    parecer complejo. Por eso, en nuestra agencia no solo te acompañamos: 
                    te resolvemos todo.
                  </p>
                  <p className="text-xs md:text-sm text-white">
                    No importa si necesitás posicionar tu marca, vender más, optimizar 
                    procesos o simplemente dejar de sentir que estás solo. Somos ese 
                    equipo de especialistas que trabaja detrás de escena para que todo 
                    funcione.
                  </p>
                  <p className="text-xs md:text-sm text-white">
                    Nuestra propuesta es integral. Te brindamos una solución a medida, 
                    diseñada con estrategia, creatividad y foco en resultados.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 lg:w-2/5 flex justify-end">
                <div className="w-full h-auto flex items-center justify-end">
                  <img 
                    src="/lovable-uploads/b13da488-e6bb-4760-849b-94fdc9247d53.png" 
                    alt="Teléfono" 
                    className="w-full md:w-[500px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Second section with the gray background for services icons - Only show on Services page */}
      {!isHomePage && (
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
      )}

      {/* Portfolio section - Only show on Services page */}
      {!isHomePage && (
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Nuestros trabajos</h3>
              <p className="text-xl font-semibold text-habla-blue">Casos de éxito que hablan por nosotros</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-white text-sm font-medium bg-habla-blue px-3 py-1 rounded-full inline-block mb-2 w-fit">{item.category}</span>
                      <h4 className="text-white text-xl font-bold">{item.title}</h4>
                      <p className="text-white/90 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-habla-blue text-xs font-medium uppercase tracking-wider">{item.category}</span>
                    <h4 className="font-bold text-xl mt-1 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Third section with Results at the snap - Show only on Home page */}
      {isHomePage && (
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
                      <path d="M50,20 C32,20 20,32 20,50 C20,68 32,80 50,80 C68,80 80,68 80,50 C80,32 68,20 50,20 Z M50,75 C35,75 25,65 25,50 C25,35 35,25 50,25 C65,25 75,35 75,50 C75,65 65,75 50,75 Z" fill="#1C77C3" />
                      <path d="M50,30 C38,30 30,38 30,50 C30,62 38,70 50,70 C62,70 70,62 70,50 C70,38 62,30 50,30 Z" fill="#3489D2" fillOpacity="0.5" />
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
                      <path d="M20,80 L80,80" stroke="#1C77C3" strokeWidth="3" />
                      <path d="M20,80 L20,40 L35,50 L50,30 L65,45 L80,20" stroke="#1C77C3" strokeWidth="3" fill="none" />
                      <circle cx="20" cy="40" r="3" fill="#3489D2" />
                      <circle cx="35" cy="50" r="3" fill="#3489D2" />
                      <circle cx="50" cy="30" r="3" fill="#3489D2" />
                      <circle cx="65" cy="45" r="3" fill="#3489D2" />
                      <circle cx="80" cy="20" r="3" fill="#3489D2" />
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
      )}
    </>
  );
};

export default Services;

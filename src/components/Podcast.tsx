
import React, { useState } from 'react';
import { Youtube, Music, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

// Episode data
const episodes = [
  {
    id: 1,
    number: "#1",
    title: "El triángulo del PM - Si algo falla, todo falla",
    guest: "Florencia Merino",
    image: "/lovable-uploads/96b88a0e-893c-4331-bbc3-9dfbf5050406.png",
  },
  {
    id: 2,
    number: "#2",
    title: "El arte está en contar buenas historias",
    guest: "Rafael Acuña Ríos",
    image: "/lovable-uploads/dbce036c-d824-4f5a-8fc4-34b2811f4983.png",
  },
  {
    id: 3,
    number: "#3",
    title: "¿Qué hace falta para vivir viajando?",
    guest: "Gustavo Eduardo",
    image: "/lovable-uploads/226c62d9-468b-4625-ad87-3299e0d42481.png",
  },
  {
    id: 4,
    number: "#4",
    title: "¿Qué aprendí en Harvard y Silicon Valley?",
    guest: "Fabián Chernizky",
    image: "/lovable-uploads/ad9c7fdf-f00c-4097-965b-14772a96b9e3.png",
  },
  {
    id: 6,
    number: "#6",
    title: "El puente entre la ciencia y el dinero",
    guest: "Nicolás Sujovolsky",
    image: "/lovable-uploads/913b93d1-12e1-47ba-9217-fb9e5feb3c31.png",
  },
  {
    id: 7,
    number: "#7",
    title: "Soy traductor entre programadores y clientes",
    guest: "Agustín Salamone",
    image: "/lovable-uploads/e3b0639f-e590-4e90-8180-8248160e18b4.png",
  },
  {
    id: 8,
    number: "#8",
    title: "Emprender es caer y levantarse",
    guest: "Diego Balboni",
    image: "/lovable-uploads/2e10e36b-a9ca-4300-82ad-e0b6ec69c24f.png",
  },
  {
    id: 9,
    number: "#9",
    title: "El arte de animar y emprender - La historia de Búho",
    guest: "Ezequiel Adatto",
    image: "/lovable-uploads/15cbd167-3c81-49ed-82a3-a14a5d87fc6b.png",
  },
  {
    id: 10,
    number: "#10",
    title: "¿Cómo convertir tu pasión en una marca exitosa?",
    guest: "Dai Altamura",
    image: "/lovable-uploads/a510c097-ccc8-4234-b9e4-472f86b31c0e.png",
  }
];

// Get the latest episode (Ezequiel Adatto's episode)
const latestEpisode = episodes.find(ep => ep.guest === "Ezequiel Adatto") || episodes[7];

const Podcast = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 6;
  
  // Calculate pagination
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);
  const totalPages = Math.ceil(episodes.length / episodesPerPage);

  // Change page handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero section - 100vh height */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20 min-h-[100vh] pt-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Un café con <span className="text-habla-red">habla.agency</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Conversaciones inspiradoras con emprendedores, creativos y profesionales destacados que comparten sus experiencias, desafíos y aprendizajes. Un espacio para conectar con historias que motivan e impulsan el crecimiento profesional y personal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors px-8 py-6"
                onClick={() => window.open('https://www.youtube.com/@habla.agency', '_blank')}
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-8 py-6"
                onClick={() => window.open('https://open.spotify.com/show/0X5oJ9pSZ8QpuZYO8ccEzS', '_blank')}
              >
                <Music className="h-5 w-5" />
                <span>Spotify</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="w-full h-full absolute top-[-10px] left-[-10px] bg-habla-red rounded-lg z-0"></div>
            <img 
              src="/lovable-uploads/04ce224b-e9db-45f5-a79a-934241c4ce1f.png" 
              alt="Un café con habla.agency" 
              className="w-full h-auto rounded-lg shadow-lg relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg z-20">
              <img 
                src="/lovable-uploads/c9b42c00-d42d-44a7-b128-890656412f09.png"
                alt="Logo Un Café con habla.agency"
                className="w-20 h-auto"
              />
            </div>
          </div>
        </div>

        {/* About section with mobile phone image on the left - 100vh height */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 min-h-[100vh]">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/0968423a-acf9-4fc8-857f-4784d1f76e9f.png" 
              alt="Un café con habla.agency mobile app" 
              className="w-auto h-[70vh] max-w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Sobre el podcast</h2>
            <p className="text-lg">
              "Un café con habla.agency" es un espacio donde conversamos con referentes de diferentes industrias para conocer sus historias, compartir aprendizajes y descubrir las claves de su éxito. Cada episodio es una oportunidad para inspirarse y obtener conocimientos valiosos que pueden transformar la forma en que abordamos nuestros propios proyectos.
            </p>
          </div>
        </div>

        {/* Latest featured episode - Ezequiel Adatto */}
        <div className="mb-16 bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-auto bg-habla-blue">
              <div className="absolute inset-0 bg-gradient-to-r from-habla-blue/90 to-habla-blue/60">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-20 w-20 text-white hover:scale-110 transition-transform cursor-pointer" />
                </div>
              </div>
              <img 
                src={latestEpisode.image}
                alt={`Episodio ${latestEpisode.number} con ${latestEpisode.guest}`} 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="text-xs font-semibold tracking-wider text-habla-red uppercase mb-2">Último episodio</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{latestEpisode.title}</h3>
              <p className="text-gray-600 mb-2">
                Con {latestEpisode.guest}
              </p>
              <p className="text-gray-600 mb-6">
                En este episodio exploramos el arte de la animación y el emprendimiento, descubriendo la historia detrás de Búho y los desafíos de convertir una pasión creativa en un negocio exitoso.
              </p>
              <Button 
                className="self-start flex items-center gap-2 bg-habla-red hover:bg-red-700"
                onClick={() => window.open('https://www.youtube.com/@habla.agency', '_blank')}
              >
                Ver este episodio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Episodes grid */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Episodios</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentEpisodes.map((episode) => (
              <Card key={`${episode.number}-${episode.guest}`} className="overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={episode.image} 
                    alt={`Episodio ${episode.number} con ${episode.guest}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <span className="text-xl font-bold text-white">{episode.number}</span>
                    <h4 className="text-white font-medium">{episode.guest}</h4>
                  </div>
                  <div className="absolute top-0 right-0 bg-habla-red text-white text-xs font-bold py-1 px-3">
                    NUEVO
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold line-clamp-2 mb-2">{episode.title}</h3>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-2 border-habla-red text-habla-red hover:bg-habla-red hover:text-white"
                  >
                    <Play className="h-4 w-4 mr-2" /> Escuchar ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    onClick={() => paginate(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {/* Episode list table for desktop */}
        <div className="hidden lg:block mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <h2 className="text-2xl font-bold p-6 border-b">Todos los episodios</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">#</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Invitado</TableHead>
                <TableHead className="text-right">Escuchar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {episodes.map((episode) => (
                <TableRow key={`table-${episode.number}-${episode.guest}`} className="hover:bg-gray-50">
                  <TableCell className="font-bold">{episode.number}</TableCell>
                  <TableCell className="font-medium">{episode.title}</TableCell>
                  <TableCell>{episode.guest}</TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:text-habla-red"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Podcast;

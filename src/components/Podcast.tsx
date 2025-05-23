import React, { useState, useEffect } from 'react';
import { Youtube, Music, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

// Episode data - corrected episode numbers
const episodes = [
  {
    id: 1,
    number: "#1",
    title: "El triángulo del PM - Si algo falla, todo falla",
    guest: "Florencia Merino",
    image: "/lovable-uploads/96b88a0e-893c-4331-bbc3-9dfbf5050406.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz" 
  },
  {
    id: 2,
    number: "#2",
    title: "El arte está en contar buenas historias",
    guest: "Rafael Acuña Ríos",
    image: "/lovable-uploads/dbce036c-d824-4f5a-8fc4-34b2811f4983.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  },
  {
    id: 3,
    number: "#3",
    title: "¿Qué hace falta para vivir viajando?",
    guest: "Gustavo Eduardo",
    image: "/lovable-uploads/226c62d9-468b-4625-ad87-3299e0d42481.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  },
  {
    id: 4,
    number: "#4",
    title: "¿Qué aprendí en Harvard y Silicon Valley?",
    guest: "Fabián Chernizky",
    image: "/lovable-uploads/ad9c7fdf-f00c-4097-965b-14772a96b9e3.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  },
  {
    id: 5,
    number: "#5",
    title: "El puente entre la ciencia y el dinero",
    guest: "Nicolás Sujovolsky",
    image: "/lovable-uploads/913b93d1-12e1-47ba-9217-fb9e5feb3c31.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  },
  {
    id: 6,
    number: "#6", 
    title: "¿Cómo convertir tu pasión en una marca exitosa?",
    guest: "Dai Altamura",
    image: "/lovable-uploads/a510c097-ccc8-4234-b9e4-472f86b31c0e.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  },
  {
    id: 7,
    number: "#7",
    title: "Soy traductor entre programadores y clientes",
    guest: "Agustín Salamone",
    image: "/lovable-uploads/e3b0639f-e590-4e90-8180-8248160e18b4.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  },
  {
    id: 8,
    number: "#8",
    title: "Emprender es caer y levantarse",
    guest: "Diego Balboni",
    image: "/lovable-uploads/2e10e36b-a9ca-4300-82ad-e0b6ec69c24f.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  },
  {
    id: 9,
    number: "#9",
    title: "El arte de animar y emprender - La historia de Búho",
    guest: "Ezequiel Adatto",
    image: "/lovable-uploads/15cbd167-3c81-49ed-82a3-a14a5d87fc6b.png",
    youtubeUrl: "https://www.youtube.com/@habla.agency/videos",
    spotifyUrl: "https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
  }
];

const Podcast = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const episodesPerPage = 6;
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  
  // Calculate pagination
  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode);
  const totalPages = Math.ceil(episodes.length / episodesPerPage);

  // Change page handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Animation on load/scroll
  useEffect(() => {
    setIsHeroVisible(true);
    
    const handleScroll = () => {
      const phoneSection = document.getElementById('phone-section');
      if (phoneSection) {
        const rect = phoneSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        setIsPhoneVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Hero section - reduced height */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20 min-h-[80vh] pt-10">
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
                className="flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors px-8 py-6 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://www.youtube.com/@habla.agency', '_blank')}
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-8 py-6 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz', '_blank')}
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
              className={`w-full h-auto rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.25)] relative z-10 transition-all duration-1000 transform ${isHeroVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-20">
              <img 
                src="/lovable-uploads/c9b42c00-d42d-44a7-b128-890656412f09.png"
                alt="Logo Un Café con habla.agency"
                className="w-20 h-auto"
              />
            </div>
          </div>
        </div>

        {/* About section with mobile phone image on the left - 100vh height */}
        <div id="phone-section" className="flex flex-col md:flex-row items-center gap-8 mb-16 min-h-[100vh]">
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/lovable-uploads/0968423a-acf9-4fc8-857f-4784d1f76e9f.png" 
              alt="Un café con habla.agency mobile app" 
              className={`w-auto h-[70vh] max-w-full transition-all duration-1000 delay-300 transform ${isPhoneVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'}`}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Sobre el podcast</h2>
            <p className="text-lg">
              "Un café con habla.agency" es un espacio donde conversamos con referentes de diferentes industrias para conocer sus historias, compartir aprendizajes y descubrir las claves de su éxito. Cada episodio es una oportunidad para inspirarse y obtener conocimientos valiosos que pueden transformar la forma en que abordamos nuestros propios proyectos.
            </p>
          </div>
        </div>

        {/* Episodes carousel - setting to 100vh height */}
        <div className="mb-20 min-h-[100vh] flex flex-col justify-center">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Episodios</h2>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            autoplay={true}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {episodes.map((episode) => (
                <CarouselItem key={`carousel-${episode.number}-${episode.guest}`} className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] h-full shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                    <div className="relative h-64 overflow-hidden bg-gray-200">
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
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg line-clamp-2 mb-4">{episode.title}</h3>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-2 border-habla-red text-habla-red hover:bg-habla-red hover:text-white shadow-md hover:shadow-lg"
                      >
                        <Play className="h-4 w-4 mr-2" /> Escuchar ahora
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious className="static transform-none mx-2 shadow-lg hover:shadow-xl" />
              <CarouselNext className="static transform-none mx-2 shadow-lg hover:shadow-xl" />
            </div>
          </Carousel>
        </div>

        {/* Episode list table for desktop - Updated with YouTube and Spotify links */}
        <div className="hidden lg:block mt-16 bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.15)] overflow-hidden">
          <h2 className="text-2xl font-bold p-6 border-b">Todos los episodios</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">#</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Invitado</TableHead>
                <TableHead className="text-right">Escuchar en</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {episodes.map((episode) => (
                <TableRow 
                  key={`table-${episode.number}-${episode.guest}`} 
                  className="hover:bg-habla-red hover:text-white transition-colors duration-200"
                >
                  <TableCell className="font-bold">{episode.number}</TableCell>
                  <TableCell className="font-medium">{episode.title}</TableCell>
                  <TableCell>{episode.guest}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 justify-end">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover:bg-transparent group"
                        onClick={() => window.open(episode.youtubeUrl, '_blank')}
                      >
                        <Youtube className="h-5 w-5 text-current group-hover:text-white" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="hover:bg-transparent group"
                        onClick={() => window.open(episode.spotifyUrl, '_blank')}
                      >
                        <Music className="h-5 w-5 text-current group-hover:text-white" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* CTA Section - New addition */}
        <div className="py-20 bg-gradient-to-r from-habla-red/90 to-habla-red rounded-lg shadow-[0_15px_30px_rgba(0,0,0,0.25)] mt-20 text-center text-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">¡Sigue nuestro podcast!</h2>
            <p className="text-xl mb-10">
              No te pierdas ningún episodio de "Un café con habla.agency". Suscríbete a nuestro canal y síguenos en tus plataformas favoritas para recibir notificaciones sobre nuevos lanzamientos.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Button 
                className="bg-white text-habla-red hover:bg-gray-100 flex items-center gap-3 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://www.youtube.com/@habla.agency', '_blank')}
              >
                <Youtube size={24} className="text-habla-red" />
                <span>Suscribirse en YouTube</span>
              </Button>
              <Button 
                className="bg-white text-green-600 hover:bg-gray-100 flex items-center gap-3 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz', '_blank')}
              >
                <Music size={24} className="text-green-600" />
                <span>Seguir en Spotify</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;

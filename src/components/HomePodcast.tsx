
import React from 'react';
import { Youtube, Music, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomePodcast = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Un café con <span className="text-habla-red">habla.agency</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Acompáñanos en nuestro podcast donde compartimos tendencias, estrategias y conversaciones inspiradoras sobre el mundo del marketing digital y la comunicación estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors px-6 py-5"
                onClick={() => window.open('https://www.youtube.com/@habla.agency', '_blank')}
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-6 py-5"
                onClick={() => window.open('https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz', '_blank')}
              >
                <Music className="h-5 w-5" />
                <span>Spotify</span>
              </Button>
            </div>
            <div className="mt-8">
              <Link to="/podcast" className="inline-flex items-center text-habla-red hover:text-red-700 font-semibold transition-colors">
                Ver todos los episodios <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-full h-full absolute top-[-10px] left-[-10px] bg-habla-red rounded-lg z-0"></div>
            <img 
              src="/lovable-uploads/04ce224b-e9db-45f5-a79a-934241c4ce1f.png" 
              alt="Un café con habla.agency" 
              className="w-full h-auto rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.25)] relative z-10"
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
      </div>
    </section>
  );
};

export default HomePodcast;

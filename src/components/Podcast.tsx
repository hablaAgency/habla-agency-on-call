
import React from 'react';
import { Button } from '@/components/ui/button';
import { Youtube, Music } from 'lucide-react';

const Podcast = () => {
  return (
    <section id="podcast" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Un café con habla.agency</h2>
            <p className="text-lg mb-8 text-gray-700">
              Acompáñanos en nuestro podcast donde compartimos tendencias, estrategias y conversaciones 
              inspiradoras sobre el mundo del marketing digital y la comunicación estratégica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </Button>
              
              <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                <Music className="w-5 h-5" />
                <span>Spotify</span>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/96b88a0e-893c-4331-bbc3-9dfbf5050406.png"
                alt="Podcast Un café con habla.agency" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold">Último episodio</h3>
                  <p className="text-white/80 text-sm">Tendencias de marketing para 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;

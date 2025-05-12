
import React from 'react';
import { Youtube, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Podcast = () => {
  return (
    <section id="podcast" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Un café con habla.agency</h2>
          
          <p className="text-lg text-gray-700 mb-10">
            Acompáñanos en nuestro podcast donde compartimos tendencias, estrategias y conversaciones inspiradoras sobre el mundo del marketing digital y la comunicación estratégica.
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors px-8 py-6"
            >
              <Youtube className="h-5 w-5" />
              <span>YouTube</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-8 py-6"
            >
              <Music className="h-5 w-5" />
              <span>Spotify</span>
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="aspect-video bg-gray-200 rounded-xl shadow-lg flex items-center justify-center">
              <div className="text-4xl text-gray-400 flex items-center flex-col">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12,8 C9.8,8 8,9.8 8,12 C8,14.2 9.8,16 12,16 C14.2,16 16,14.2 16,12 C16,9.8 14.2,8 12,8 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z" fill="currentColor" />
                  <path d="M7,2 L17,2 C19.2,2 21,3.8 21,6 L21,18 C21,20.2 19.2,22 17,22 L7,22 C4.8,22 3,20.2 3,18 L3,6 C3,3.8 4.8,2 7,2 Z M7,4 C5.9,4 5,4.9 5,6 L5,18 C5,19.1 5.9,20 7,20 L17,20 C18.1,20 19,19.1 19,18 L19,6 C19,4.9 18.1,4 17,4 L7,4 Z" fill="currentColor" />
                </svg>
                <span className="mt-2">Podcast Thumbnail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;

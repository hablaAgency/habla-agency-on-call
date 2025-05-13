
import React from 'react';
import { Instagram, Linkedin, Youtube, Music, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic would go here
    console.log('Form submitted');
  };

  return (
    <section 
      className="py-16 px-4 min-h-[calc(100vh-180px)]" 
      style={{ 
        backgroundImage: 'url("/lovable-uploads/9e6e051a-3394-465d-9ff7-c0ec983cedc2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left side - Title and text */}
          <div className="text-white self-start">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Es momento de alcanzar tus objetivos
            </h1>
            
            <p className="text-lg mb-8">
              Queremos construir nuestro próximo caso de éxito, queremos construir nuestro próximo caso de éxito.
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-6">Encuéntranos en</h3>
              
              <div className="space-y-6">
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-white hover:text-opacity-80 transition-colors"
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <span>@habla.agency</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-white hover:text-opacity-80 transition-colors"
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span>/habla-agency</span>
                </a>
                
                <a 
                  href="https://www.youtube.com/@habla.agency" 
                  className="flex items-center gap-3 text-white hover:text-opacity-80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <Youtube className="h-6 w-6" />
                  </div>
                  <span>Habla Agency</span>
                </a>
                
                <a 
                  href="https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
                  className="flex items-center gap-3 text-white hover:text-opacity-80 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white/20 p-2 rounded-full">
                    <Music className="h-6 w-6" />
                  </div>
                  <span>Un café con habla.agency</span>
                </a>
              </div>
              
              <div className="mt-10">
                <p className="text-lg">¿Prefieres escribirnos directamente?</p>
                <a href="mailto:info@habla.agency" className="text-white hover:underline font-semibold">
                  info@habla.agency
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Form with characters */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Left Worker Character */}
            <div className="hidden md:block absolute -left-16 bottom-0 z-10">
              <img 
                src="/lovable-uploads/41ea5138-c7d1-4f92-9432-7b1f58a00805.png" 
                alt="Personaje con casco" 
                className="h-48" 
              />
            </div>
            
            {/* Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 w-full">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contáctanos
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <Input id="nombre" placeholder="Ingresa tu nombre" className="bg-gray-100" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <Input id="email" type="email" placeholder="ejemplo@email.com" className="bg-gray-100" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <Input id="telefono" type="tel" placeholder="+52 000 000 0000" className="bg-gray-100" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <Textarea 
                    id="mensaje"
                    placeholder="Cuéntanos cómo podemos ayudarte" 
                    rows={4} 
                    className="bg-gray-100 resize-none"
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Right Worker Character */}
            <div className="hidden md:block absolute -right-16 bottom-0 z-10">
              <img 
                src="/lovable-uploads/36292e76-9c63-4346-a49f-1379716b1403.png" 
                alt="Personaje con casco" 
                className="h-48" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

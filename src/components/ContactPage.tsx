
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
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          
          {/* Left Worker Character */}
          <div className="hidden md:block relative">
            <img 
              src="/lovable-uploads/41ea5138-c7d1-4f92-9432-7b1f58a00805.png" 
              alt="Personaje con casco" 
              className="h-60 absolute -left-20 top-1/2 transform -translate-y-1/2" 
            />
          </div>
          
          <div className="grid md:grid-cols-2 bg-white rounded-lg shadow-xl overflow-hidden w-full">
            {/* Left side - Title and social links */}
            <div className="bg-habla-blue p-8 lg:p-12 text-white flex flex-col justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-8">¿Listo para empezar tu proyecto?</h1>
                
                <p className="text-lg mb-8">
                  Contáctanos hoy mismo y comencemos a trabajar juntos para hacer realidad tu visión.
                </p>
              </div>
              
              <div className="mt-12">
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
            
            {/* Right side - Contact form */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">Envíanos un mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input id="name" placeholder="Tu nombre" required className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" required className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono (opcional)
                  </label>
                  <Input id="phone" type="tel" placeholder="+54 123 456 7890" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="¿En qué podemos ayudarte?" 
                    rows={6} 
                    required 
                    className="w-full resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-habla-red hover:bg-red-600 text-white flex items-center justify-center gap-2"
                >
                  ENVIAR <Send size={16} />
                </Button>
              </form>
            </div>
          </div>
          
          {/* Right Worker Character */}
          <div className="hidden md:block relative">
            <img 
              src="/lovable-uploads/36292e76-9c63-4346-a49f-1379716b1403.png" 
              alt="Personaje con casco" 
              className="h-60 absolute -right-20 top-1/2 transform -translate-y-1/2" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

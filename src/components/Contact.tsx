
import React from 'react';
import { Instagram, Linkedin, Youtube, Music, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-habla-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contacto</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Conéctate con nosotros:</h3>
            
            <div className="space-y-6">
              <a 
                href="#" 
                className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
              >
                <div className="bg-habla-blue/10 p-2 rounded-full">
                  <Instagram className="h-6 w-6" />
                </div>
                <span>@habla.agency</span>
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
              >
                <div className="bg-habla-blue/10 p-2 rounded-full">
                  <Linkedin className="h-6 w-6" />
                </div>
                <span>/habla-agency</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@habla.agency" 
                className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-habla-blue/10 p-2 rounded-full">
                  <Youtube className="h-6 w-6" />
                </div>
                <span>Habla Agency</span>
              </a>
              
              <a 
                href="https://open.spotify.com/show/2A0olalXjxwrff3F8cKsYz"
                className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-habla-blue/10 p-2 rounded-full">
                  <Music className="h-6 w-6" />
                </div>
                <span>Un café con habla.agency</span>
              </a>
            </div>
            
            <div className="mt-10">
              <p className="text-lg">¿Preferís escribirnos directamente?</p>
              <a href="mailto:hola@habla.agency" className="text-habla-blue hover:underline font-semibold">
                hola@habla.agency
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <Input id="nombre" placeholder="Tu nombre completo" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <Textarea id="mensaje" placeholder="¿Cómo podemos ayudarte?" rows={4} />
                </div>
                
                <Button type="submit" className="w-full bg-habla-red hover:bg-red-600 text-white flex items-center justify-center gap-2">
                  Enviar
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

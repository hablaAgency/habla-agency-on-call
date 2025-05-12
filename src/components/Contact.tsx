
import React from 'react';
import { Instagram, Linkedin, Youtube, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic would go here
    console.log('Form submitted');
  };

  return (
    <section id="contacto" className="py-20 px-4 bg-habla-gray">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Contacto</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Envíanos un mensaje</h3>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre" required />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={5} required />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-habla-blue hover:bg-blue-600 text-white"
                    >
                      ENVIAR
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Encuéntranos en</h3>
              
              <div className="space-y-6">
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
                >
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <Instagram className="h-6 w-6" />
                  </div>
                  <span>@habla.agency</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
                >
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span>/habla-agency</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
                >
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <Youtube className="h-6 w-6" />
                  </div>
                  <span>Habla Agency</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-gray-700 hover:text-habla-blue transition-colors"
                >
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <Music className="h-6 w-6" />
                  </div>
                  <span>Un café con habla.agency</span>
                </a>
              </div>
              
              <div className="mt-10">
                <p className="text-lg">¿Prefieres escribirnos directamente?</p>
                <a href="mailto:info@habla.agency" className="text-habla-blue hover:underline">
                  info@habla.agency
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

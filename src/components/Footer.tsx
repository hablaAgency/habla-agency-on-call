
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-habla-darkGray text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-white font-bold text-xl flex items-center">
              <span className="text-habla-red">habla</span>
              <span className="text-white">.agency</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} Habla Agency. Todos los derechos reservados.
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#servicios" className="text-sm text-gray-400 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="text-sm text-gray-400 hover:text-white transition-colors">
                Nosotros
              </a>
              <a href="#podcast" className="text-sm text-gray-400 hover:text-white transition-colors">
                Podcast
              </a>
              <a href="#contacto" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

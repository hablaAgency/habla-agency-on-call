
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-habla-darkGray text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-white font-bold text-xl flex items-center">
              <img 
                src="/lovable-uploads/7ef08172-49e2-439b-87e7-9023ba1e2df0.png" 
                alt="Habla Agency Logo" 
                className="h-6" 
              />
            </Link>
          </div>
          
          <div className="text-sm text-gray-400">
            © {currentYear} Habla Agency. Todos los derechos reservados.
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <Link to="/servicios" className="text-sm text-gray-400 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link to="/nosotros" className="text-sm text-gray-400 hover:text-white transition-colors">
                Nosotros
              </Link>
              <Link to="/podcast" className="text-sm text-gray-400 hover:text-white transition-colors">
                Podcast
              </Link>
              <Link to="/contacto" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

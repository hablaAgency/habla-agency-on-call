
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img 
            src="/lovable-uploads/0190c96f-f272-4860-9d8a-70cf4384567b.png" 
            alt="habla.agency logo" 
            className="h-6"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-habla-darkGray hover:text-habla-blue transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-habla-darkGray hover:text-habla-blue transition-colors">
            Nosotros
          </a>
          <a href="#podcast" className="text-habla-darkGray hover:text-habla-blue transition-colors">
            Podcast
          </a>
          <a href="#contacto">
            <Button variant="outline" className="border-habla-blue text-habla-blue hover:bg-habla-blue hover:text-white">
              Contacto
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#servicios" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="#podcast" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Podcast
            </a>
            <a 
              href="#contacto" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;


import React, { useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/0190c96f-f272-4860-9d8a-70cf4384567b.png" 
            alt="habla.agency logo" 
            className="h-6"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-habla-darkGray hover:text-habla-blue transition-colors flex items-center gap-1">
            <Home size={18} />
            Home
          </Link>
          <Link to="/servicios" className="text-habla-darkGray hover:text-habla-blue transition-colors">
            Servicios
          </Link>
          <Link to="/nosotros" className="text-habla-darkGray hover:text-habla-blue transition-colors">
            Nosotros
          </Link>
          <Link to="/podcast" className="text-habla-darkGray hover:text-habla-blue transition-colors">
            Podcast
          </Link>
          <Link to="/contacto">
            <Button variant="outline" className="border-habla-blue text-habla-blue hover:bg-habla-blue hover:text-white">
              Contacto
            </Button>
          </Link>
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
            <Link
              to="/" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2 flex items-center gap-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={18} />
              Home
            </Link>
            <Link
              to="/servicios" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/nosotros" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/podcast" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Podcast
            </Link>
            <Link
              to="/contacto" 
              className="text-habla-darkGray hover:text-habla-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;

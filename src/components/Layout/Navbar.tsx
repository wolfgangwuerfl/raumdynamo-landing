
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import LogoIcon from '../LogoIcon';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Räume', href: '#spaces' },
    { name: 'Vorteile', href: '#features' },
    { name: 'Kontakt', href: '#contact' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8',
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <LogoIcon />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-raumfabrik-blue transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              'px-4 py-2 rounded-md transition-all',
              isScrolled 
                ? 'bg-raumfabrik-blue text-white hover:bg-raumfabrik-blue-dark' 
                : 'bg-white/90 backdrop-blur-sm text-raumfabrik-blue hover:bg-white'
            )}
          >
            Anfragen
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-raumfabrik-blue py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-raumfabrik-blue text-white py-2 px-4 rounded-md hover:bg-raumfabrik-blue-dark text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Anfragen
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

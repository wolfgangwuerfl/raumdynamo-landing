
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 hero-pattern z-0"></div>
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-medium tracking-wide text-raumfabrik-blue bg-blue-50 rounded-full uppercase animate-fade-in">
            Professionelle Räume mieten
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Ihre <span className="text-raumfabrik-blue">Räume</span> für Erfolg und Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Flexibel mietbare Büro-, Konferenz- und Eventräume für Unternehmen jeder Größe, modern ausgestattet und perfekt gelegen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a
              href="#spaces"
              className="px-6 py-3 bg-raumfabrik-blue text-white rounded-md hover:bg-raumfabrik-blue-dark transition-colors shadow-md"
            >
              Räume entdecken
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-raumfabrik-blue-dark border border-raumfabrik-blue rounded-md hover:bg-gray-50 transition-colors"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#spaces" className="flex flex-col items-center text-gray-400 hover:text-raumfabrik-blue transition-colors">
          <span className="text-sm mb-2">Mehr entdecken</span>
          <ArrowDown size={20} />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
};

export default Hero;


import React from 'react';
import { Wifi, Clock, Map, Shield, Zap, Coffee } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-raumfabrik-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wifi size={24} />,
      title: "Highspeed WLAN",
      description: "Schnelles und zuverlässiges Internet in allen Räumlichkeiten für störungsfreies Arbeiten."
    },
    {
      icon: <Clock size={24} />,
      title: "Flexible Mietzeiten",
      description: "Buchen Sie stunden-, tage- oder monatsweise, je nach Ihrem individuellen Bedarf."
    },
    {
      icon: <Map size={24} />,
      title: "Zentrale Lage",
      description: "Optimal erreichbar mit ausreichend Parkplätzen und guter Anbindung an den ÖPNV."
    },
    {
      icon: <Shield size={24} />,
      title: "Sichere Umgebung",
      description: "Zugangskontrollsysteme und Überwachung für Ihre Sicherheit rund um die Uhr."
    },
    {
      icon: <Zap size={24} />,
      title: "Moderne Ausstattung",
      description: "Neueste Technik, ergonomische Möbel und professionelle Präsentationsmittel."
    },
    {
      icon: <Coffee size={24} />,
      title: "Komfortable Extras",
      description: "Kaffeeküche, Catering-Optionen und Pausenräume für Ihr Wohlbefinden."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-raumfabrik-blue bg-blue-50 rounded-full uppercase">
            Unsere Vorteile
          </span>
          <h2 className="section-title mt-2">Warum Sie sich für Raumfabrik entscheiden</h2>
          <p className="section-subtitle">
            Nutzen Sie unsere erstklassige Infrastruktur und Services für Ihre geschäftlichen Aktivitäten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

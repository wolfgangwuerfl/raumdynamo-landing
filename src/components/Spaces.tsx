
import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface SpaceCardProps {
  images: string[];
  title: string;
  price: string;
  capacity: string;
  size: string;
  features: string[];
  target: string;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ images, title, price, capacity, size, features, target }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 animate-fade-in">
      <div className="h-64 overflow-hidden relative">
        <Dialog>
          <DialogTrigger asChild>
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </DialogTrigger>
          <DialogContent className="p-4 max-w-4xl bg-white border-none rounded-lg">
            <DialogTitle className="sr-only">{title} Bilder</DialogTitle>
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image}
                        alt={`${title} ${index + 1}`}
                        className="w-full h-auto max-h-[70vh] object-contain rounded-lg mx-auto"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 lg:-left-12" />
              <CarouselNext className="right-2 lg:-right-12" />
            </Carousel>
          </DialogContent>
        </Dialog>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="text-raumfabrik-blue mb-4">{price}</div>

        <div className="flex justify-between mb-4 text-sm text-gray-600">
          <div>Kapazität: {capacity}</div>
          <div>Größe: {size}</div>
        </div>

        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-raumfabrik-blue">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={target}
          className="inline-flex items-center text-raumfabrik-blue hover:text-raumfabrik-blue-dark"
        >
          <span className="mr-1">Jetzt buchen</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

const Spaces: React.FC = () => {
  const spaces = [
    {
      images: [
        "/lovable-uploads/resized/Office.jpg"
      ],
      title: "Büroräume",
      price: "Ab 200€ pro Monat",
      capacity: "1-10 Personen",
      size: "20-100 m²",
      features: [
        "Teilweise möbliert",
        "24/7 Zugang",
        "Inklusive Nebenkosten",
        "Meetingräume buchbar"
      ],
      target: "https://raumfabrik.simplybook.it/v2/#book/count/1/"
    },
    {
      images: [
        "/lovable-uploads/resized/Schulungsraum.jpeg",
      ],
      title: "Konferenz/Schulungsräume",
      price: "Ab 100€ pro Tag",
      capacity: "2-30 Personen",
      size: "25-100 m²",
      features: [
        "Moderne Präsentationstechnik",
        "Flexible Bestuhlung",
        "Catering-Option"
      ],
      target: "https://raumfabrik.simplybook.it/v2/#book/count/1/"
    },
    {
      images: [
        "/lovable-uploads/resized/Parkplatz.jpg",
      ],
      title: "Parkplätze",
      price: "Für Mieter kostenlos",
      capacity: "Bis 50 Fahrzeuge",
      size: "800-1200 m²",
      features: [
        "Parkplätze auf dem Gelände sind umzäunt",
      ],
      target: ""
    },
    {
      images: [
        "/lovable-uploads/resized/Cafeteria.jpg",
        "/lovable-uploads/resized/Cafeteria2.jpg",
        "/lovable-uploads/resized/Cafeteria3.jpg",
        "/lovable-uploads/resized/Cafeteria4.jpg",
        "/lovable-uploads/resized/Cafeteria5.jpg"
      ],
      title: "Cafeteria",
      price: "Ab 200€ pro Tag",
      capacity: "Bis 100 Personen",
      size: "100 m²",
      features: [
        "Flexible Raumgestaltung",
        "Eigene Catering-Küche",
        "Veranstaltungstechnik verfügbar",
        "Networking Events möglich"
      ],
      target: "https://raumfabrik.simplybook.it/v2/#book/count/1/"
    },
    {
      images: [
        "lovable-uploads/resized/Foyer1.jpg",
        "lovable-uploads/resized/Foyer2.jpg",
        "lovable-uploads/resized/Foyer3.jpg",
      ],
      title: "Ausstellungs- und Eventflächen",
      price: "Ab 15€ pro Tag",
      capacity: "Flexibel",
      size: "Diverse Bereiche",
      features: [
        "WLAN & Drucker inklusive",
      ],
      target: "https://raumfabrik.simplybook.it/v2/#book/count/1/"
    },
    {
      images: [
        "lovable-uploads/resized/Carport1.jpg",
        "lovable-uploads/resized/Carport2.jpg"
      ],
      title: "Ladestationen für Elektrofahrzeuge",
      price: "individuell",
      capacity: "Diverses Volumen",
      size: "6 Ladestationen",
      features: [
        "24/7 Zugang",
        "Sicherheitsüberwachung"
      ],
      target: "https://raumfabrik.simplybook.it/v2/#book/count/1/"
    }
  ];

  return (
    <section id="spaces" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-raumfabrik-blue bg-blue-50 rounded-full uppercase">
            Unsere Räume
          </span>
          <h2 className="section-title mt-2">Finden Sie den perfekten Raum für Ihre Bedürfnisse</h2>
          <p className="section-subtitle">
            Von kleinen Büros bis zu großen Eventflächen – wir haben genau das, was Sie suchen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <SpaceCard
              key={index}
              images={space.images}
              title={space.title}
              price={space.price}
              capacity={space.capacity}
              size={space.size}
              features={space.features}
              target={space.target}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card mx-auto max-w-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-3">Gebäude und Umgebung</h3>
            <p className="text-gray-600 mb-4">
              Unser modernes Gebäude bietet Ihnen eine inspirierende Arbeitsumgebung in grüner Lage mit hervorragender Infrastruktur.
            </p>
            <div className="mt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <img
                    src="/lovable-uploads/7a154670-89c3-4c09-a4cc-cee4ea325f0e.png"
                    alt="Raumfabrik Gebäude"
                    className="w-full h-auto rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </DialogTrigger>
                <DialogContent className="p-4 max-w-5xl bg-white border-none">
                  <DialogTitle className="sr-only">Raumfabrik Gebäude</DialogTitle>
                  <img
                    src="/lovable-uploads/7a154670-89c3-4c09-a4cc-cee4ea325f0e.png"
                    alt="Raumfabrik Gebäude"
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;

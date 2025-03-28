
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-raumfabrik-blue bg-blue-50 rounded-full uppercase">
            Kontakt
          </span>
          <h2 className="section-title mt-2">Sprechen Sie uns an</h2>
          <p className="section-subtitle">
            Wir beraten Sie gerne und finden die passende Lösung für Ihre Anforderungen
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Senden Sie uns eine Nachricht</h3>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-blue-50 rounded-full text-raumfabrik-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">Allendestr. 68, 98574 Schmalkalden</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-blue-50 rounded-full text-raumfabrik-blue">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-gray-600">+49 03683 798 400</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-blue-50 rounded-full text-raumfabrik-blue">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">E-Mail</p>
                    <p className="text-gray-600">info@raumfabrik.gmbh</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-blue-50 rounded-full text-raumfabrik-blue">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Öffnungszeiten</p>
                    <p className="text-gray-600">Mo-Fr: 8:00 - 18:00 Uhr</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md h-64 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.6422037999526!2d10.458035476801766!3d50.6113902733212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3f65ba0c5fced%3A0x7b054bb1ca3a6c2e!2sAllendestr.%2068%2C%2098574%20Schmalkalden!5e0!3m2!1sde!2sde!4v1718641174177!5m2!1sde!2sde"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

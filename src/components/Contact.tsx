
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-raumfabrik-blue focus:border-transparent"
                    placeholder="Ihr Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-raumfabrik-blue focus:border-transparent"
                    placeholder="Ihre E-Mail"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-raumfabrik-blue focus:border-transparent"
                  placeholder="Betreff Ihrer Anfrage"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Nachricht</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-raumfabrik-blue focus:border-transparent"
                  placeholder="Ihre Nachricht an uns"
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-raumfabrik-blue text-white rounded-md hover:bg-raumfabrik-blue-dark transition-colors"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427698737!2d13.372469976938461!3d52.516669636785695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1687197024660!5m2!1sde!2sde"
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


import React from 'react';
import LogoIcon from '../LogoIcon';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import ImpressumDialog from '../ImpressumDialog';
import AGBDialog from '../AGBDialog';
import DatenschutzDialog from '../DatenschutzDialog';
import CookieDialog from '../CookieDialog';
import UeberUnsDialog from '../UeberUnsDialog';
import TeamDialog from '../TeamDialog';
import KarriereDialog from '../KarriereDialog';
import PresseDialog from '../PresseDialog';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <LogoIcon className="mb-4" />
            <p className="text-gray-600 mb-4 max-w-xs">
              Moderne Räume für Ihr Unternehmen. Flexibel mieten, professionell arbeiten.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-raumfabrik-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-raumfabrik-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-raumfabrik-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-raumfabrik-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Raumfabrik</h3>
            <ul className="space-y-2">
              <li>
                <UeberUnsDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Über uns</a>
                </UeberUnsDialog>
              </li>
              <li>
                <TeamDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Team</a>
                </TeamDialog>
              </li>
              <li>
                <KarriereDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Karriere</a>
                </KarriereDialog>
              </li>
              <li>
                <PresseDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Pressemitteilungen</a>
                </PresseDialog>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Räume</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Büroräume</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Konferenzräume</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Eventflächen</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Preise & Konditionen</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <AGBDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">AGB</a>
                </AGBDialog>
              </li>
              <li>
                <DatenschutzDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Datenschutz</a>
                </DatenschutzDialog>
              </li>
              <li>
                <ImpressumDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Impressum</a>
                </ImpressumDialog>
              </li>
              <li>
                <CookieDialog>
                  <a href="#" className="text-gray-600 hover:text-raumfabrik-blue transition-colors">Cookie-Einstellungen</a>
                </CookieDialog>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Raumfabrik. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

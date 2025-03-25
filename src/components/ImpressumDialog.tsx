
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface ImpressumDialogProps {
  children: React.ReactNode;
}

const ImpressumDialog: React.FC<ImpressumDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue">Impressum</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
            <p>Raumfabrik GmbH<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
            <p>Telefon: +49 (0) 123 456789<br />
            E-Mail: info@raumfabrik.de</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Vertretungsberechtigte</h3>
            <p>Geschäftsführer: Max Mustermann</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Registereintrag</h3>
            <p>Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Musterstadt<br />
            Registernummer: HRB 12345</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE123456789</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>Max Mustermann<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImpressumDialog;

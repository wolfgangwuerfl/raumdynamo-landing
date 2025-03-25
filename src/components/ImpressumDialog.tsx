
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
            Allendestr. 68<br />
            98574 Schmalkalden<br />
            Deutschland</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
            <p>Telefon: +49 (0) 03683 798 400<br />
            E-Mail: info@raumfabrik.de</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Vertretungsberechtigte</h3>
            <p>Geschäftsführer: Michael Arndt</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Registereintrag</h3>
            <p>Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Jena<br />
            Registernummer: HRB 509939</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE WIP *work in progress*</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
            <p>Michael Arndt<br />
            Allendestr. 68<br />
            98574 Schmalkalden<br />
            Deutschland</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImpressumDialog;

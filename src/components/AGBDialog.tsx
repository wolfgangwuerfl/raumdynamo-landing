
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface AGBDialogProps {
  children: React.ReactNode;
}

const AGBDialog: React.FC<AGBDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue">Allgemeine Geschäftsbedingungen</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">1. Geltungsbereich</h3>
            <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Raumfabrik GmbH (nachfolgend "Raumfabrik") und ihren Kunden über die Vermietung von Räumlichkeiten und damit verbundenen Dienstleistungen.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">2. Vertragsschluss</h3>
            <p>Die Buchung von Räumlichkeiten kann online, telefonisch oder persönlich erfolgen. Ein Vertrag kommt erst durch die schriftliche Bestätigung der Raumfabrik zustande.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">3. Preise und Zahlungsbedingungen</h3>
            <p>Es gelten die zum Zeitpunkt der Buchung aktuellen Preise. Die Zahlung erfolgt per Überweisung, Kreditkarte oder bar, je nach Vereinbarung. Bei längerfristigen Mietverträgen ist die Miete monatlich im Voraus zu entrichten.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">4. Stornierungsbedingungen</h3>
            <p>Bei Stornierungen bis 14 Tage vor dem gebuchten Termin fallen keine Kosten an. Bei späteren Stornierungen werden 50% des vereinbarten Preises fällig. Bei Nichterscheinen ohne Stornierung wird der volle Preis berechnet.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">5. Nutzungsbedingungen</h3>
            <p>Die gemieteten Räumlichkeiten dürfen nur für den vereinbarten Zweck genutzt werden. Der Mieter verpflichtet sich, die Räume pfleglich zu behandeln und in ordnungsgemäßem Zustand zu hinterlassen.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">6. Haftung</h3>
            <p>Die Raumfabrik haftet nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen. Der Mieter haftet für alle durch ihn oder seine Gäste verursachten Schäden.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">7. Datenschutz</h3>
            <p>Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, die auf unserer Website eingesehen werden kann.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">8. Schlussbestimmungen</h3>
            <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz der Raumfabrik. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, so bleibt der Vertrag im Übrigen wirksam.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AGBDialog;

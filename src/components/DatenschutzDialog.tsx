
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface DatenschutzDialogProps {
  children: React.ReactNode;
}

const DatenschutzDialog: React.FC<DatenschutzDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue">Datenschutzerklärung</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">1. Verantwortliche Stelle</h3>
            <p>Verantwortliche Stelle im Sinne der Datenschutzgesetze ist:<br />
            Raumfabrik GmbH<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            Deutschland</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
            <p>Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer Buchung oder bei einer Kontaktaufnahme mitteilen. Welche Daten erhoben werden, ist aus den jeweiligen Eingabeformularen ersichtlich. Wir verwenden die von Ihnen mitgeteilten Daten zur Vertragsabwicklung und Bearbeitung Ihrer Anfragen.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">3. Nutzung und Weitergabe personenbezogener Daten</h3>
            <p>Wir nutzen Ihre personenbezogenen Daten nur innerhalb unseres Unternehmens. Wir geben Ihre persönlichen Daten nur dann an Dritte weiter, wenn dies zur Vertragsabwicklung notwendig ist, Sie zuvor eingewilligt haben oder eine gesetzliche Verpflichtung zur Datenweitergabe besteht.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">4. Cookies</h3>
            <p>Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Die meisten der von uns verwendeten Cookies sind sogenannte "Session-Cookies", die nach Ende Ihres Besuchs automatisch gelöscht werden.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">5. Auskunftsrecht und Kontaktmöglichkeit</h3>
            <p>Sie haben das Recht, unentgeltlich Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten. Zudem haben Sie das Recht auf Berichtigung, Sperrung oder Löschung Ihrer Daten. Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten können Sie sich jederzeit an uns wenden.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">6. Datensicherheit</h3>
            <p>Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsverfahren werden regelmäßig überprüft und dem technologischen Fortschritt angepasst.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">7. Änderung der Datenschutzerklärung</h3>
            <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DatenschutzDialog;

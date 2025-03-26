
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface UeberUnsDialogProps {
  children: React.ReactNode;
}

const UeberUnsDialog: React.FC<UeberUnsDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue">Über uns</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">Unsere Geschichte</h3>
            <p>Die Raumfabrik wurde 2025 mit einer Vision gegründet: Moderne, flexible Arbeitsräume für Unternehmen jeder Größe anzubieten. Seitdem wachsen wir kontinuierlich und sind durch die Übernahme des ehemaligen Technologie- und Gründerzentrums weiterhin führender Anbieter von Büro- und Veranstaltungsflächen.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Unsere Mission</h3>
            <p>Wir glauben, dass die richtige Arbeitsumgebung den Unterschied macht. Unsere Mission ist es, Räume zu schaffen, in denen Kreativität und Produktivität gedeihen können. Wir bieten nicht nur Quadratmeter, sondern ein Ökosystem für Erfolg.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Nachhaltigkeit</h3>
            <p>Nachhaltigkeit ist für uns kein Schlagwort, sondern eine Verpflichtung. Alle unsere Gebäude werden nach höchsten Umweltstandards betrieben. Wir nutzen erneuerbare Energien, bieten Mietern günstigere Mieterstromtarife aus Solar an, bieten Elektroladestationen und setzen auf umweltfreundliche Materialien und minimieren unseren ökologischen Fußabdruck.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Innovation</h3>
            <p>Die Arbeitswelt wandelt sich ständig, und wir wandeln uns mit ihr. Durch kontinuierliche Innovation und die Integration neuester Technologien sorgen wir dafür, dass unsere Räume stets den aktuellen Anforderungen entsprechen und für die Zukunft gerüstet sind.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UeberUnsDialog;

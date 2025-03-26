
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface KarriereDialogProps {
  children: React.ReactNode;
}

const KarriereDialog: React.FC<KarriereDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue">Karriere bei Raumfabrik</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">Warum Raumfabrik?</h3>
            <p>Bei Raumfabrik zu arbeiten bedeutet, Teil eines dynamischen Teams zu sein, das die Zukunft der Arbeitswelt aktiv mitgestaltet. Wir bieten nicht nur attraktive Arbeitsbedingungen, sondern auch vielfältige Entwicklungsmöglichkeiten in einem innovativen Umfeld.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Offene Stellen</h3>
            <div className="space-y-4">
{/*               <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium">Standortmanager (m/w/d) - Hamburg</h4>
                <p className="text-sm text-gray-600 mb-2">Vollzeit | Ab sofort</p>
                <p className="mb-3">Für unseren neuen Standort in Hamburg suchen wir einen engagierten Standortmanager, der den Aufbau und die Betreuung des Standorts verantwortet.</p>
                <Button variant="outline" size="sm">Mehr erfahren</Button>
              </div> */}
            </div>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Flexible Arbeitszeiten und Remote-Optionen</li>
              <li>Moderne Büroräume an allen unseren Standorten</li>
              <li>Regelmäßige Team-Events und Fortbildungsmöglichkeiten</li>
              <li>Betriebliche Altersvorsorge und Gesundheitsprogramme</li>
              <li>Mitarbeiterrabatte für private Raumnutzung</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default KarriereDialog;

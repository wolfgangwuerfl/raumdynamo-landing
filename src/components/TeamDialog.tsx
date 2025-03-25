
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface TeamDialogProps {
  children: React.ReactNode;
}

const TeamDialog: React.FC<TeamDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue">Unser Team</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">Geschäftsführung</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Dr. Michael Schneider</h4>
                <p className="text-sm text-gray-600">CEO & Gründer</p>
                <p>Mit über 20 Jahren Erfahrung in der Immobilienbranche leitet Michael die strategische Ausrichtung und Expansion der Raumfabrik.</p>
              </div>
              <div>
                <h4 className="font-medium">Sarah Wagner</h4>
                <p className="text-sm text-gray-600">COO</p>
                <p>Sarah verantwortet die operativen Prozesse und sorgt dafür, dass unsere Standorte reibungslos funktionieren.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Standortleitung</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Thomas Becker</h4>
                <p className="text-sm text-gray-600">Standortleiter Berlin</p>
                <p>Thomas kümmert sich um unseren Flagship-Standort in Berlin-Mitte und ist Ansprechpartner für alle Mieter dort.</p>
              </div>
              <div>
                <h4 className="font-medium">Lena Hoffmann</h4>
                <p className="text-sm text-gray-600">Standortleiterin München</p>
                <p>Lena betreut unseren wachsenden Standort in München und koordiniert alle Events und Community-Aktivitäten.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Kundenbetreuung</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Markus Schulz</h4>
                <p className="text-sm text-gray-600">Head of Customer Success</p>
                <p>Markus und sein Team stellen sicher, dass unsere Kunden optimal betreut werden und sich in unseren Räumen wohlfühlen.</p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamDialog;

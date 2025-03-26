
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
                <h4 className="font-medium">Michael Arndt</h4>
                <p className="text-sm text-gray-600">Geschäftsführer & Gründer</p>
                <p>Mit über 20 Jahren Erfahrung leitet Michael die strategische Ausrichtung und Expansion der Raumfabrik.</p>
              </div>
            </div>
          </section>
          
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Kundenbetreuung</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Daniela Filaj</h4>
                <p className="text-sm text-gray-600">Verwaltung</p>
                <p>Daniela verantwortet die operativen Prozesse und sorgt dafür, dass unser Standort reibungslos funktioniert.</p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamDialog;


import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Cookie, Shield } from "lucide-react";

interface CookieDialogProps {
  children: React.ReactNode;
}

const CookieDialog: React.FC<CookieDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue flex items-center gap-2">
            <Cookie size={24} /> Cookie-Einstellungen
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section className="flex items-start gap-4">
            <Shield className="text-raumfabrik-blue shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-semibold mb-2">Ihre Privatsphäre</h3>
              <p>Wir verwenden <b>KEINE</b> Cookies. Sie brauchen sich um keine Einstellungen zu kümmern, da Ihr Besuch und Ihre Daten nicht gespeichert werden!</p>
            </div>
          </section>
          
          <div className="space-y-4 border-t border-b py-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Notwendige Cookies (inaktiv)</h4>
                <p className="text-sm text-gray-500">Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.</p>
              </div>
              <div className="bg-gray-200 px-3 py-1 rounded text-sm">Immer aktiv</div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Funktionale Cookies (inaktiv)</h4>
                <p className="text-sm text-gray-500">Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.</p>
              </div>
              <Button variant="outline" size="sm" className="h-8">Aktivieren</Button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Analytische Cookies</h4>
                <p className="text-sm text-gray-500">Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.</p>
              </div>
              <Button variant="outline" size="sm" className="h-8">Aktivieren</Button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Marketing Cookies (inaktiv)</h4>
                <p className="text-sm text-gray-500">Diese Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist, Anzeigen zu schalten, die für den einzelnen Nutzer relevant und ansprechend sind.</p>
              </div>
              <Button variant="outline" size="sm" className="h-8">Aktivieren</Button>
            </div>
          </div>
          
          <p className="text-sm">
            Weitere Informationen darüber, wie wir Ihre persönlichen Daten verarbeiten, finden Sie in unserer <span className="text-raumfabrik-blue hover:underline cursor-pointer">Datenschutzerklärung</span>.
          </p>
        </div>
        
        <DialogFooter className="flex gap-2 sm:justify-between sm:gap-0">
          <Button variant="outline">Alle ablehnen</Button>
          <div className="flex gap-2">
            <Button variant="outline">Nur notwendige akzeptieren</Button>
            <Button>Alle akzeptieren</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieDialog;

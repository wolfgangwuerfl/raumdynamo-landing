
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

interface PresseDialogProps {
  children: React.ReactNode;
}

const PresseDialog: React.FC<PresseDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-raumfabrik-blue">Pressemitteilungen</DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-6 text-gray-700">
          <section>
            <h3 className="text-lg font-semibold mb-2">Aktuelle Pressemitteilungen</h3>
            <div className="space-y-6">
              <article>
                <h4 className="font-medium">Raumfabrik eröffnet neuen Standort in Schmalkalden</h4>
                <p className="text-sm text-gray-600 mb-2">2025</p>
                <p>Die Raumfabrik übernimmt das ehemalige Technologie- und Gründerzentrum in Schmalkalden.</p>
              </article>
              
{/*               <article>
                <h4 className="font-medium">Nachhaltigkeitszertifizierung für alle Raumfabrik-Standorte</h4>
                <p className="text-sm text-gray-600 mb-2">23. September 2023</p>
                <p>Als eines der ersten Unternehmen in der Branche hat die Raumfabrik für alle ihre Standorte die DGNB-Zertifizierung in Gold erhalten. Die Auszeichnung bestätigt die konsequente Umsetzung von Nachhaltigkeitskonzepten in allen Bereichen.</p>
              </article>
              
              <article>
                <h4 className="font-medium">Partnerschaft mit Tech-Inkubator StartupBoost</h4>
                <p className="text-sm text-gray-600 mb-2">05. Juli 2023</p>
                <p>Die Raumfabrik und der Tech-Inkubator StartupBoost geben ihre strategische Partnerschaft bekannt. Ziel ist es, jungen Tech-Unternehmen optimale Wachstumsbedingungen zu bieten und ein innovatives Ökosystem an allen Raumfabrik-Standorten zu fördern.</p>
              </article> */}
            </div>
          </section>
          
{/*           <section>
            <h3 className="text-lg font-semibold mb-2">Pressekontakt</h3>
            <div>
              <p><strong>Julia Müller</strong></p>
              <p>Leiterin Unternehmenskommunikation</p>
              <p>E-Mail: presse@raumfabrik.de</p>
              <p>Telefon: +49 30 1234567-89</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2">Pressematerial</h3>
            <p>Hier finden Sie Bildmaterial, Logos und Factsheets zum Download. Für spezifische Anfragen kontaktieren Sie bitte unser Presseteam.</p>
            <div className="flex space-x-3 mt-3">
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">Logos</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">Bilder</button>
              <button className="px-3 py-1 border border-gray-300 rounded text-sm">Factsheets</button>
            </div>
          </section> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PresseDialog;

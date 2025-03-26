
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Schema für die Form-Validierung
const formSchema = z.object({
  name: z.string().min(2, { message: 'Bitte geben Sie Ihren Namen ein.' }),
  email: z.string().email({ message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' }),
  subject: z.string().min(3, { message: 'Bitte geben Sie einen Betreff ein.' }),
  message: z.string().min(10, { message: 'Bitte geben Sie eine Nachricht mit mindestens 10 Zeichen ein.' }),
});

// Typ für die Formularwerte
type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    // Simulation des Sendens einer E-Mail
    console.log('Sende E-Mail an info@raumfabrik.gmbh mit den Daten:', values);
    console.log(values);
    // In einer realen Anwendung würde hier eine API-Anfrage gemacht werden
    // Diese Simulation zeigt nur den erfolgreichen Ablauf
    try {
      // Simuliere API-Call mit einer Verzögerung
      //await new Promise(resolve => setTimeout(resolve, 1000));

/*       fetch('https://www.pro-energie-ag.de/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
*/
      fetch("https://www.pro-energie-ag.de/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(values)
      })
      .then(response => response.json())
      //.then(data => console.log(data.success ? "Erfolgreich gesendet!" : "Fehler beim Senden"));
      .then(data => {
        if (data.success) {
            console.log("erfolgreich gesendet");
        } else {
            toast({
                title: "Fehler bei der Datenübertragung",
                description: "Es gab ein Problem bei der Erstellung ihrer Nachricht. Bitte versuchen Sie es später erneut.",
                variant: "destructive",
            });
        }
      }) 
             
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
        variant: "default",
      });
      
      // Formular zurücksetzen
      form.reset();
    } catch (error) {
        toast({
          title: "Fehler beim Senden",
          description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
          variant: "destructive",
        });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ihr Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel>E-Mail</FormLabel>
                <FormControl>
                  <Input placeholder="Ihre E-Mail" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Betreff</FormLabel>
              <FormControl>
                <Input placeholder="Betreff Ihrer Anfrage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>Nachricht</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Ihre Nachricht an uns" 
                  className="min-h-[120px]" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="pt-2">
          <Button 
            type="submit" 
            className="w-full px-6 py-3 bg-raumfabrik-blue text-white"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface EFContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EFContactModal = ({ isOpen, onClose }: EFContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO [DA CONFERMARE]: collegare a un endpoint reale (form provider / email).
    await new Promise((r) => setTimeout(r, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Richiesta inviata",
      description: "Ti ricontattiamo entro 2 giorni lavorativi.",
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-navy" />
            </div>
            <DialogTitle className="text-xl text-navy text-left">Parliamo dei tuoi numeri</DialogTitle>
          </div>
          <p className="text-sm text-foreground/70 text-left">
            Due minuti per compilare. Ti ricontattiamo entro 2 giorni lavorativi per capire la situazione e
            dirti se possiamo esserti utili — anche quando la risposta onesta è che così com'è va già bene.
            <strong> Tutto riservato, nessun impegno.</strong>
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-success" />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Richiesta ricevuta</h3>
            <p className="text-sm text-foreground/70">Ti contattiamo entro 2 giorni lavorativi.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="ef-name">Nome e cognome *</Label>
                <Input id="ef-name" name="name" required placeholder="Nome e cognome" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ef-phone">Telefono *</Label>
                <Input id="ef-phone" name="phone" type="tel" required placeholder="+39 ___ _______" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="ef-email">Email *</Label>
              <Input id="ef-email" name="email" type="email" required placeholder="nome@email.it" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="ef-profile">Sei... *</Label>
                <Select name="profile" required>
                  <SelectTrigger id="ef-profile"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="impresa">Un'impresa di costruzioni</SelectItem>
                    <SelectItem value="artigiano">Un impiantista / artigiano edile</SelectItem>
                    <SelectItem value="immobiliare">Una società immobiliare o di sviluppo</SelectItem>
                    <SelectItem value="gruppo">Un gruppo con più società</SelectItem>
                    <SelectItem value="socio">Un socio / imprenditore a titolo personale</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ef-topic">Il problema riguarda... *</Label>
                <Select name="topic" required>
                  <SelectTrigger id="ef-topic"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fisco">Fiscalità e IVA dei lavori</SelectItem>
                    <SelectItem value="controllo">Margini e controllo di gestione</SelectItem>
                    <SelectItem value="bilancio">Bilancio e lavori in corso</SelectItem>
                    <SelectItem value="accertamento">Verifica o accertamento ricevuto</SelectItem>
                    <SelectItem value="crediti">Bonus edilizi e crediti d'imposta</SelectItem>
                    <SelectItem value="holding">Holding e riorganizzazione societaria</SelectItem>
                    <SelectItem value="patrimonio">Protezione del patrimonio / passaggio ai figli</SelectItem>
                    <SelectItem value="altro">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="ef-message">Descrivi brevemente la situazione</Label>
              <Textarea
                id="ef-message"
                name="message"
                rows={3}
                placeholder="Es: fatturiamo 4,2 milioni con 11 cantieri aperti, ma non so quale commessa stia davvero guadagnando..."
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-foreground/70">
              <input type="checkbox" required className="mt-0.5" />
              <span>
                Ho letto e accetto la <a href="/privacy" className="text-navy underline">Privacy Policy</a>. I dati saranno trattati solo per gestire la richiesta.
              </span>
            </label>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-bold h-11"
            >
              {isSubmitting ? "Invio in corso..." : "Invia la richiesta"}
            </Button>

            <p className="text-xs text-center text-foreground/50">
              🔒 Riservato · Senza impegno · Risposta entro 2 giorni lavorativi
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EFContactModal;

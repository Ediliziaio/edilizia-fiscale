import { Calculator, LineChart, ShieldCheck, MapPin } from "lucide-react";

const items = [
  { icon: Calculator, label: "Solo fiscalità e numeri del settore costruzioni" },
  { icon: LineChart, label: "Prima leggiamo i tuoi numeri, poi proponiamo" },
  { icon: ShieldCheck, label: "Solo pianificazione lecita, mai schemi di comodo" },
  { icon: MapPin, label: "Assistenza in tutta Italia, anche da remoto" },
];

const EFTrustStrip = () => (
  <section className="bg-white border-b border-border">
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand/15 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-ink" />
            </div>
            <span className="text-sm font-medium text-foreground/80 leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EFTrustStrip;

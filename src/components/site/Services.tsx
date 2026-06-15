import {
  Stethoscope, Activity, Sparkles, Anchor, AlignCenter,
  Baby, Smile, Siren,
} from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  { icon: Stethoscope, title: "General Dentistry", desc: "Routine check-ups, cleanings, fillings and preventive care for all ages." },
  { icon: Activity, title: "Root Canal Treatment", desc: "Painless, single-sitting RCT using rotary endodontic technology." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional in-clinic and take-home whitening for a brighter smile." },
  { icon: Anchor, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement with premium implants." },
  { icon: AlignCenter, title: "Braces & Aligners", desc: "Traditional braces and clear aligners for perfectly aligned teeth." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle, friendly dental care designed especially for children." },
  { icon: Smile, title: "Smile Designing", desc: "Custom smile makeovers with veneers, crowns and cosmetic shaping." },
  { icon: Siren, title: "Emergency Dental Care", desc: "Same-day appointments for dental pain, trauma and urgent care." },
];

export const Services = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <Reveal className="max-w-2xl mx-auto text-center mb-14">
        <span className="text-sm font-medium text-accent tracking-wider uppercase">Our Services</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3">
          Complete dental care, <span className="text-gradient">under one roof</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          From routine cleanings to advanced cosmetic dentistry — every treatment is
          personalised to your comfort and goals.
        </p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.08}>
            <div className="group relative h-full p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-2 transition-smooth overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-125 transition-smooth" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow group-hover:rotate-6 transition-smooth">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
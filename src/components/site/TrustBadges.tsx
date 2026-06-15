import { Heart, Cpu, Users, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const badges = [
  { icon: Heart, label: "Painless Care" },
  { icon: Cpu, label: "Advanced Equipment" },
  { icon: Users, label: "Family Dentistry" },
  { icon: ShieldCheck, label: "Sterile & Safe" },
];

export const TrustBadges = () => (
  <section className="py-10 md:py-14 border-y border-border bg-card">
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
      {badges.map((b, i) => (
        <Reveal key={b.label} delay={i * 0.08}>
          <div className="flex items-center gap-3 justify-center md:justify-start group">
            <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center group-hover:scale-110 transition-smooth">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="font-medium text-foreground">{b.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
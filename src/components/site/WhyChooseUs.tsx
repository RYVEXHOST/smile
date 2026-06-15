import { Award, FileText, Sparkles, Sofa, Microscope, BellRing } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, title: "Experienced dentists", desc: "A team of specialists with 10+ years of clinical excellence." },
  { icon: FileText, title: "Transparent plans", desc: "Clear pricing and treatment timelines — no surprises." },
  { icon: Sparkles, title: "Modern sterilization", desc: "Hospital-grade autoclave and single-use instruments." },
  { icon: Sofa, title: "Comfort first", desc: "Calm environment designed to ease anxiety." },
  { icon: Microscope, title: "Digital diagnostics", desc: "Digital X-rays, intra-oral scans, 3D imaging." },
  { icon: BellRing, title: "Smart reminders", desc: "Automatic appointment and follow-up reminders." },
];

export const WhyChooseUs = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <Reveal className="max-w-2xl mx-auto text-center mb-14">
        <span className="text-sm font-medium text-accent tracking-wider uppercase">Why Smile 32</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3">
          Care that goes <span className="text-gradient">beyond the chair</span>
        </h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={(i % 3) * 0.08}>
            <div className="h-full p-7 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-accent/50 transition-smooth group">
              <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-smooth">
                <it.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
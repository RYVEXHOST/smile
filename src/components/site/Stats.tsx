import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 5000, suffix: "+", label: "Happy Smiles" },
  { value: 25, suffix: "+", label: "Dental Services" },
  { value: 4.9, decimals: 1, suffix: "★", label: "Patient Rating" },
];

export const Stats = () => (
  <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-glow opacity-50" />
    <div className="container mx-auto px-4 relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div>
              <div className="font-display text-5xl md:text-6xl font-semibold">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-2 text-primary-foreground/80">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
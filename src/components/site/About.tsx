import { Reveal } from "./Reveal";
import { CheckCircle2 } from "lucide-react";
import clinicImg from "@/assets/clinic.webp";

const points = [
  "Ethical & transparent treatment plans",
  "Gentle, painless techniques",
  "Latest digital dentistry technology",
  "Personalized care for every patient",
];

export const About = () => (
  <section id="about" className="py-20 md:py-28 bg-secondary/40">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <Reveal>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/20 rounded-[3rem] blur-2xl" />
          <img
            src={clinicImg}
            alt="Inside the Smile 32 dental clinic"
            width={1280}
            height={960}
            loading="lazy"
            className="relative rounded-[2.5rem] shadow-elegant w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-card hidden md:block">
            <div className="font-display text-3xl font-semibold text-gradient">4.9★</div>
            <div className="text-xs text-muted-foreground mt-1">Patient rating</div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <span className="text-sm font-medium text-accent tracking-wider uppercase">About Smile 32</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight">
          Modern dentistry with a <span className="text-gradient">human touch</span>
        </h2>
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          At Smile 32, we believe great dental care should feel calm and effortless.
          Our team blends ethical practice, gentle techniques and the latest technology
          to deliver treatment plans tailored to your needs — never one-size-fits-all.
        </p>
        <ul className="mt-8 grid sm:grid-cols-2 gap-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span className="text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

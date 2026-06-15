import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

export const CtaBanner = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-accent p-10 md:p-16 text-center text-primary-foreground shadow-elegant">
          <div className="absolute inset-0 bg-glow opacity-60" />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl font-semibold">
              Ready for a healthier smile?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-xl mx-auto">
              Book your appointment today. Our team will get back to you within
              the hour during clinic times.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button variant="glass" size="xl" asChild>
                <a href="#contact"><Calendar className="w-5 h-5" /> Book Appointment</a>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <a href="tel:+910000000000"><Phone className="w-5 h-5" /> Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
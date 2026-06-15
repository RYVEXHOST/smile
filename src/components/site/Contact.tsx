import { useState } from "react";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Clock, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "./Reveal";

const mapUrl = "https://maps.app.goo.gl/tPVkRgGvQzRk1xXm7";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().trim().min(2, "Select or enter a service").max(80),
  date: z.string().min(1, "Pick a date"),
  message: z.string().trim().max(500).optional(),
});

const info = [
  { icon: MapPin, label: "Clinic Address", value: "Open clinic location in Google Maps", href: mapUrl },
  { icon: Phone, label: "Phone", value: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 00000 00000", href: "https://wa.me/910000000000" },
  { icon: Mail, label: "Email", value: "hello@smile32.clinic", href: "mailto:hello@smile32.clinic" },
];

export const Contact = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((iss) => (errs[iss.path[0] as string] = iss.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-accent">Contact</span>
          <h2 className="mt-3 text-4xl font-semibold font-display md:text-5xl">
            Let's book your <span className="text-gradient">visit</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us a little about what you need - we'll confirm your appointment shortly.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="space-y-4 lg:col-span-2">
            {info.map((it) => (
              <a
                key={it.label}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-smooth hover:border-accent/50 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft transition-smooth group-hover:scale-110">
                  <it.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
                  <div className="mt-0.5 font-medium text-foreground">{it.value}</div>
                </div>
              </a>
            ))}

            <div className="flex items-start gap-4 rounded-2xl bg-gradient-to-br from-primary to-accent p-5 text-primary-foreground">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-80">Working Hours</div>
                <div className="mt-1 text-sm leading-relaxed">
                  Mon - Sat: 9:00 AM - 9:00 PM
                  <br />
                  Sunday: 10:00 AM - 2:00 PM
                </div>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border bg-secondary px-6 text-center text-sm text-muted-foreground transition-smooth hover:border-accent/50 hover:shadow-card"
            >
              <div>
                <MapPin className="mx-auto mb-2 h-8 w-8 text-accent" />
                <div className="font-medium text-foreground">Open location in Google Maps</div>
                <div className="mt-1">Tap here for directions and navigation</div>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="relative rounded-3xl border border-border bg-card p-6 shadow-card md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" placeholder="Your name" className="mt-1.5" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 00000 00000" className="mt-1.5" />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="service">Service required</Label>
                  <Input id="service" name="service" placeholder="e.g. Teeth whitening" className="mt-1.5" />
                  {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
                </div>
                <div>
                  <Label htmlFor="date">Preferred date</Label>
                  <Input id="date" name="date" type="date" className="mt-1.5" />
                  {errors.date && <p className="mt-1 text-xs text-destructive">{errors.date}</p>}
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us anything we should know..."
                  rows={4}
                  className="mt-1.5"
                />
              </div>

              <Button variant="hero" size="xl" className="mt-6 w-full sm:w-auto">
                <Send className="h-5 w-5" /> Request Appointment
              </Button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-5 flex items-center gap-3 rounded-xl bg-accent-soft p-4 text-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span className="text-sm">Thank you! Your request has been received. We'll call you back shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

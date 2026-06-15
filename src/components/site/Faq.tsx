import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  { q: "How do I book an appointment?", a: "You can book online using the contact form below, call us directly, or message us on WhatsApp. We'll confirm your slot within minutes during clinic hours." },
  { q: "How often should I get a dental cleaning?", a: "We recommend a professional cleaning every 6 months. Patients with gum issues or braces may benefit from more frequent visits." },
  { q: "Is a root canal painful?", a: "Not at all — modern RCT with rotary endodontics is virtually painless. Most patients describe it as similar to getting a regular filling." },
  { q: "Is teeth whitening safe?", a: "Yes. Our in-clinic whitening uses safe, dentist-grade systems with protective gel for your gums. Sensitivity, if any, is mild and temporary." },
  { q: "Do you offer emergency dental appointments?", a: "Yes, we offer same-day emergency slots for dental pain, trauma or infections. Please call us directly and mention it's urgent." },
];

export const Faq = () => (
  <section className="py-20 md:py-28 bg-secondary/40">
    <div className="container mx-auto px-4">
      <Reveal className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-sm font-medium text-accent tracking-wider uppercase">FAQ</span>
        <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3">
          Questions, <span className="text-gradient">answered</span>
        </h2>
      </Reveal>
      <Reveal>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="bg-card rounded-2xl border border-border px-6 shadow-card data-[state=open]:shadow-elegant transition-smooth">
              <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
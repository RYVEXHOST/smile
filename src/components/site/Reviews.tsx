import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  { name: "Aarav Sharma", role: "Implant patient", text: "Honestly the most painless dental experience I've ever had. The team explained every step and my new implant feels completely natural." },
  { name: "Priya Menon", role: "Whitening patient", text: "The clinic is beautiful, calming and spotless. My teeth came out several shades whiter in a single session. Highly recommend!" },
  { name: "Rahul Verma", role: "Parent", text: "My 6-year-old actually looks forward to her dental visits now. The pediatric team is incredibly patient and kind." },
  { name: "Sneha Iyer", role: "Aligners patient", text: "Transparent pricing, modern technology and great results. My smile transformation took just under a year." },
];

export const Reviews = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-sm font-medium text-accent tracking-wider uppercase">Reviews</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3">
            Loved by <span className="text-gradient">our patients</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="relative bg-gradient-to-br from-card to-accent-soft/40 border border-border rounded-3xl p-8 md:p-12 shadow-card overflow-hidden min-h-[280px]">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/20" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground">
                    "{r.text}"
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{r.name}</div>
                      <div className="text-sm text-muted-foreground">{r.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {reviews.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    className={`h-2 rounded-full transition-smooth ${
                      k === i ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                    aria-label={`Review ${k + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-full glass shadow-card hover:scale-110 transition-smooth flex items-center justify-center" aria-label="Previous">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full glass shadow-card hover:scale-110 transition-smooth flex items-center justify-center" aria-label="Next">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
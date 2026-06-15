import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTooth from "@/assets/hero-tooth.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-hero">
      {/* floating shapes */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <motion.div
        aria-hidden
        className="absolute top-32 left-[8%] w-16 h-16 rounded-2xl bg-white/70 backdrop-blur shadow-card flex items-center justify-center animate-float"
      >
        <Sparkles className="w-7 h-7 text-accent" />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute top-48 right-[6%] w-20 h-20 rounded-3xl bg-white/70 backdrop-blur shadow-card flex items-center justify-center animate-float-slow"
      >
        <Heart className="w-8 h-8 text-primary" />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute bottom-24 left-[12%] w-14 h-14 rounded-2xl bg-white/70 backdrop-blur shadow-card flex items-center justify-center animate-float-slow"
        style={{ animationDelay: "1.5s" }}
      >
        <Shield className="w-6 h-6 text-accent" />
      </motion.div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-muted-foreground">Now accepting new patients</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] text-foreground"
          >
            Your Confident<br />
            Smile Starts at{" "}
            <span className="text-gradient">Smile 32</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Gentle, modern dental care for the whole family. We blend
            advanced technology with a calm, personal touch — so every visit
            feels effortless.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Calendar className="w-5 h-5" /> Book Appointment
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#services">
                View Services <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex -space-x-2">
              {[0,1,2,3].map((i)=>(
                <div key={i} className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent" />
              ))}
            </div>
            <div>
              <div className="font-semibold text-foreground">5000+ happy smiles</div>
              <div>Rated 4.9 ★ by our patients</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse-glow" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-elegant border border-white/60 glass">
              <img
                src={heroTooth}
                alt="Premium dental care at Smile 32"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-4 md:-left-10 top-1/4 glass rounded-2xl p-4 shadow-card flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Sterile & Safe</div>
                <div className="font-semibold text-foreground text-sm">100% Hygienic</div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 md:-right-8 bottom-1/4 glass rounded-2xl p-4 shadow-card"
            >
              <div className="text-2xl font-display font-semibold text-gradient">10+ yrs</div>
              <div className="text-xs text-muted-foreground">Trusted care</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
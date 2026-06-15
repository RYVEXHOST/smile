import { Sparkles, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => (
  <footer className="bg-foreground text-background pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl font-semibold">Smile<span className="text-gradient">32</span></span>
          </div>
          <p className="mt-4 text-background/70 text-sm leading-relaxed">
            Gentle, modern dental care for the whole family. Trusted by thousands of patients.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-gradient-to-br hover:from-primary hover:to-accent flex items-center justify-center transition-smooth">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {["Home","About","Smile Gallery","Reviews","FAQ","Contact"].map((l)=>(
              <li key={l}><a href="#" className="hover:text-accent transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-background/70">
            {["General Dentistry","Root Canal","Teeth Whitening","Dental Implants","Braces & Aligners","Pediatric Dentistry"].map((l)=>(
              <li key={l}><a href="#services" className="hover:text-accent transition-smooth">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>123 Wellness Avenue<br />City — 000000</li>
            <li>+91 00000 00000</li>
            <li>hello@smile32.clinic</li>
            <li>Mon–Sat: 9 AM – 9 PM</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-background/10 text-center text-sm text-background/60">
        © {new Date().getFullYear()} Smile 32 Dental Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBadges } from "@/components/site/TrustBadges";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Gallery } from "@/components/site/Gallery";
import { Stats } from "@/components/site/Stats";
import { Reviews } from "@/components/site/Reviews";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background scroll-smooth">
    <Navbar />
    <main>
      <Hero />
      <TrustBadges />
      <Services />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Stats />
      <Reviews />
      <CtaBanner />
      <Faq />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;

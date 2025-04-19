import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { HeroCarousel } from "../components/HeroCarousel";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { About } from "../components/About";
import { Features } from "../components/Features";


export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroCarousel />
      <Gallery />
      <About />
      <Features />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};
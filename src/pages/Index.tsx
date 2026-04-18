import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const Index = () => {
  return (
    <main className="noise-overlay relative min-h-screen overflow-x-hidden bg-paper">
      <CustomCursor />
      <Hero />
      <About />
      <Portfolio />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

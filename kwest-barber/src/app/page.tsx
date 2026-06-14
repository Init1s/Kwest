import { Hero } from "@/components/sections/Hero";
import { TickerBand } from "@/components/sections/TickerBand";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Contact } from "@/components/sections/Contact";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <TickerBand />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Booking />
    </main>
  );
}

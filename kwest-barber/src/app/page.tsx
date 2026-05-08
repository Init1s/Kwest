import { Hero } from "@/components/sections/Hero";
import { TickerBand } from "@/components/sections/TickerBand";
import { Services } from "@/components/sections/Services";
import { Transformations } from "@/components/sections/Transformations";
import { About } from "@/components/sections/About";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Booking } from "@/components/sections/Booking";

export default function Home() {
  return (
    <main>
      <Hero />
      <TickerBand />
      <Services />
      <Transformations />
      <About />
      <InstagramFeed />
      <Testimonials />
      <Contact />
      <Booking />
    </main>
  );
}

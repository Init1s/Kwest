import { Hero } from "@/components/sections/Hero";
import { TickerBand } from "@/components/sections/TickerBand";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Booking } from "@/components/sections/Booking";
import {
  jsonLdScript,
  localBusinessSchema,
  personSchema,
  websiteSchema,
  homepageFaqSchema,
} from "@/lib/seo";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript([
          websiteSchema(),
          localBusinessSchema(),
          personSchema(),
          homepageFaqSchema(),
        ])}
      />
      <main id="main-content">
        <Hero />
        <TickerBand />
        <Services />
        <InstagramFeed />
        <Testimonials />
        <About />
        <Contact />
        <Booking />
      </main>
    </>
  );
}

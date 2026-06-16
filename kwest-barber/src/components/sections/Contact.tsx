import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";

export function Contact() {
  return (
    <section id="contact" className="bg-blade px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16">
          <h2
            className="font-display uppercase leading-[0.9] text-bone"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Find the chair.
          </h2>
          <p className="mt-4 max-w-md font-body text-sm text-ash">
            DM for questions, book through Squire for the chair.
          </p>
        </Reveal>

        <RevealGroup
          className="grid gap-10 md:grid-cols-3 md:gap-8"
          stagger={0.1}
        >
          {/* Find Us */}
          <RevealItem className="border-t border-chrome/60 pt-6">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Find Us
            </span>
            <address className="not-italic">
              <p className="mt-3 font-display text-xl font-bold uppercase text-bone">
                2100 N Federal Hwy #24
              </p>
              <p className="mt-1 font-display text-base font-semibold uppercase text-bone">
                Boca Raton, FL 33431
              </p>
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                "2100 N Federal Hwy #24, Boca Raton, FL 33431",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-mono text-[10px] uppercase tracking-ultra text-gold transition-colors hover:text-gold-light"
              aria-label="Open Kwest The Barber location in Google Maps (opens in a new tab)"
            >
              Get directions &rarr;
            </a>
            <p className="mt-3 font-body text-sm leading-relaxed text-ash">
              On the N Federal Hwy corridor, about three minutes from FAU.
              Walk-ins welcome when the chair is open.
            </p>
          </RevealItem>

          {/* Hours */}
          <RevealItem className="border-t border-chrome/60 pt-6">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Hours
            </span>
            <div className="mt-3 flex flex-col gap-1 font-body text-sm text-ash">
              <p>Tue &ndash; Fri &mdash; 10am to 7pm</p>
              <p>Saturday &mdash; 9am to 5pm</p>
              <p>Sunday &mdash; 11am to 4pm</p>
              <p className="text-razor">Monday &mdash; Closed</p>
            </div>
          </RevealItem>

          {/* Reach Out */}
          <RevealItem className="border-t border-chrome/60 pt-6">
            <span className="block font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Reach Out
            </span>
            <InstagramIconLink
              size={36}
              className="mt-3 text-bone transition-colors hover:text-gold"
            />
            <p className="mt-2 font-body text-sm leading-relaxed text-ash">
              Slide into the DMs for questions. For appointments, book on
              Squire.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-gold font-display text-xs font-bold uppercase tracking-widest text-ink px-5 py-2.5 transition-all hover:bg-gold-light"
            >
              Book on Squire
            </a>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

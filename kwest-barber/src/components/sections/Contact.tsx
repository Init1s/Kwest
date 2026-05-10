import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-blade px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            Get In Touch
          </span>
          <h2
            className="painted-mis mt-4 font-display uppercase leading-[0.95] text-bone"
            data-text="CONTACT"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            CONTACT
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
            <p className="mt-3 font-display text-xl font-bold uppercase text-bone">
              Boca Raton, FL
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-ash">
              Exact address shared at booking. Walk-ins welcome when the chair
              is open.
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
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Reach Out
            </span>
            <a
              href="https://www.instagram.com/kwest_the_barber/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block font-display text-xl font-bold uppercase text-bone transition-colors hover:text-gold"
            >
              @kwest_the_barber
            </a>
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

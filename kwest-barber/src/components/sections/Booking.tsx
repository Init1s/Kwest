import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Booking() {
  return (
    <section id="booking" className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            Ready?
          </span>

          <h2 className="mt-6 font-display text-5xl font-extrabold uppercase text-bone leading-[0.9] md:text-7xl lg:text-8xl">
            BOOK YOUR
            <br />
            <span className="text-gold">CUT.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-ash">
            Appointments are handled through Squire. Pick your service, choose
            your time, and lock in your spot. The chair stays booked, so
            planning ahead is the move.
          </p>

          <a
            href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block bg-gold font-display text-base font-bold uppercase tracking-widest text-ink px-12 py-5 transition-all hover:bg-gold-light"
          >
            Book on Squire
          </a>
        </Reveal>

        {/* Info strip */}
        <RevealGroup
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-chrome pt-10 text-left md:grid-cols-4"
          stagger={0.1}
        >
          <RevealItem>
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Hours
            </span>
            <div className="mt-2 flex flex-col gap-1 font-body text-xs text-ash">
              <p>Tue - Fri: 10am - 7pm</p>
              <p>Saturday: 9am - 5pm</p>
              <p>Sunday: 11am - 4pm</p>
              <p className="text-razor">Monday: Closed</p>
            </div>
          </RevealItem>

          <RevealItem>
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Location
            </span>
            <p className="mt-2 font-display text-sm font-semibold uppercase text-bone">
              Boca Raton, FL
            </p>
            <p className="mt-1 font-body text-xs text-ash">
              Address upon booking
            </p>
          </RevealItem>

          <RevealItem>
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Walk-Ins
            </span>
            <p className="mt-2 font-body text-xs leading-relaxed text-ash">
              Available when the chair is open. Book ahead to guarantee your
              spot.
            </p>
          </RevealItem>

          <RevealItem>
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Contact
            </span>
            <p className="mt-2 font-body text-xs text-ash">
              DM on{" "}
              <a
                href="https://www.instagram.com/kwest_the_barber/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors hover:text-gold-light"
              >
                @kwest_the_barber
              </a>
            </p>
            <p className="mt-1 font-body text-xs text-ash">
              or book directly through Squire
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

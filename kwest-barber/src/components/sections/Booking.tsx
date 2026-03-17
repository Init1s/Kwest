export function Booking() {
  return (
    <section id="booking" className="bg-ink px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Left: CTA */}
        <div className="flex flex-col justify-center">
          <h2 className="font-display text-5xl font-black uppercase tracking-tightest text-bone md:text-7xl">
            BOOK YOUR CUT.
          </h2>
          <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-ash">
            Appointments are handled through Squire. Pick your service, choose
            your time, and lock in your spot. The chair stays booked, so
            planning ahead is the move.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient mt-8 inline-block w-fit font-display text-lg font-bold uppercase tracking-widest text-ink px-10 py-4 transition-all hover:opacity-90"
          >
            Book on Squire
          </a>
        </div>

        {/* Right: Info grid */}
        <div className="grid grid-cols-2 gap-[1px] bg-chrome">
          <div className="bg-blade p-6">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Hours
            </span>
            <div className="mt-3 flex flex-col gap-1.5 font-body text-xs text-ash">
              <p>Tue - Fri: 10am - 7pm</p>
              <p>Saturday: 9am - 5pm</p>
              <p>Sunday: 11am - 4pm</p>
              <p className="text-razor">Monday: Closed</p>
            </div>
          </div>

          <div className="bg-blade p-6">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Location
            </span>
            <p className="mt-3 font-display text-sm font-semibold uppercase tracking-widest text-bone">
              Boca Raton, FL
            </p>
            <p className="mt-1 font-body text-xs text-ash">
              Address provided upon booking
            </p>
          </div>

          <div className="bg-blade p-6">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Walk-Ins
            </span>
            <p className="mt-3 font-body text-xs leading-relaxed text-ash">
              Available when the chair is open. Book ahead to lock in your spot.
            </p>
          </div>

          <div className="bg-blade p-6">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Contact
            </span>
            <p className="mt-3 font-body text-xs text-ash">
              DM on{" "}
              <a
                href="https://instagram.com/kwestthebarber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors hover:text-gold-light"
              >
                @kwestthebarber
              </a>
            </p>
            <p className="mt-1 font-body text-xs text-ash">
              or book directly through Squire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

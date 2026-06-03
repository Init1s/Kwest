import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blade border-t border-chrome/50">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        {/* Brand + info grid — centered on mobile, left-aligned at md+ */}
        <div className="grid gap-8 text-center md:grid-cols-12 md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:col-span-4 md:items-start">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-logo.png`}
              alt="Kwest The Barber"
              width={128}
              height={128}
              className="h-14 w-14 md:h-28 md:w-28"
            />
            <p className="mt-3 max-w-xs font-body text-sm text-ash">
              Precision cuts and clean fades in Boca Raton, FL.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-gold font-display text-xs font-bold uppercase tracking-widest text-ink px-5 py-2.5 transition-all hover:bg-gold-light"
            >
              Book Now
            </a>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Hours
            </span>
            <div className="mt-2 flex flex-col gap-1 font-body text-xs text-ash">
              <p>Tue &ndash; Fri: 10am &ndash; 7pm</p>
              <p>Saturday: 9am &ndash; 5pm</p>
              <p>Sunday: 11am &ndash; 4pm</p>
              <p className="text-razor">Monday: Closed</p>
            </div>
          </div>

          {/* Visit */}
          <div className="md:col-span-2">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Visit
            </span>
            <p className="mt-2 font-display text-sm font-semibold uppercase text-bone">
              Boca Raton, FL
            </p>
            <p className="mt-1 font-body text-xs text-ash">
              Address upon booking
            </p>
            <p className="mt-2 font-body text-xs leading-relaxed text-ash">
              Walk-ins when the chair is open.
            </p>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Connect
            </span>
            <div className="mt-2 flex flex-col items-center gap-1.5 font-mono text-xs uppercase tracking-widest md:items-start">
              <a
                href="#services"
                className="text-ash transition-colors hover:text-bone"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-ash transition-colors hover:text-bone"
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-ash transition-colors hover:text-bone"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-ash transition-colors hover:text-bone"
              >
                Contact
              </a>
              <a
                href="https://www.instagram.com/kwest_the_barber/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram — @kwest_the_barber"
                className="mt-1 inline-flex h-6 w-6 items-center justify-center text-ash transition-colors hover:text-gold"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-chrome/30 pt-5 sm:flex-row">
          <p className="font-mono text-[10px] tracking-widest text-ash">
            &copy; {year} Kwest The Barber
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ash/60">
            Sharp. Clean. Precise.
          </p>
        </div>
      </div>
    </footer>
  );
}

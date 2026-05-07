import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blade border-t border-chrome/50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Brand + info grid */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-logo.png`}
              alt="Kwest The Barber"
              width={120}
              height={120}
              className="h-24 w-24 md:h-28 md:w-28"
            />
            <p className="mt-4 max-w-xs font-body text-sm text-ash">
              Precision cuts and clean fades in Boca Raton, FL.
            </p>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Hours
            </span>
            <div className="mt-3 flex flex-col gap-1 font-body text-xs text-ash">
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
            <p className="mt-3 font-display text-sm font-semibold uppercase text-bone">
              Boca Raton, FL
            </p>
            <p className="mt-1 font-body text-xs text-ash">
              Address upon booking
            </p>
            <p className="mt-3 font-body text-xs leading-relaxed text-ash">
              Walk-ins when the chair is open.
            </p>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Connect
            </span>
            <div className="mt-3 flex flex-col gap-2 font-mono text-xs uppercase tracking-widest">
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
                href="https://www.instagram.com/kwest_the_barber/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ash transition-colors hover:text-gold"
              >
                @kwest_the_barber
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-chrome/30 pt-8 sm:flex-row">
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

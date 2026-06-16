import Image from "next/image";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blade border-t border-chrome/50">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        {/* Brand + info grid. Mobile uses a 2-column layout so Hours and
            Visit sit side-by-side instead of stacking, and the Connect
            links go horizontal — same data, roughly half the vertical
            height. Desktop keeps the original 12-column layout. */}
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-12 md:gap-8 md:text-left">
          {/* Brand — full row on mobile (col-span-2), 4 cols on desktop */}
          <div className="col-span-2 flex flex-col items-center md:col-span-4 md:items-start">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-logo.png`}
              alt="Kwest The Barber"
              width={128}
              height={128}
              className="h-24 w-24 md:h-28 md:w-28"
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

          {/* Hours — 1 col on mobile (left of Visit), 3 on desktop */}
          <div className="md:col-span-3">
            <span className="block font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Hours
            </span>
            <div className="mt-2 flex flex-col gap-1 font-body text-xs text-ash">
              <p>Tue &ndash; Fri: 10am &ndash; 7pm</p>
              <p>Sat: 9am &ndash; 5pm</p>
              <p>Sun: 11am &ndash; 4pm</p>
              <p className="text-razor">Mon: Closed</p>
            </div>
          </div>

          {/* Visit — 1 col on mobile (right of Hours), 2 on desktop */}
          <div className="md:col-span-2">
            <span className="block font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Visit
            </span>
            <address className="not-italic">
              <p className="mt-2 font-display text-sm font-semibold uppercase text-bone">
                2100 N Federal Hwy #24
              </p>
              <p className="mt-1 font-body text-xs text-ash">
                Boca Raton, FL 33431
              </p>
            </address>
            <p className="mt-2 font-body text-xs leading-relaxed text-ash">
              Walk-ins when the chair is open.
            </p>
          </div>

          {/* Connect — full row on mobile (col-span-2), 3 cols on desktop.
              Links flow horizontally on mobile (single line) and stack
              vertically on md+. */}
          <div className="col-span-2 md:col-span-3">
            <span className="block font-mono text-[9px] uppercase tracking-ultra text-smoke">
              Connect
            </span>
            <div className="mt-2 flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest md:flex-col md:items-start md:gap-1.5">
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
              <InstagramIconLink className="text-ash transition-colors hover:text-gold" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-chrome/30 pt-4 sm:flex-row md:mt-8 md:pt-5">
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

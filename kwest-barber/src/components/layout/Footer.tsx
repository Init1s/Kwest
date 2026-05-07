import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blade border-t border-chrome/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Brand */}
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/kwest-logo.jpeg`}
              alt="Kwest The Barber"
              width={120}
              height={120}
              className="h-24 w-24 md:h-28 md:w-28"
            />
            <p className="mt-4 max-w-xs font-body text-sm text-ash">
              Precision cuts and clean fades in Boca Raton, FL.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {["Services", "About", "Gallery"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-widest text-ash transition-colors hover:text-bone"
              >
                {item}
              </a>
            ))}
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-ash transition-colors hover:text-bone"
            >
              Book Now
            </a>
            <a
              href="https://www.instagram.com/kwest_the_barber/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-ash transition-colors hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-chrome/30 pt-8 sm:flex-row">
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

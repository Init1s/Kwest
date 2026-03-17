export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blade border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-3xl font-black uppercase tracking-tight text-bone">
                KWEST
              </span>
              <span className="font-display text-[0.6rem] font-semibold uppercase tracking-ultra text-gold">
                THE BARBER
              </span>
            </div>
            <p className="mt-4 max-w-xs font-body text-sm text-ash">
              Precision cuts and clean fades in Washington, DC. No shortcuts, no
              compromises.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-ultra text-smoke">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {["Services", "About", "Gallery", "Book Now"].map((item) => (
                <li key={item}>
                  <a
                    href={
                      item === "Book Now"
                        ? process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL
                        : `#${item.toLowerCase()}`
                    }
                    target={item === "Book Now" ? "_blank" : undefined}
                    rel={
                      item === "Book Now" ? "noopener noreferrer" : undefined
                    }
                    className="font-display text-sm font-semibold uppercase tracking-widest text-ash transition-colors hover:text-bone"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-xs font-semibold uppercase tracking-ultra text-smoke">
              Hours
            </h3>
            <ul className="mt-4 flex flex-col gap-2 font-mono text-xs text-ash">
              <li className="flex justify-between">
                <span>Tue - Fri</span>
                <span className="text-bone">10am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-bone">9am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-bone">11am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span>Monday</span>
                <span className="text-razor">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-chrome pt-8 sm:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-widest text-ash">
            &copy; {year} Kwest The Barber. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/kwestthebarber"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-ash transition-colors hover:text-gold"
            >
              Instagram
            </a>
            <a
              href="/privacy"
              className="font-mono text-[10px] uppercase tracking-widest text-ash transition-colors hover:text-gold"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

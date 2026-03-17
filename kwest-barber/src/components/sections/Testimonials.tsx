const testimonials = [
  {
    quote:
      "Been going to Kwest for six years. Moved to Baltimore and I still drive down every two weeks. Nobody else touches my head.",
    name: "Marcus T.",
    since: "2020",
  },
  {
    quote:
      "First barber who actually listened to what I wanted instead of just doing whatever. The lineup is surgical. Every single time.",
    name: "Darius W.",
    since: "2019",
  },
  {
    quote:
      "Brought my son in for his first real cut. Kwest was patient, kept him calm, and the kid walked out feeling like a million bucks. We are regulars now.",
    name: "Tanya R.",
    since: "2022",
  },
  {
    quote:
      "I had a wedding on three days notice and Kwest fit me in same day. Full service, beard sculpt, everything. Looked the best I ever have. That is the standard.",
    name: "Jerome K.",
    since: "2018",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="h-3 w-3 fill-gold"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 font-display text-5xl font-black uppercase tracking-tightest text-bone md:text-7xl">
          CLIENTS{" "}
          <span className="text-gold-gradient">DON&apos;T LIE.</span>
        </h2>

        <div className="grid gap-[1px] bg-chrome md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-blade p-8 transition-colors hover:bg-steel"
            >
              <span className="font-display text-6xl font-black leading-none text-gold/30">
                &ldquo;
              </span>
              <blockquote className="-mt-4 font-body text-sm leading-relaxed text-bone">
                {t.quote}
              </blockquote>
              <footer className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-bone">
                    {t.name}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                    Client since {t.since}
                  </p>
                </div>
                <Stars />
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

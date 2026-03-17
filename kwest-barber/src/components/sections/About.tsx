export function About() {
  return (
    <section id="about" className="bg-ink px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div
            className="aspect-[4/5] bg-steel"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)" }}
          >
            {/* TODO: Replace with <Image> using Kwest's actual photo. File: /public/images/kwest-portrait.jpg */}
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 right-8 flex items-center gap-3 border border-gold/20 bg-ink px-5 py-3 animate-glow-pulse">
            <span className="font-display text-4xl font-black text-gold">
              10
            </span>
            <div className="flex flex-col">
              <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                Years
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-widest text-bone">
                Sharp
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            The Barber
          </span>

          <h2 className="mt-4 font-display text-5xl font-black uppercase tracking-tightest text-bone md:text-6xl">
            BUILT ON{" "}
            <span className="text-gold-gradient">CRAFT.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-4 font-body text-sm leading-relaxed text-ash">
            <p>
              Kwest started cutting in a one-chair spot in Southeast DC with
              nothing but a pair of Wahl Seniors and word of mouth. Over a
              decade later, the reputation speaks for itself: sharp fades, clean
              lines, and a chair that stays booked.
            </p>
            <p>
              Every cut is a conversation. Head shape, hair texture, how you
              carry yourself. The blade work comes second. Understanding the
              client comes first. That approach built a roster of over 2,400
              regulars who do not go anywhere else.
            </p>
            <p>
              DC is full of barbers. Kwest is the one your barber goes to.
            </p>
          </div>

          {/* Info grid */}
          <div className="mt-12 grid grid-cols-2 gap-6">
            {[
              { label: "Location", value: "Washington, DC" },
              { label: "Walk-Ins", value: "When the chair is open" },
              { label: "Instagram", value: "@kwestthebarber" },
              { label: "Booking", value: "Via Squire" },
            ].map((item) => (
              <div key={item.label}>
                <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
                  {item.label}
                </span>
                <p className="mt-1 font-display text-sm font-semibold uppercase tracking-widest text-bone">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

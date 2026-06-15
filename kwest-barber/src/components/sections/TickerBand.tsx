const items = [
  "PRECISION CUTS",
  "CLEAN FADES",
  "SHARP LINEUPS",
  "BEARD SCULPTING",
  "KWEST THE BARBER",
  "BOCA RATON",
  "CRAFT OVER SPEED",
  "BOOK YOUR SPOT",
];

function TickerItem({ text }: { text: string }) {
  return (
    <>
      <span className="font-display text-sm font-extrabold uppercase tracking-widest text-ink md:text-base">
        {text}
      </span>
      <span className="mx-5 text-xs text-ink/30 select-none">/</span>
    </>
  );
}

export function TickerBand() {
  const doubled = [...items, ...items];

  return (
    <div className="relative -my-6 overflow-hidden md:-my-8">
      {/* Ticker rotated -3deg so the band reads as an angled banner
          cut across the page seam, not a stacked horizontal stripe.
          Slightly wider than 100% so the rotated corners still cover
          the viewport edges at every breakpoint. */}
      <div
        className="relative overflow-hidden bg-gold py-4"
        style={{
          transform: "rotate(-3deg)",
          transformOrigin: "center",
          width: "110%",
          marginLeft: "-5%",
        }}
      >
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-gold to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-gold to-transparent" />

        <div className="animate-ticker flex w-max items-center whitespace-nowrap">
          {doubled.map((item, i) => (
            <TickerItem key={`${item}-${i}`} text={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

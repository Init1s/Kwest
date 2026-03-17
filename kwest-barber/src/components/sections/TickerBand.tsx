const items = [
  "PRECISION CUTS",
  "CLEAN FADES",
  "SHARP LINEUPS",
  "BEARD SCULPTING",
  "KWEST THE BARBER",
  "BOCA RATON",
  "NO COMPROMISES",
  "BOOK YOUR SPOT",
];

function TickerItem({ text }: { text: string }) {
  return (
    <>
      <span className="font-display text-sm font-black uppercase tracking-ultra text-ink md:text-base">
        {text}
      </span>
      <span className="mx-4 inline-block h-1.5 w-1.5 rounded-full bg-ink/40" />
    </>
  );
}

export function TickerBand() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden bg-gold py-3">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-gold to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-gold to-transparent" />

      <div className="animate-ticker flex w-max items-center whitespace-nowrap">
        {doubled.map((item, i) => (
          <TickerItem key={`${item}-${i}`} text={item} />
        ))}
      </div>
    </div>
  );
}

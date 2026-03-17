import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const services = [
  {
    name: "Classic Cut",
    price: "$35",
    duration: "30 min",
    description:
      "A sharp, tailored cut built around your head shape and hair texture. Consultation included.",
    featured: false,
  },
  {
    name: "Fade",
    price: "$40",
    duration: "40 min",
    description:
      "Skin, low, mid, or high. Blended with precision and zero lines. Every time.",
    featured: false,
  },
  {
    name: "Lineup & Edge",
    price: "$20",
    duration: "15 min",
    description:
      "Crisp hairline, clean edges, and a sharp beard outline. Quick and right.",
    featured: false,
  },
  {
    name: "Beard Sculpt",
    price: "$30",
    duration: "25 min",
    description:
      "Full beard shaping with hot towel treatment, straight razor edges, and oil finish.",
    featured: false,
  },
  {
    name: "Full Service",
    price: "$75",
    duration: "60 min",
    description:
      "The complete experience. Cut, fade, lineup, beard sculpt, hot towel, and style. Walk out right.",
    featured: true,
  },
  {
    name: "Kid's Cut",
    price: "$25",
    duration: "25 min",
    description:
      "Patient, clean cuts for the young ones. Same precision, same standards. Ages 12 and under.",
    featured: false,
  },
];

export function Services() {
  const featured = services.find((s) => s.featured);
  const regular = services.filter((s) => !s.featured);

  return (
    <section id="services" className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <Reveal className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            What We Do
          </span>
          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-extrabold uppercase tracking-tightest text-bone md:text-6xl">
              THE SERVICES
            </h2>
            <p className="max-w-sm font-body text-sm text-ash md:text-right">
              Every service starts with a consultation and ends with you looking
              exactly how you should.
            </p>
          </div>
        </Reveal>

        {/* Signature service callout */}
        {featured && (
          <Reveal
            delay={0.1}
            className="mb-16 border border-gold/25 bg-gold/[0.04] p-8 md:p-12"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-ultra text-gold">
                  Signature Service
                </span>
                <h3 className="mt-3 font-display text-3xl font-extrabold uppercase text-bone md:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-4 max-w-lg font-body text-sm leading-relaxed text-ash">
                  {featured.description}
                </p>
              </div>
              <div className="flex items-end gap-4 md:flex-col md:items-end">
                <span className="font-display text-4xl font-extrabold text-gold md:text-5xl">
                  {featured.price}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-smoke">
                  {featured.duration}
                </span>
              </div>
            </div>
          </Reveal>
        )}

        {/* Service list */}
        <RevealGroup className="border-t border-chrome/60">
          {regular.map((service) => (
            <RevealItem
              key={service.name}
              className="group flex flex-col justify-between gap-3 border-b border-chrome/60 py-7 transition-colors hover:bg-bone/[0.02] md:flex-row md:items-center"
            >
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold uppercase text-bone transition-colors group-hover:text-gold md:text-2xl">
                  {service.name}
                </h3>
                <p className="mt-1.5 max-w-lg font-body text-sm text-ash">
                  {service.description}
                </p>
              </div>
              <div className="flex items-center gap-6 md:gap-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-smoke">
                  {service.duration}
                </span>
                <span className="font-display text-2xl font-extrabold text-gold">
                  {service.price}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

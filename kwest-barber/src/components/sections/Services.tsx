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
  return (
    <section id="services" className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-5xl font-black uppercase tracking-tightest text-bone md:text-7xl">
            THE SERVICES
          </h2>
          <p className="max-w-sm font-body text-sm text-ash md:text-right">
            Every service starts with a consultation and ends with you looking
            exactly how you should.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-[1px] bg-chrome md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`relative flex flex-col justify-between p-8 ${
                service.featured ? "bg-gold/10" : "bg-blade"
              }`}
            >
              {service.featured && (
                <span className="absolute top-4 right-4 font-mono text-[9px] uppercase tracking-ultra text-gold">
                  Popular
                </span>
              )}

              <div>
                <span className="font-mono text-[10px] text-smoke">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl font-black uppercase tracking-tight text-bone">
                  {service.name}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ash">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex items-end justify-between">
                <span className="font-display text-3xl font-black text-gold">
                  {service.price}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-smoke">
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

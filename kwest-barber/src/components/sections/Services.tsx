import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const services = [
  {
    name: "The LUX Special",
    price: "$130",
    duration: "90 min",
    description:
      "The complete experience. Cut, beard, hot towel, and finish — slow, precise, no shortcuts.",
    featured: true,
  },
  {
    name: "Haircut",
    price: "$45",
    duration: "60 min",
    description:
      "A sharp, tailored cut built around your head shape and hair texture. Consultation included.",
    featured: false,
  },
  {
    name: "Haircut and Beard",
    price: "$60",
    duration: "60 min",
    description:
      "Full cut paired with a clean beard sculpt and edge-up. The standard combo.",
    featured: false,
  },
  {
    name: "Hot Towel Shave & Haircut",
    price: "$85",
    duration: "75 min",
    description:
      "Cut plus a traditional hot towel straight-razor shave. Old school, sharp finish.",
    featured: false,
  },
  {
    name: "Scissor Cut",
    price: "$60",
    duration: "90 min",
    description:
      "All-scissor work for textured cuts and longer styles. No clippers, no shortcuts.",
    featured: false,
  },
  {
    name: "After Hours Haircut",
    price: "$100",
    duration: "90 min",
    description:
      "Private appointment outside standard hours. Limited slots — book ahead.",
    featured: false,
  },
  {
    name: "House Call VIP",
    price: "$150",
    duration: "150 min",
    description:
      "On-location service. The chair comes to you, with the same standards.",
    featured: false,
  },
  {
    name: "Kids Haircut",
    price: "$35",
    duration: "45 min",
    description:
      "Patient, clean cuts for kids 14 and under. Same precision, same standards.",
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

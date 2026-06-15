import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

type Service = {
  name: string;
  price: string;
  duration: string;
  description: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    name: "House Call VIP",
    price: "$150",
    duration: "2 hr 30 min",
    description:
      "On-location service. The chair comes to you, with the same standards.",
  },
  {
    name: "The LUX Special",
    price: "$130",
    duration: "1 hr 30 min",
    description:
      "The complete experience. Cut, beard, hot towel, finish — slow, precise, no shortcuts.",
    featured: true,
  },
  {
    name: "After Hours Haircut",
    price: "$100",
    duration: "1 hr 30 min",
    description:
      "Private appointment outside standard hours. Limited slots — book ahead.",
  },
  {
    name: "Hot Towel Shave & Haircut",
    price: "$85",
    duration: "1 hr 15 min",
    description:
      "Cut plus a traditional hot-towel straight-razor shave. Old school, sharp finish.",
  },
  {
    name: "Scissor Cut",
    price: "$60",
    duration: "1 hr 30 min",
    description:
      "All-scissor work for textured cuts and longer styles. No clippers, no shortcuts.",
  },
  {
    name: "Haircut and Beard",
    price: "$60",
    duration: "1 hr",
    description:
      "Full cut paired with a clean beard sculpt and edge-up. The standard combo.",
  },
  {
    name: "Haircut",
    price: "$45",
    duration: "1 hr",
    description:
      "A sharp, tailored cut built around your head shape and hair texture. Consultation included.",
  },
  {
    name: "Kids Haircut",
    price: "$35",
    duration: "45 min",
    description:
      "Patient, clean cuts for kids 14 and under. Same precision, same standards.",
  },
];

function ServiceRow({ service }: { service: Service }) {
  return (
    <RevealItem
      className={`group flex flex-col gap-2 border-b border-chrome/60 py-6 transition-colors hover:bg-bone/[0.02] md:flex-row md:items-baseline md:gap-6 ${
        service.featured ? "bg-gold/[0.04] px-4 md:px-5" : ""
      }`}
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3
            className={`font-display text-2xl uppercase leading-none transition-colors md:text-3xl ${
              service.featured
                ? "text-gold"
                : "text-bone group-hover:text-gold"
            }`}
          >
            {service.name}
          </h3>
          {service.featured && (
            <span className="font-mono text-[9px] uppercase tracking-ultra text-lime">
              · Signature
            </span>
          )}
        </div>
        <p className="mt-1.5 max-w-2xl font-body text-sm text-ash">
          {service.description}
        </p>
      </div>
      <div className="flex items-baseline gap-6 md:flex-col md:items-end md:gap-1">
        <span className="font-mono text-xs tracking-widest text-smoke">
          {service.duration}
        </span>
        <span
          className={`font-display text-2xl ${
            service.featured ? "text-lime" : "text-gold"
          }`}
        >
          {service.price}
        </span>
      </div>
    </RevealItem>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-ink px-6 py-24 md:py-32 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-12 flex items-end justify-between gap-6">
          <h2
            className="font-display uppercase leading-[0.9] text-bone"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
          >
            Services
          </h2>
          <span className="hidden -translate-y-3 font-mono text-[10px] uppercase tracking-ultra text-smoke md:block">
            8 cuts · all by Kwest
          </span>
        </Reveal>

        <RevealGroup stagger={0.06} className="border-t border-chrome/60">
          {services.map((s) => (
            <ServiceRow key={s.name} service={s} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

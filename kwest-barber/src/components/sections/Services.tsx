import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

type Service = {
  name: string;
  price: string;
  duration: string;
  description: string;
  featured?: boolean;
};

const sideA: Service[] = [
  {
    name: "House Call VIP",
    price: "$150",
    duration: "2:30",
    description:
      "On-location service. The chair comes to you, with the same standards.",
  },
  {
    name: "The LUX Special",
    price: "$130",
    duration: "1:30",
    description:
      "The complete experience. Cut, beard, hot towel, finish — slow, precise, no shortcuts.",
    featured: true,
  },
  {
    name: "After Hours Haircut",
    price: "$100",
    duration: "1:30",
    description:
      "Private appointment outside standard hours. Limited slots — book ahead.",
  },
  {
    name: "Hot Towel Shave & Haircut",
    price: "$85",
    duration: "1:15",
    description:
      "Cut plus a traditional hot-towel straight-razor shave. Old school, sharp finish.",
  },
];

const sideB: Service[] = [
  {
    name: "Scissor Cut",
    price: "$60",
    duration: "1:30",
    description:
      "All-scissor work for textured cuts and longer styles. No clippers, no shortcuts.",
  },
  {
    name: "Haircut and Beard",
    price: "$60",
    duration: "1:00",
    description:
      "Full cut paired with a clean beard sculpt and edge-up. The standard combo.",
  },
  {
    name: "Haircut",
    price: "$45",
    duration: "1:00",
    description:
      "A sharp, tailored cut built around your head shape and hair texture. Consultation included.",
  },
  {
    name: "Kids Haircut",
    price: "$35",
    duration: "0:45",
    description:
      "Patient, clean cuts for kids 14 and under. Same precision, same standards.",
  },
];

function formatTrack(index: number) {
  return String(index + 1).padStart(2, "0");
}

function Track({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <RevealItem
      className={`group flex flex-col gap-2 border-b border-chrome/60 py-6 transition-colors hover:bg-bone/[0.02] md:flex-row md:items-baseline md:gap-6 ${
        service.featured ? "bg-gold/[0.04]" : ""
      }`}
    >
      <span
        className={`font-mono text-xs tracking-widest ${
          service.featured ? "text-gold" : "text-smoke"
        }`}
      >
        {formatTrack(index)}
      </span>
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
        <p className="mt-1.5 max-w-xl font-body text-sm text-ash">
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

function SideHeader({
  side,
  label,
}: {
  side: "A" | "B";
  label: string;
}) {
  return (
    <div className="mb-2 flex items-baseline justify-between border-b-2 border-bone pb-3">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl text-bone">SIDE {side}</span>
        <span className="font-mono text-[9px] uppercase tracking-ultra text-smoke">
          {label}
        </span>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-ink px-6 py-24 md:py-32 overflow-hidden"
    >
      {/* Editorial header */}
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            Services
          </span>
          <h2
            className="painted-mis mt-4 font-display uppercase leading-[0.95] text-bone"
            data-text="THE SERVICES"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            THE SERVICES
          </h2>
          <p className="mt-4 max-w-md font-body text-sm text-ash">
            Eight cuts. Two sides. Pick your track and book the chair.
          </p>
        </Reveal>

        {/* Two-column album-jacket tracklist */}
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 md:gap-x-16">
          <RevealGroup stagger={0.08}>
            <SideHeader side="A" label="Signature Services" />
            {sideA.map((s, i) => (
              <Track key={s.name} service={s} index={i} />
            ))}
          </RevealGroup>
          <RevealGroup stagger={0.08}>
            <SideHeader side="B" label="Classics & Quick Cuts" />
            {sideB.map((s, i) => (
              <Track key={s.name} service={s} index={i + sideA.length} />
            ))}
          </RevealGroup>
        </div>

        {/* Catalog footer — the "stamp" on the back of the jacket */}
        <Reveal className="mt-16 border-t border-chrome pt-6" delay={0.2}>
          <div className="flex flex-wrap items-baseline justify-between gap-3 font-mono text-[10px] uppercase tracking-ultra text-smoke">
            <span>Cat. No. KWST-001 / Boca Raton, FL</span>
            <span>Booked through Squire</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

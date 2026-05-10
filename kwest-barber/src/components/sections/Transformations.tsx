"use client";

import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

type Transformation = {
  id: number;
  title: string;
  before?: string;
  after?: string;
};

const transformations: Transformation[] = [
  {
    id: 1,
    title: "The Mid Fade",
    before: "/images/mid-fade-before.jpeg",
    after: "/images/mid-fade-after.jpeg",
  },
  { id: 2, title: "The Beard Sculpt" },
  { id: 3, title: "The Full Service" },
];

export function Transformations() {
  return (
    <section className="bg-blade px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            Before &amp; After
          </span>
          <h2
            className="painted-mis mt-4 font-display uppercase leading-[0.95] text-bone"
            data-text="TRANSFORMATIONS"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            TRANSFORMATIONS
          </h2>
          <p className="mt-4 max-w-md font-body text-sm text-ash">
            Drag the slider to see the difference. Real cuts, real clients.
          </p>
        </Reveal>

        <RevealGroup className="grid gap-8 md:grid-cols-3" stagger={0.12}>
          {transformations.map((t) => (
            <RevealItem key={t.id}>
              <p className="mb-4 font-display text-lg font-bold uppercase text-bone">
                {t.title}
              </p>
              <BeforeAfter
                before={t.before}
                after={t.after}
                beforeAlt={`${t.title} — before`}
                afterAlt={`${t.title} — after`}
                ariaLabel={`${t.title} — before and after comparison slider`}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Booking() {
  return (
    <section id="booking" className="bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="font-mono text-[10px] uppercase tracking-ultra text-smoke">
            Closing Track
          </span>

          <h2
            className="painted-mis mt-6 font-display uppercase leading-[0.9] text-bone"
            data-text="BOOK YOUR CUT."
            style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
          >
            BOOK YOUR
            <br />
            <span className="font-script text-gold">Cut.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-md font-body text-sm leading-relaxed text-ash">
            Appointments are handled through Squire. Pick your service, choose
            your time, and lock in your spot. The chair stays booked, so
            planning ahead is the move.
          </p>

          <MagneticButton className="mt-10 inline-block">
            <a
              href={process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold font-display text-base font-bold uppercase tracking-widest text-ink px-12 py-5 transition-all hover:bg-gold-light"
            >
              Book on Squire
            </a>
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

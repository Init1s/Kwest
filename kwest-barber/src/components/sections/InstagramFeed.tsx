import Script from "next/script";
import { Reveal } from "@/components/ui/Reveal";

// LightWidget HTTPS widget. Served from cdn.lightwidget.com so the
// embed loads on the production HTTPS site without mixed-content
// blocking. To swap: regenerate the widget in your LightWidget
// dashboard and update the ID below.
const LIGHTWIDGET_ID = "a57db604428f59f18ee0c80735196a7a";

export function InstagramFeed() {
  return (
    <section
      id="instagram"
      className="relative overflow-hidden bg-blade"
    >
      <div className="px-6 pt-24 pb-12 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
              <h2
                className="font-display uppercase leading-[0.95] text-bone"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                Instagram
              </h2>
              <a
                href="https://www.instagram.com/kwest_the_barber/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:text-gold md:self-end"
              >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
                  </svg>
                  <span>@kwest_the_barber</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>
          </Reveal>
        </div>
      </div>

      <div className="px-4 pb-24 md:px-6 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <Reveal delay={0.1}>
            {/* LightWidget renders the live IG feed inside this iframe.
                Its bootstrap script resizes the iframe to match the
                grid's intrinsic height at runtime. min-height is the
                fallback floor (visible before/without the resize
                script). Constrain via max-w-5xl above so the embed
                doesn't sprawl across the full page width. */}
            <iframe
              src={`https://cdn.lightwidget.com/widgets/${LIGHTWIDGET_ID}.html`}
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-popups allow-same-origin"
              className="lightwidget-widget mx-auto block w-full overflow-hidden border-0 bg-transparent min-h-[480px] md:min-h-[560px]"
              title="Instagram feed by @kwest_the_barber"
            />
            <noscript>
              <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-smoke">
                JavaScript is required for the Instagram feed.{" "}
                <a
                  href="https://www.instagram.com/kwest_the_barber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bone hover:text-gold"
                >
                  View on Instagram instead.
                </a>
              </p>
            </noscript>
          </Reveal>
        </div>
      </div>

      <Script
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}

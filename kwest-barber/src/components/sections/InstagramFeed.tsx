import Script from "next/script";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIconLink } from "@/components/ui/InstagramIconLink";

// LightWidget widget ID. To enable / change the widget:
//   1. Sign in at https://lightwidget.com → Widgets → pick this widget.
//   2. In the widget settings, enable HTTPS. Without it the iframe is
//      blocked as mixed content on https://kwestthebarber.com /
//      https://init1s.github.io/Kwest/ and shows "HTTPS is disabled".
//   3. Drop the new widget ID below if you regenerate it.
const LIGHTWIDGET_ID = "a57db604428f59f18ee0c80735196a7a";

export function InstagramFeed() {
  return (
    <section id="gallery" className="bg-ink">
      <div className="px-6 pt-24 pb-12 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <h2
                className="font-display uppercase leading-[0.95] text-bone"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
              >
                Gallery
              </h2>
              <InstagramIconLink
                size={32}
                className="text-smoke transition-colors hover:text-gold"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal delay={0.1}>
            {/* LightWidget renders the IG feed inside this iframe. Its
                bootstrap script handles resize at runtime; min-height keeps
                the embed visible even if the script is blocked, slow, or
                fails. */}
            <iframe
              src={`https://lightwidget.com/widgets/${LIGHTWIDGET_ID}.html`}
              scrolling="no"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-popups allow-same-origin"
              className="lightwidget-widget block w-full overflow-hidden border-0 bg-transparent"
              style={{ minHeight: 720 }}
              title="Instagram feed by @kwest_the_barber"
            />
            <noscript>
              <p className="mt-4 text-center font-mono text-xs uppercase tracking-widest text-smoke">
                JavaScript is required for the gallery.{" "}
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

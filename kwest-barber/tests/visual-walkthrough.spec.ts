import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const OUT_DIR = join(process.cwd(), "screenshots", "walkthrough");

const SECTIONS = [
  { id: "hero", selector: "section >> nth=0" },
  { id: "services", selector: "#services" },
  { id: "about", selector: "#about" },
  { id: "gallery", selector: "#gallery" },
  { id: "testimonials", selector: "#about ~ section ~ section" },
  { id: "contact", selector: "#contact" },
  { id: "booking", selector: "#booking" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "laptop", width: 1366, height: 700 },
  { name: "mobile", width: 390, height: 844 },
];

test.describe.configure({ mode: "serial" });

test.beforeAll(() => {
  mkdirSync(OUT_DIR, { recursive: true });
});

for (const vp of VIEWPORTS) {
  test(`visual walkthrough — ${vp.name} (${vp.width}x${vp.height})`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("/", { waitUntil: "networkidle" });

    // Wait for the intro splash to dismiss.
    await page.waitForTimeout(2200);

    // Initial top-of-page screenshot (above-the-fold check).
    await page.screenshot({
      path: join(OUT_DIR, `${vp.name}-00-top.png`),
      fullPage: false,
    });

    // Full-page screenshot to scroll through visually.
    await page.screenshot({
      path: join(OUT_DIR, `${vp.name}-full.png`),
      fullPage: true,
    });

    // Section-by-section.
    for (const sec of SECTIONS) {
      const el = page.locator(sec.selector).first();
      const count = await el.count();
      if (count === 0) continue;
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await el
        .screenshot({
          path: join(OUT_DIR, `${vp.name}-${sec.id}.png`),
        })
        .catch(() => {
          /* section may be inside an animation transform — fall back to a
             page screenshot taken at scroll position */
          return page.screenshot({
            path: join(OUT_DIR, `${vp.name}-${sec.id}.png`),
            fullPage: false,
          });
        });
    }
  });
}

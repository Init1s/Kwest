import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "screenshots", "hero-deadspace");

test("Dead space under the hero — mobile", async ({ page }) => {
  mkdirSync(OUT, { recursive: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  // Measure where the hero ends and the next section starts.
  const heroBox = await page.locator("section").nth(0).boundingBox();
  const tickerBox = await page.locator("section").nth(1).boundingBox();
  console.log(
    JSON.stringify({
      heroBox,
      tickerBox,
      heroBottom: heroBox ? heroBox.y + heroBox.height : null,
      tickerTop: tickerBox ? tickerBox.y : null,
      gap: heroBox && tickerBox ? tickerBox.y - (heroBox.y + heroBox.height) : null,
    }),
  );

  // Scroll so the hero bottom is in view + whatever follows.
  if (heroBox) {
    const scrollY = Math.max(0, heroBox.y + heroBox.height - 500);
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
  }
  await page.waitForTimeout(500);
  await page.screenshot({
    path: join(OUT, "viewport.png"),
    fullPage: false,
  });
});

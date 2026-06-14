import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "screenshots", "dead-space");

test("Dead-space snapshot — mobile, after the IG thumbnails", async ({
  page,
}) => {
  mkdirSync(OUT, { recursive: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  // Scroll the Instagram section into view, then nudge down past the
  // thumbnails so the screenshot captures the empty area below.
  const instagram = page.locator("#instagram");
  await instagram.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, 200));
  await page.waitForTimeout(800);
  await page.screenshot({
    path: join(OUT, "viewport.png"),
    fullPage: false,
  });

  // Also a full-page screenshot so the proportions are clear at a glance.
  await page.screenshot({
    path: join(OUT, "full-page.png"),
    fullPage: true,
  });
});

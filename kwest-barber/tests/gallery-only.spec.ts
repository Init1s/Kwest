import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "screenshots", "gallery");

test("Gallery carousel — uniform card sizes", async ({ page }) => {
  mkdirSync(OUT, { recursive: true });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200); // wait for the intro splash

  const gallery = page.locator("#gallery");
  await gallery.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await gallery.screenshot({ path: join(OUT, "gallery.png") });
});

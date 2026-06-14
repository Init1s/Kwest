import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "screenshots", "ig-mobile");

test("Instagram section — mobile snapshot", async ({ page }) => {
  mkdirSync(OUT, { recursive: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  const instagram = page.locator("#instagram");
  await instagram.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await instagram.screenshot({ path: join(OUT, "instagram.png") });
});

import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "screenshots", "portrait");

test("Kwest portrait in the About section — no crop, no letterbox, no side bars", async ({
  page,
}) => {
  mkdirSync(OUT, { recursive: true });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200); // wait for intro splash to dismiss

  const portrait = page.locator("#about img").first();
  await portrait.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await portrait.screenshot({ path: join(OUT, "portrait.png") });
});

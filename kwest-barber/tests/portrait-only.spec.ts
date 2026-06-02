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

  // Screenshot the masked wrapper (the parent of the img) so that any
  // mask-image / overlay CSS is reflected, not just the raw bitmap.
  const wrapper = page.locator("#about .duotone-orange").first();
  await wrapper.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await wrapper.screenshot({ path: join(OUT, "portrait.png") });

  // Also capture the surrounding column so we can see the cap against the
  // section bg-blade — this is what the user actually sees.
  const column = page.locator("#about > div > div > div").first();
  await column.screenshot({ path: join(OUT, "portrait-context.png") });
});

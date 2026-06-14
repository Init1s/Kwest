import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "screenshots", "gallery");

test("Portfolio + Instagram sections — desktop", async ({ page }) => {
  mkdirSync(OUT, { recursive: true });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  const portfolio = page.locator("#gallery");
  await portfolio.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await portfolio.screenshot({ path: join(OUT, "desktop-portfolio.png") });

  const instagram = page.locator("#instagram");
  await instagram.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await instagram.screenshot({ path: join(OUT, "desktop-instagram.png") });
});

test("Portfolio + Instagram sections — mobile", async ({ page }) => {
  mkdirSync(OUT, { recursive: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2200);

  const portfolio = page.locator("#gallery");
  await portfolio.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await portfolio.screenshot({ path: join(OUT, "mobile-portfolio.png") });

  const instagram = page.locator("#instagram");
  await instagram.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await instagram.screenshot({ path: join(OUT, "mobile-instagram.png") });
});

import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Kwest The Barber/);
  });

  test("navbar is visible with Book Now link pointing to Squire", async ({
    page,
  }) => {
    const bookNow = page.getByRole("navigation").getByRole("link", { name: /book now/i });
    await expect(bookNow).toBeVisible();
    const href = await bookNow.getAttribute("href");
    expect(href).toContain("squire.com");
  });

  test("hero section renders KWEST text", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toContainText("SHARP");
  });

  test("services section has 6 service cards", async ({ page }) => {
    const services = page.locator("#services");
    const cards = services.locator(
      "div.bg-blade, div[class*='bg-gold']"
    );
    await expect(cards).toHaveCount(6);
  });

  test("booking CTA has target _blank and rel noopener noreferrer", async ({
    page,
  }) => {
    const booking = page.locator("#booking");
    const cta = booking.getByRole("link", { name: /book on squire/i });
    await expect(cta).toHaveAttribute("target", "_blank");
    await expect(cta).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("instagram placeholder renders when no env token is set", async ({
    page,
  }) => {
    const gallery = page.locator("#gallery");
    const placeholder = gallery.locator("text=Connect Instagram in .env.local");
    await expect(placeholder).toBeVisible();
  });
});

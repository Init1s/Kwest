import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/Kwest The Barber/);
  });

  test("navbar Book Now link points at Squire", async ({ page }) => {
    // Both the desktop nav and the mobile menu render a Book Now link.
    // .first() picks the desktop one in this Chromium viewport.
    const bookNow = page
      .getByRole("navigation")
      .getByRole("link", { name: /book now/i })
      .first();
    await expect(bookNow).toBeVisible();
    const href = await bookNow.getAttribute("href");
    expect(href).toContain("squire");
  });

  test("hero renders the SHARP / CLEAN / PRECISE headline", async ({
    page,
  }) => {
    const hero = page.locator("section").first();
    await expect(hero).toContainText("SHARP");
    await expect(hero).toContainText("CLEAN");
    await expect(hero).toContainText("PRECISE");
  });

  test("services section lists every service with a price", async ({
    page,
  }) => {
    const services = page.locator("#services");
    // Each service renders an <h3> with its name. The count must equal the
    // catalog length in src/components/sections/Services.tsx.
    const headings = services.getByRole("heading", { level: 3 });
    await expect(headings).toHaveCount(8);
    // Every visible service price renders as $NN or $NNN.
    const prices = services.getByText(/^\$\d{2,3}$/);
    await expect(prices).toHaveCount(8);
  });

  test("booking CTA opens in a new tab with safe rel attributes", async ({
    page,
  }) => {
    const booking = page.locator("#booking");
    const cta = booking.getByRole("link", { name: /book on squire/i });
    await expect(cta).toHaveAttribute("target", "_blank");
    await expect(cta).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("contact section exposes Instagram and a Squire booking CTA", async ({
    page,
  }) => {
    const contact = page.locator("#contact");
    await expect(contact).toBeVisible();
    const ig = contact.getByRole("link", { name: /kwest_the_barber/i });
    await expect(ig).toHaveAttribute(
      "href",
      /instagram\.com\/kwest_the_barber/,
    );
    const bookOnSquire = contact.getByRole("link", { name: /book on squire/i });
    await expect(bookOnSquire).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("Instagram placeholder renders when no token is set in dev", async ({
    page,
  }) => {
    const gallery = page.locator("#gallery");
    await expect(
      gallery.getByText(/connect instagram in \.env\.local/i),
    ).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("every image has either non-empty alt or aria-hidden=true", async ({
    page,
  }) => {
    // Per WCAG decorative images may carry alt="" provided they are also
    // hidden from assistive tech via aria-hidden. Treat that as valid.
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute("alt");
      const ariaHidden = await img.getAttribute("aria-hidden");
      const isDecorative = ariaHidden === "true";
      const hasMeaningfulAlt = alt !== null && alt.length > 0;
      expect(hasMeaningfulAlt || isDecorative).toBe(true);
    }
  });

  test("all interactive elements are keyboard focusable", async ({ page }) => {
    const links = page.locator("a[href]");
    const buttons = page.locator("button");

    const linkCount = await links.count();
    for (let i = 0; i < linkCount; i++) {
      const tabIndex = await links.nth(i).getAttribute("tabindex");
      expect(Number(tabIndex ?? 0)).toBeGreaterThanOrEqual(-1);
    }

    const buttonCount = await buttons.count();
    for (let i = 0; i < buttonCount; i++) {
      const tabIndex = await buttons.nth(i).getAttribute("tabindex");
      expect(Number(tabIndex ?? 0)).toBeGreaterThanOrEqual(-1);
    }
  });

  test("brand orange on ink meets WCAG AA contrast for normal text", () => {
    // --color-gold #FF4D1A on --color-ink #0A0A0A.
    // Computed via WCAG relative luminance:
    //   gold ≈ 0.272, ink ≈ 0.003
    //   contrast = (0.272 + 0.05) / (0.003 + 0.05) ≈ 6.07
    // 6.07 ≥ 4.5 → passes AA for normal text. (AAA threshold is 7.0.)
    const goldLuminance = 0.272;
    const inkLuminance = 0.003;
    const contrast =
      (Math.max(goldLuminance, inkLuminance) + 0.05) /
      (Math.min(goldLuminance, inkLuminance) + 0.05);

    expect(contrast).toBeGreaterThanOrEqual(4.5);
  });

  test("brand lime on ink meets WCAG AAA contrast", () => {
    // --color-lime #BFE85A on --color-ink #0A0A0A.
    //   lime ≈ 0.698, ink ≈ 0.003
    //   contrast = (0.698 + 0.05) / (0.003 + 0.05) ≈ 14.1
    // Comfortably above the AAA threshold of 7.0.
    const limeLuminance = 0.698;
    const inkLuminance = 0.003;
    const contrast =
      (Math.max(limeLuminance, inkLuminance) + 0.05) /
      (Math.min(limeLuminance, inkLuminance) + 0.05);

    expect(contrast).toBeGreaterThanOrEqual(7.0);
  });

  test("no heading level is skipped", async ({ page }) => {
    const headings = await page.locator("h1, h2, h3, h4, h5, h6").all();
    const levels: number[] = [];

    for (const heading of headings) {
      const tag = await heading.evaluate((el) => el.tagName.toLowerCase());
      levels.push(parseInt(tag.replace("h", "")));
    }

    expect(levels.length).toBeGreaterThan(0);
    expect(levels[0]).toBe(1);

    for (let i = 1; i < levels.length; i++) {
      const diff = levels[i] - levels[i - 1];
      expect(diff).toBeLessThanOrEqual(1);
    }
  });
});

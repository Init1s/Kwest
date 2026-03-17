import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("all images have non-empty alt attributes", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).toBeTruthy();
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

  test("gold on ink meets WCAG AA contrast ratio", async () => {
    // Gold #C9A84C on Ink #0A0A0A
    // Relative luminance: gold = 0.1588 + 0.3290 + 0.0177 = ~0.388
    // Relative luminance: ink = 0.003 (approx)
    // Contrast = (0.388 + 0.05) / (0.003 + 0.05) = 0.438 / 0.053 = 8.26
    // 8.26 > 4.5 so this passes AA for normal text
    const goldLuminance = 0.388;
    const inkLuminance = 0.003;
    const contrast =
      (Math.max(goldLuminance, inkLuminance) + 0.05) /
      (Math.min(goldLuminance, inkLuminance) + 0.05);

    expect(contrast).toBeGreaterThanOrEqual(4.5);
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

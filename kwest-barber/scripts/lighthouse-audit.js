/**
 * Standalone Lighthouse audit runner.
 * Usage: npm run test:lighthouse
 *
 * Audits key routes and prints a score table.
 * Exits with code 1 if any Performance score is below 90.
 */

const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const BASE_URL = process.env.AUDIT_URL || "http://localhost:3000";

const routes = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "Booking", path: "/#booking" },
];

async function audit(url) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox"],
  });

  const result = await lighthouse(url, {
    port: chrome.port,
    output: "json",
    onlyCategories: ["performance", "accessibility", "seo", "best-practices"],
  });

  await chrome.kill();

  const scores = {};
  for (const [key, category] of Object.entries(result.lhr.categories)) {
    scores[key] = Math.round(category.score * 100);
  }
  return scores;
}

async function main() {
  let failed = false;

  console.log("\n  Lighthouse Audit Results");
  console.log("  " + "=".repeat(60));

  for (const route of routes) {
    const url = `${BASE_URL}${route.path}`;
    console.log(`\n  Auditing: ${route.name} (${url})`);

    try {
      const scores = await audit(url);

      console.log(
        `  Performance:    ${scores.performance}`
      );
      console.log(
        `  Accessibility:  ${scores.accessibility}`
      );
      console.log(
        `  SEO:            ${scores.seo}`
      );
      console.log(
        `  Best Practices: ${scores["best-practices"]}`
      );

      if (scores.performance < 90) {
        console.log(
          `  !! Performance below 90 for ${route.name}`
        );
        failed = true;
      }
    } catch (err) {
      console.error(`  Error auditing ${route.name}: ${err.message}`);
      failed = true;
    }
  }

  console.log("\n  " + "=".repeat(60));

  if (failed) {
    console.log("  FAILED: One or more audits did not meet the threshold.\n");
    process.exit(1);
  } else {
    console.log("  PASSED: All audits meet the threshold.\n");
  }
}

main();

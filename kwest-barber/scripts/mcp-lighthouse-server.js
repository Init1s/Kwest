/**
 * Minimal MCP-compatible Node.js server exposing a `run_lighthouse_audit` tool.
 * Called by Claude Code via MCP to audit any page of the site during development or CI.
 */

const http = require("http");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

const TOOL_DEFINITION = {
  name: "run_lighthouse_audit",
  description: "Run a Lighthouse audit on a given URL and return scores.",
  inputSchema: {
    type: "object",
    properties: {
      url: { type: "string", description: "The URL to audit" },
      categories: {
        type: "array",
        items: { type: "string" },
        description:
          'Categories to audit. Options: performance, accessibility, seo, best-practices. Defaults to all.',
      },
    },
    required: ["url"],
  },
};

async function runAudit(url, categories) {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox"],
  });

  const cats = categories || [
    "performance",
    "accessibility",
    "seo",
    "best-practices",
  ];

  const result = await lighthouse(url, {
    port: chrome.port,
    output: "json",
    onlyCategories: cats,
  });

  await chrome.kill();

  const scores = {};
  for (const [key, category] of Object.entries(result.lhr.categories)) {
    scores[key] = Math.round(category.score * 100);
  }

  return scores;
}

const server = http.createServer(async (req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", async () => {
      try {
        const request = JSON.parse(body);

        if (request.method === "tools/list") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ tools: [TOOL_DEFINITION] }));
          return;
        }

        if (request.method === "tools/call") {
          const { url, categories } = request.params?.arguments || {};
          const scores = await runAudit(url, categories);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              content: [{ type: "text", text: JSON.stringify(scores, null, 2) }],
            })
          );
          return;
        }

        res.writeHead(404);
        res.end(JSON.stringify({ error: "Unknown method" }));
      } catch (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else {
    res.writeHead(200);
    res.end("Lighthouse MCP Server");
  }
});

const PORT = process.env.MCP_PORT || 3100;
server.listen(PORT, () => {
  console.log(`Lighthouse MCP server running on port ${PORT}`);
});

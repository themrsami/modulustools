import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const selectors = [
  ".guide-grid",
  ".guide-card",
  ".card-availability",
  ".resource-page",
  ".resource-heading",
  ".article-layout",
  ".article-sidebar",
  ".guide-content",
  ".breadcrumbs",
  ".guide-grid-single",
  ".store-link",
  ".about-grid",
  ".wordpress-feature",
  ".wordpress-product-hero",
  ".plugin-privacy-callout",
];
const staticRoot = path.join(root, ".next/static");
const cssFiles = readdirSync(staticRoot, { recursive: true }).filter((file) =>
  file.endsWith(".css"),
);
assert.ok(cssFiles.length, "Production build emitted no CSS");
const css = cssFiles
  .map((file) => readFileSync(path.join(staticRoot, file), "utf8"))
  .join("\n");
for (const selector of selectors) {
  assert.ok(css.includes(selector), `Production CSS is missing ${selector}`);
}
console.log(
  "PASS: production CSS contains required guide, article, product, and about styles. Run test:guides to verify they apply in the browser.",
);

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const routes = [
  ["index", [".guide-grid", ".guide-card", ".card-availability"]],
  [
    "guides",
    [".resource-page", ".resource-heading", ".guide-grid", ".guide-card"],
  ],
  [
    "guides/stop-video-autoplay-chrome",
    [".article-layout", ".article-sidebar", ".guide-content", ".breadcrumbs"],
  ],
  ["extensions/autoplaystopper", [".guide-grid-single", ".store-link"]],
  ["about", [".about-grid", ".resource-heading"]],
];

for (const [route, selectors] of routes) {
  const html = readFileSync(
    path.join(root, ".next/server/app", route + ".html"),
    "utf8",
  );
  const hrefs = [
    ...html.matchAll(/<link\b[^>]*href="([^\"]+\.css(?:\?[^\"]*)?)"[^>]*>/g),
  ]
    .filter(([tag]) => /rel="stylesheet"/.test(tag))
    .map(([, href]) => href.split("?")[0]);
  assert.ok(hrefs.length, `No linked CSS in ${route}`);
  const css = [...new Set(hrefs)]
    .map((href) => {
      assert.ok(
        href.startsWith("/_next/static/"),
        `Unexpected stylesheet: ${href}`,
      );
      return readFileSync(
        path.join(root, ".next", href.slice("/_next/".length)),
        "utf8",
      );
    })
    .join("\n");
  for (const selector of selectors) {
    assert.ok(
      css.includes(selector),
      `Missing ${selector} in stylesheets linked by ${route}`,
    );
  }
}
console.log(
  "PASS: required guide, article, product, and about styles exist in the CSS actually linked by the built pages.",
);

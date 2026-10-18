import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const base = process.env.MODULUS_TEST_URL || "http://localhost:3110";
const output = path.resolve(".qa/guide-layout");
const slugs = [
  "preview-images-on-hover-chrome",
  "stop-video-autoplay-chrome",
  "open-copy-multiple-links-chrome",
];

async function cardLayout(page, columns) {
  const metrics = await page.locator(".guide-grid").evaluate((grid) => {
    const card = grid.querySelector(".guide-card");
    const styles = getComputedStyle(grid);
    const cardStyles = getComputedStyle(card);
    return {
      display: styles.display,
      columns: styles.gridTemplateColumns.split(" ").length,
      padding: parseFloat(cardStyles.paddingTop),
      border: parseFloat(cardStyles.borderTopWidth),
      radius: parseFloat(cardStyles.borderTopLeftRadius),
    };
  });
  assert.equal(
    metrics.display,
    "grid",
    "Guide cards must use the designed grid",
  );
  assert.equal(metrics.columns, columns, "Responsive guide column count");
  assert.ok(
    metrics.padding >= 20 && metrics.border >= 1 && metrics.radius >= 12,
    "Guide cards need padding, border, and rounded corners",
  );
}

(async () => {
  mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.PLAYWRIGHT_CHANNEL
      ? { channel: process.env.PLAYWRIGHT_CHANNEL }
      : {}),
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  try {
    for (const width of [1440, 1024, 768, 390]) {
      const columns = width > 1050 ? 3 : width > 760 ? 2 : 1;
      await page.setViewportSize({ width, height: 1000 });
      for (const route of [
        "/",
        "/guides",
        "/extensions/autoplaystopper",
        ...slugs.map((slug) => "/guides/" + slug),
      ]) {
        const response = await page.goto(base + route);
        assert.equal(response.status(), 200, route);
        await page.evaluate(() => document.fonts.ready);
        if (route === "/" || route === "/guides")
          await cardLayout(page, columns);
        if (route === "/extensions/autoplaystopper") {
          await cardLayout(page, 1);
          const span = await page
            .locator(".guide-card")
            .evaluate(
              (card) =>
                card.getBoundingClientRect().width /
                card.parentElement.getBoundingClientRect().width,
            );
          assert.ok(
            span > 0.98,
            "Single guide should fill the section, not leave empty columns",
          );
        }
        if (route.startsWith("/guides/")) {
          const metrics = await page
            .locator(".article-layout")
            .evaluate((layout) => {
              const sidebar = layout.querySelector(".article-sidebar");
              const article = layout.querySelector(".guide-content");
              return {
                display: getComputedStyle(layout).display,
                columns:
                  getComputedStyle(layout).gridTemplateColumns.split(" ")
                    .length,
                position: getComputedStyle(sidebar).position,
                heading: parseFloat(
                  getComputedStyle(document.querySelector("main h1")).fontSize,
                ),
                articleWidth: article.getBoundingClientRect().width,
                sectionGap: parseFloat(
                  getComputedStyle(article.querySelector("section"))
                    .marginBottom,
                ),
              };
            });
          assert.equal(metrics.display, "grid", "Article layout styles loaded");
          assert.equal(
            metrics.columns,
            width > 760 ? 2 : 1,
            "Responsive sidebar columns",
          );
          assert.equal(
            metrics.position,
            width > 760 ? "sticky" : "static",
            "Sidebar behavior",
          );
          assert.ok(
            metrics.heading >= 32 &&
              metrics.articleWidth <= 741 &&
              metrics.sectionGap >= 24,
            "Readable heading, line length, and section spacing",
          );
          const firstAnchor = page.locator(".article-sidebar nav a").first();
          await firstAnchor.click();
          assert.ok(
            page.url().endsWith("#step-1"),
            "Guide contents navigation",
          );
        }
        assert.ok(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `No overflow at ${width}: ${route}`,
        );
        if (width === 1440 || width === 390) {
          const name =
            route === "/" ? "home" : route.replaceAll("/", "-").slice(1);
          await page.screenshot({
            path: path.join(output, `${width}-${name}.png`),
            fullPage: true,
          });
        }
      }
      await page.goto(base + "/");
      await page.locator(".guide-card h3 a").first().click();
      await page.locator(".article-layout").waitFor();
      assert.equal(
        await page
          .locator(".article-layout")
          .evaluate((element) => getComputedStyle(element).display),
        "grid",
        "Client navigation retains article styles",
      );
      console.log(`PASS: guide surfaces and navigation at ${width}px`);
    }
    assert.deepEqual(errors, [], "No browser exceptions");
    console.log(
      "PASS: home guides, handbook, single product guide, all three articles, responsive computed styles, and client navigation.",
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

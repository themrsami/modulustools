import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";
import { chromium } from "playwright";

const base = process.env.MODULUS_TEST_URL || "http://localhost:3110";
const canonical = "https://modulustools.com";
const downalbumStore =
  "https://chromewebstore.google.com/detail/downalbum/lokcefdcipipcemdpcndendbdjbmacpk";
const wordpressStore = "https://wordpress.org/plugins/modulustools-seo-suite/";
const pluginPath = "/wordpress/modulustools-seo-suite";
const policyPath = "/privacy/modulustools-seo-suite";
const pluginGuide = "/guides/set-up-modulustools-seo-suite-wordpress";
const albumGuide = "/guides/download-gallery-images-chrome-downalbum";

const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_CHANNEL
    ? { channel: process.env.PLAYWRIGHT_CHANNEL }
    : {}),
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
mkdirSync(".qa/products", { recursive: true });
try {
  const response = await context.request.get(base + "/sitemap.xml");
  assert.equal(response.status(), 200);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (match) => match[1],
  );
  assert.equal(urls.length, 28, "28 content routes in sitemap");
  assert.equal(new Set(urls).size, urls.length, "No duplicate sitemap URLs");
  const routes = urls.map((url) => {
    assert.ok(url.startsWith(canonical));
    return url.slice(canonical.length) || "/";
  });
  const titles = new Set();
  for (const route of routes) {
    const res = await page.goto(base + route);
    assert.equal(res.status(), 200, route);
    assert.equal(await page.locator("main h1").count(), 1, route);
    const title = await page.title();
    assert.ok(title && !titles.has(title), "Unique title: " + route);
    titles.add(title);
    assert.equal(
      await page.locator('link[rel="canonical"]').getAttribute("href"),
      canonical + (route === "/" ? "" : route),
    );
    await page.locator("main img").evaluateAll((images) =>
      Promise.all(
        images.map((image) => {
          image.loading = "eager";
          return image.decode();
        }),
      ),
    );
    const data = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((scripts) =>
        scripts.map((script) => JSON.parse(script.textContent)),
      );
    for (const item of data) {
      assert.equal(item["@context"], "https://schema.org");
      assert.ok(!JSON.stringify(item).includes("aggregateRating"));
    }
    if (
      [
        pluginPath,
        policyPath,
        pluginGuide,
        albumGuide,
        "/extensions/downalbum",
      ].includes(route)
    ) {
      assert.ok(
        await page.locator('meta[property="og:title"]').getAttribute("content"),
      );
      assert.equal(
        await page.locator('meta[property="og:url"]').getAttribute("content"),
        canonical + route,
      );
    }
    if (route === pluginPath) {
      const app = data.find((item) => item["@type"] === "SoftwareApplication");
      assert.equal(app.name, "ModulusTools SEO Suite");
      assert.equal(app.softwareVersion, "1.2.2");
      assert.equal(app.sameAs, wordpressStore);
      assert.equal(app.offers.price, "0");
      assert.ok(
        !(await page.locator("main").innerText()).includes("for Chrome"),
      );
      assert.equal(
        await page.locator(".wordpress-install").first().getAttribute("href"),
        wordpressStore,
      );
      assert.equal(await page.locator(`a[href="${pluginGuide}"]`).count(), 3);
    }
    if (route === policyPath)
      assert.match(
        await page.locator("main").innerText(),
        /initializes IndexNow as enabled/,
      );
    if (route === pluginGuide || route === albumGuide) {
      assert.equal(
        data.find((item) => item["@type"] === "Article").datePublished,
        "2026-10-22T09:00:00+05:00",
      );
      assert.match(
        await page.locator(".article-byline").innerText(),
        /October 22, 2026/,
      );
      assert.equal(
        await page
          .locator(
            `.article-tool a[href="${route === pluginGuide ? wordpressStore : downalbumStore}"]`,
          )
          .count(),
        1,
      );
    }
    if (
      route.startsWith("/guides/") &&
      route !== pluginGuide &&
      route !== albumGuide
    )
      assert.match(
        await page.locator(".article-byline").innerText(),
        /October 18, 2026/,
      );
    const badFragments = await page
      .locator('main a[href^="#"]')
      .evaluateAll((links) =>
        links
          .filter(
            (link) =>
              !document.getElementById(decodeURIComponent(link.hash.slice(1))),
          )
          .map((link) => link.hash),
      );
    assert.deepEqual(badFragments, [], route);
    const internalLinks = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) =>
        links.map((link) => link.getAttribute("href").split(/[?#]/)[0] || "/"),
      );
    for (const target of internalLinks)
      assert.ok(
        routes.includes(target),
        `Unknown internal destination ${target} on ${route}`,
      );
    for (const width of [1440, 1024, 768, 390]) {
      await page.setViewportSize({ width, height: 1000 });
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `Overflow ${route} @ ${width}`,
      );
      if (
        [1440, 390].includes(width) &&
        [pluginPath, pluginGuide, "/"].includes(route)
      )
        await page.screenshot({
          path: `.qa/products/${width}-${route === "/" ? "home" : route.split("/").pop()}.png`,
          fullPage: true,
        });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
  }
  await page.goto(base);
  assert.equal(await page.locator(".extension-card").count(), 7);
  assert.equal(await page.locator(".extension-card .store-link").count(), 4);
  assert.equal(await page.locator(".upcoming-label").count(), 3);
  assert.equal(
    await page.locator(`.extension-card a[href="${downalbumStore}"]`).count(),
    1,
  );
  assert.equal(
    await page.locator("#wordpress .wordpress-install").getAttribute("href"),
    wordpressStore,
  );
  assert.equal(await page.locator(".guide-card").count(), 5);
  await page.getByRole("searchbox").fill("DownAlbum");
  assert.equal(await page.locator(".extension-card").count(), 1);
  assert.equal(
    await page.locator(".extension-card .store-link").getAttribute("href"),
    downalbumStore,
  );
  for (const route of [
    "/guides/not-a-guide",
    "/privacy/not-a-tool",
    "/wordpress/not-a-plugin",
    "/no-such-page",
  ])
    assert.equal((await page.goto(base + route)).status(), 404, route);
  const noJS = await browser.newContext({ javaScriptEnabled: false });
  const staticPage = await noJS.newPage();
  await staticPage.goto(base);
  assert.equal(
    await staticPage.locator(".extension-card .store-link").count(),
    4,
  );
  assert.equal(
    (await staticPage.locator(`a[href="${pluginPath}"]`).count()) >= 1,
    true,
  );
  assert.equal(
    (await staticPage.locator(`a[href="${pluginGuide}"]`).count()) >= 1,
    true,
  );
  await staticPage.goto(base + pluginPath);
  assert.equal(await staticPage.locator(".wordpress-install").count(), 2);
  await noJS.close();
  assert.deepEqual(errors, []);
  console.log(
    "PASS: 28 pages, four Chrome install links, separate WordPress product/install/privacy, five guides, dates, canonical/social metadata, truthful JSON-LD, responsive images/layouts, filtering, crawlable no-JS links, sitemap, and 404s.",
  );
} finally {
  await browser.close();
}

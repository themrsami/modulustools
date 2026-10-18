# Modulus Tools

Small tools. More possibility. A branded home for seven focused Manifest V3 Chrome extensions and custom extension development.

- Website: [modulustools.com](https://modulustools.com)
- Support & privacy contact: [support@modulustools.com](mailto:support@modulustools.com)
- Custom work: [Get a quote](https://modulustools.com/build-an-extension)
- Repository: [themrsami/modulustools](https://github.com/themrsami/modulustools)

## Run locally

Requires Node.js 24 and pnpm 12.8.1. The project uses Next.js 16.4.0, React 19.3.0, TypeScript, and the App Router.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm start
```

No environment variables, database, or email API key are required. Never commit credentials or expose a Resend API key in client code.

## Website & brand

The site uses bespoke components in `components/ui.tsx`, a custom M monogram, Geist typography, and the extension palette: plum `#3A1E2B`, sage `#829E85`, and warm paper `#FAF5F6`. Semantic HTML is retained inside custom-styled components for keyboard and screen-reader support. Brand contact, canonical domain, and extension version (1.1.0) live in `lib/site.ts`.

Routes include the searchable collection, seven extension pages, seven individual privacy pages, the privacy center, website/contact privacy, support, a custom-extension quote brief, an about page, and a handbook with three guides. The site has 24 content routes. Canonicals, page-specific social metadata on product and editorial pages, robots.txt, sitemap.xml, and a branded 404 are included.

## Quotes and support

The custom brief validates name, email, and idea in the browser, then prepares a mailto draft for the visitor to review and send in their email app. It does **not** submit a form to a server, store leads, or show a false sent confirmation. A direct email link is provided as a fallback. Support and quote correspondence are disclosed separately from local extension data in [website privacy](https://modulustools.com/privacy/website).

Publishing an email link does not provision an inbox. Configure incoming mail before relying on the public address. Resend domain verification enables outbound sending; it is not by itself a conventional support inbox. Use one root-domain inbound service (for example Cloudflare Email Routing to a verified inbox), or intentionally configure Resend receiving with its own handling. Do not install competing root MX configurations. Keep outbound Resend credentials server-side if a server email workflow is added later.

## Stable Chrome Web Store privacy URLs

Use the matching URL in each listing, not the privacy index.

| Extension            | Privacy URL                                           |
| -------------------- | ----------------------------------------------------- |
| Imagus               | https://modulustools.com/privacy/imagus               |
| AutoplayStopper      | https://modulustools.com/privacy/autoplaystopper      |
| Linkclump            | https://modulustools.com/privacy/linkclump            |
| DownAlbum            | https://modulustools.com/privacy/downalbum            |
| JSON Viewer          | https://modulustools.com/privacy/json-viewer          |
| Chrome Audio Capture | https://modulustools.com/privacy/chrome-audio-capture |
| Office Copy-Paste    | https://modulustools.com/privacy/office-copy-paste    |

The extension descriptions, permissions, and data-handling disclosures are centralized in `lib/extensions.ts`. They distinguish local storage, clipboard snippets, downloads, bookmark syncing, external media requests, and in-memory audio processing. Verify every policy against the package actually submitted. Update the policy date when practices change.

### Live install links

These three published listing links were supplied by the owner on October 18, 2026. They appear on collection cards, product pages, and matching guides. Account and locale query parameters are intentionally omitted.

| Extension       | Chrome Web Store listing                                                                                             |
| --------------- | -------------------------------------------------------------------------------------------------------------------- |
| Imagus          | [Install Imagus](https://chromewebstore.google.com/detail/imagus/bdlicplmkecjmlefjndmgfgcdnilocio)                   |
| AutoplayStopper | [Install AutoplayStopper](https://chromewebstore.google.com/detail/autoplaystopper/njbikmhihfdomkfimalmkfcnmjcooihp) |
| Linkclump       | [Install Linkclump](https://chromewebstore.google.com/detail/linkclump/leophljmgneicoeeclgggbojeajbdbio)             |

The other four tools are labeled not yet available. Add a `storeUrl` in `lib/extensions.ts` only after its public listing is available. Do not link to a developer-dashboard draft. DownAlbum’s policy now reflects package 1.1.1 without the unnecessary `tabs` permission; the remaining policy versions default to 1.1.0.

## Search visibility & editorial maintenance

- Three original, task-focused guides in `lib/guides.ts` cover Imagus hover previews, AutoplayStopper modes, and Linkclump bulk-link actions. Controls and defaults were checked against the local extension sources. Keep guides aligned with the package actually released; they do not promise universal website compatibility.
- Product and guide pages have descriptive titles, canonical URLs, social metadata, and crawlable links. The home page links to the handbook; guides link to the product, privacy policy, support, and related guides.
- JSON-LD describes the real organization, website, visible breadcrumbs, and guide articles. It contains no invented ratings, reviews, download counts, or guaranteed rich results. Article bylines and dates are visible. There is no FAQ or HowTo rich-result markup.
- The sitemap includes all 24 content routes. Update `lastModified` only when the corresponding page changes meaningfully, not on every build. The existing Search Console domain property can discover the updated sitemap at `/sitemap.xml`; this code change does not claim a new indexing request or guaranteed inclusion.
- Follow Google’s [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and [crawlable link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Search improvements require crawling and evaluation over time; positions and traffic are not guaranteed.
- Useful next editorial additions should answer actual support questions or document tested workflows. Do not bulk-generate near-duplicate keyword pages or buy manipulative backlinks. Review Search Console impressions, queries, and indexed pages before deciding what to write next.

## Vercel & Cloudflare

1. Import this GitHub repository into the intended Vercel project using the Next.js preset, repository root, pnpm, and Node.js 24.
2. Deploy `main`; verify the build is Ready.
3. Add `modulustools.com` as the production domain and redirect `www.modulustools.com` to it.
4. In Cloudflare DNS, use the **exact** records shown by that Vercel project. This deployment uses DNS-only CNAME records for both `@` and `www`, pointing to `e85771ae076f5a93.vercel-dns-017.com`. Cloudflare flattens the root CNAME. Keep nameservers at Cloudflare.
5. Check HTTPS, both domain forms, all seven policy URLs, quote preparation, and support mail routing.

Do not change unrelated projects, DNS records, or email services. Domain propagation and mail verification are separate from a successful website deployment.

### Configured services (October 15, 2026)

- Vercel project: `usama-nazirs-projects/modulustools`, connected to this repository's `main` branch. Both website domains show valid configuration; `www` redirects permanently (308) to the root domain.
- Public HTTPS checks passed on all 19 content routes, all policy pages, sitemap/robots, and unknown-route 404s.
- Incoming support mail: Cloudflare Email Routing is enabled, with an active rule for `support@modulustools.com` to the owner's verified Gmail destination. Catch-all is disabled. No end-to-end test email was sent during setup.
- Outgoing mail: Resend has verified the domain (Tokyo region), including its DKIM, `rsend`, and `send` records. Resend receiving is off so it does not conflict with Cloudflare MX records.
- DMARC starts at `p=none` (non-enforcing). Review legitimate sending sources before choosing a stricter policy.
- Gmail forwarding does not configure “Send mail as.” Replies from the branded address require a separate authenticated sending/mailbox configuration. The website itself sends no email and has no Resend key.
- The selected Vercel team currently uses Hobby. Vercel limits Hobby to personal, non-commercial use; this custom-development offer needs an appropriate commercial plan before business use. No paid upgrade was authorized or made. See [Vercel Hobby policy](https://vercel.com/docs/plans/hobby).

## Verification & maintenance

`pnpm build` includes a CSS artifact check: it inspects generated production stylesheets and fails if guide/article/product styles are missing. This check does not depend on local-versus-Vercel HTML output paths; the browser tests below additionally verify that pages load and apply the styles. Production Turbopack filesystem caching is disabled to avoid reusing stale stylesheet output; development caching remains unchanged.

For layout regression checks, install a Playwright browser once with `pnpm exec playwright install chromium`, start the production server on port 3110, and run `pnpm test:guides`. To use an already installed Chrome, set `PLAYWRIGHT_CHANNEL=chrome`. Set `MODULUS_TEST_URL=https://modulustools.com` to run the same checks against production. These tests verify computed grids, card borders/radii/padding, typography, sidebar placement, content width, client navigation, and overflow at 390, 768, 1024, and 1440 pixels. Screenshots are saved under ignored `.qa/guide-layout/`. They never install an extension, contact a store listing, or send email.

Run lint and a production build before pushing. Verify all 24 content routes at desktop and mobile sizes, artwork loading, all three exact install destinations, unpublished availability labels, guide navigation/structured data, catalog filters/search, no-results reset, copy-policy links, custom quote validation and encoded draft, canonical URLs, robots/sitemap, and unknown-route 404s. No email should be sent by automated UI tests.

The site is independent of Google. Chrome and Chrome Web Store are Google trademarks. The brand copyright covers Modulus Tools’ original website and interface work; it does not replace third-party extension or font licenses.

© 2026 Modulus Tools. All rights reserved.

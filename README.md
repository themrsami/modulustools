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

Routes include the searchable collection, seven extension pages, seven individual privacy pages, the privacy center, website/contact privacy, support, and a custom-extension quote brief. Canonicals, social artwork, robots.txt, sitemap.xml, and a branded 404 are included.

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

Listings remain labeled “launch coming soon” until approved Web Store URLs exist. Add only verified install links; do not present drafts as published extensions.

## Vercel & Cloudflare

1. Import this GitHub repository into the intended Vercel project using the Next.js preset, repository root, pnpm, and Node.js 24.
2. Deploy `main`; verify the build is Ready.
3. Add `modulustools.com` as the production domain and redirect `www.modulustools.com` to it.
4. In Cloudflare DNS, use the **exact** A and CNAME values shown by that Vercel project. Keep nameservers at Cloudflare and website records DNS-only while verifying.
5. Check HTTPS, both domain forms, all seven policy URLs, quote preparation, and support mail routing.

Do not change unrelated projects, DNS records, or email services. Domain propagation and mail verification are separate from a successful website deployment.

## Verification & maintenance

Run lint and a production build before pushing. Verify all 19 content routes at desktop and mobile sizes, artwork loading, catalog filters/search, no-results reset, copy-policy links, custom quote validation and encoded draft, canonical URLs, robots/sitemap, and unknown-route 404s. No email should be sent by automated UI tests.

The site is independent of Google. Chrome and Chrome Web Store are Google trademarks. The brand copyright covers Modulus Tools’ original website and interface work; it does not replace third-party extension or font licenses.

© 2026 Modulus Tools. All rights reserved.

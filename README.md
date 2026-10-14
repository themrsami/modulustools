# Modulus Tools

A Next.js 16.4 App Router website for seven Chrome extensions. Custom React components and custom styles use the Plum & Sage palette: `#3A1E2B`, `#829E85`, and `#FAF5F6`. Semantic HTML is retained inside the components for keyboard and screen-reader access; no stock UI kit or browser-default control styling is used.

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
```

## Deploy on Vercel

Import `themrsami/modulustools`, select the Next.js preset, and keep the root directory at the repository root. No environment variables, database, or external API keys are required. The included pnpm lockfile selects the package manager. Use the permanent production domain for Chrome Web Store privacy links.

## Privacy URLs

Replace `https://YOUR-PRODUCTION-DOMAIN` with the domain assigned by Vercel after deployment.

| Extension                      | Privacy URL                                                   |
| ------------------------------ | ------------------------------------------------------------- |
| Imagus                         | `https://YOUR-PRODUCTION-DOMAIN/privacy/imagus`               |
| AutoplayStopper                | `https://YOUR-PRODUCTION-DOMAIN/privacy/autoplaystopper`      |
| Linkclump                      | `https://YOUR-PRODUCTION-DOMAIN/privacy/linkclump`            |
| DownAlbum                      | `https://YOUR-PRODUCTION-DOMAIN/privacy/downalbum`            |
| JSON Viewer                    | `https://YOUR-PRODUCTION-DOMAIN/privacy/json-viewer`          |
| Chrome Audio Capture           | `https://YOUR-PRODUCTION-DOMAIN/privacy/chrome-audio-capture` |
| Office – Enable Copy and Paste | `https://YOUR-PRODUCTION-DOMAIN/privacy/office-copy-paste`    |

All seven policies and extension detail pages are prerendered. `/privacy` is the policy directory. Unknown extension slugs return a 404. Policy pages include a copy-link control that uses the current page URL, so it works with your deployed domain. Keep production deployment protection disabled so reviewers and users can read the public policies without signing in.

## Content and components

- `lib/extensions.ts`: catalog content, permissions, and extension-specific data handling.
- `components/`: custom navigation, cards, filters, search, buttons, icons, preview, and copy-link control.
- `app/privacy/[slug]/page.tsx`: individual policies.
- `app/extensions/[slug]/page.tsx`: individual extension pages.
- `public/extensions/`: original extension icons and promotional artwork from the submission bundle.

Extension availability is marked as coming soon because the supplied Chrome listing is a draft. Add verified public store links when the extensions are published. Policies distinguish local processing from original media-host requests, include retained album metadata and copied snippets, and describe removal and data controls. The website itself adds no analytics, advertising scripts, or application cookies.

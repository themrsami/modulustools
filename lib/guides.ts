import { findExtension, extensionPath, privacyPath } from "./extensions";
import { seoSuite } from "./wordpress";

export type Guide = {
  slug: string;
  extensionSlug?: string;
  pluginSlug?: string;
  publishedDate?: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; steps?: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "download-gallery-images-chrome-downalbum",
    extensionSlug: "downalbum",
    publishedDate: "2026-10-22",
    title: "How to collect and download gallery images with DownAlbum",
    description:
      "Capture images from the active page, review a DownAlbum gallery, select photos, and understand batch downloads and linked HTML exports.",
    intro:
      "DownAlbum gathers image candidates from the page you choose, then opens a local gallery so you can review them before saving. Use it for galleries you are allowed to download. A collection can only include images the page exposes; it is not a way to bypass private albums, account restrictions, or reuse rights.",
    sections: [
      {
        heading: "Capture the page you are viewing",
        paragraphs: [
          "Install the Modulus Tools version of DownAlbum from its Chrome Web Store listing. Open an ordinary webpage with images, then use the extension popup. Chrome internal pages and the Web Store restrict extension scripts.",
          "Start with an instant capture on a small gallery. If the page has not loaded its images, scroll or let it finish loading before capturing again.",
        ],
        steps: [
          "Open the gallery or album webpage you want to inspect.",
          "Open DownAlbum and choose a minimum image size appropriate to the gallery.",
          "Choose the instant capture action to scan the current page.",
          "Review the images in the extension’s Gallery Viewer before downloading.",
        ],
      },
      {
        heading: "Use auto-scroll for lazy-loaded images",
        paragraphs: [
          "The auto-scroll action moves through a configured number of screenfuls and collects image candidates as it goes. It can help with pages that load images while scrolling, but it does not guarantee a complete album.",
          "A carousel that requires clicking Next, images inside an embedded frame, or a website that needs more loading time may not expose all photos to this scan. Try a smaller collection first and compare the captured images with the source page.",
        ],
      },
      {
        heading: "Review and save your selection",
        paragraphs: [
          "In the Gallery Viewer, deselect photos you do not want, or use Select All and Deselect All to start over. Batch download saves the selected URLs with numbered filenames in a folder based on the source hostname.",
          "High-resolution URL suggestions are best-effort. The gallery may display a fallback preview when a suggested URL fails; that does not prove the upgraded URL will download successfully. Check the resulting files and Chrome’s Downloads page rather than assuming every request succeeded.",
        ],
      },
      {
        heading: "Know what the HTML export contains",
        paragraphs: [
          "The HTML export creates a gallery document containing links to the original image URLs. It does not embed a private offline copy of every image. Opening that document can contact the original hosts and may fail without a network connection or after a source URL expires.",
          "If you need image files on your device, use batch downloads and verify the saved files. Keep the HTML document only if a linked gallery is useful for your workflow.",
        ],
      },
      {
        heading: "Troubleshoot missing images and respect privacy",
        paragraphs: [
          "If no images match, try a lower minimum size, wait for the gallery to load, and capture again on an ordinary webpage. Downloads can also fail because a host requires cookies, blocks direct requests, or no longer serves the URL.",
          "The most recent captured album metadata is stored locally for the Gallery Viewer, while previews and downloads can contact image hosts. Avoid sharing an export if its URLs contain private tokens. Read the DownAlbum privacy policy for local storage and external-request details.",
        ],
      },
    ],
  },
  {
    slug: seoSuite.guideSlug,
    pluginSlug: seoSuite.slug,
    publishedDate: "2026-10-22",
    title: "How to set up ModulusTools SEO Suite in WordPress",
    description:
      "Install the WordPress SEO plugin, review modules and IndexNow, configure metadata, and check sitemaps and structured data on your first page.",
    intro:
      "A useful SEO setup starts with knowing which tool generates each part of your site’s output. This guide follows the ModulusTools SEO Suite 1.2.2 interface and local source. It covers a first configuration and verification workflow, not a promise of better rankings or an endorsement of every automated suggestion.",
    sections: [
      {
        heading: "Install the published plugin and prepare your site",
        paragraphs: [
          "Confirm your installation runs WordPress 6.5 or later and PHP 8.2 or later. Back up your database and site files, and test a change on staging when your site already relies on another SEO plugin.",
          "Find ModulusTools SEO Suite in Plugins → Add New Plugin or follow the WordPress.org link on this page. Confirm the slug is modulustools-seo-suite. Do not run competing metadata, schema, or sitemap generators without deciding which tool owns each output.",
        ],
        steps: [
          "Install and activate the plugin from the WordPress directory.",
          "Open ModulusTools SEO → Modules in the admin sidebar.",
          "Review enabled modules before changing a live post.",
          "Keep a copy of existing SEO settings before importing or replacing metadata.",
        ],
      },
      {
        heading: "Review modules and external connections first",
        paragraphs: [
          "Open General & Robots to review your organization details, title separator, and crawler preferences. Module controls let you choose the features your site needs rather than assuming every module suits every installation.",
          "Important: the inspected 1.2.2 source initializes IndexNow as enabled. If you do not want public post URLs sent to IndexNow when content is published or updated, disable that setting before publishing. Review any configured webhook and AI provider too.",
          "Core SEO controls do not require an external AI account. Local heuristic suggestions run on your server. If you choose a configured WordPress AI integration or custom gateway, a requested draft can send a title, excerpt, focus keyword, and task prompt to that provider. Do not test it with confidential content.",
        ],
      },
      {
        heading: "Configure and inspect one page",
        paragraphs: [
          "Edit a representative post or page and locate the ModulusTools SEO metabox. Write a descriptive SEO title and meta description, review the canonical URL and indexing directive, and choose a schema type that matches the actual content. Avoid changing an established page to noindex accidentally.",
          "For example, a workshop page should describe the workshop clearly instead of repeating the same keyword in every field. Treat length and readability suggestions as editing prompts, not Google rules or a ranking score.",
          "Publish the intended changes, then inspect the rendered page source for the title, description, canonical, robots directives, and social metadata. Check for duplicate tags from a theme or another plugin. Preview the page itself as a visitor, not only in the editor.",
        ],
      },
      {
        heading: "Check sitemaps, redirects, and structured data",
        paragraphs: [
          "Visit /sitemap_index.xml on your own site. If the route does not resolve after activation, open Settings → Permalinks and save once to refresh rewrite rules. Check that listed pages are public and intended for indexing before submitting the sitemap to your verified Search Console property.",
          "Test a redirect on a staging or disposable URL before adding rules to important pages. Confirm its destination and status, and avoid loops. Review the 404 monitor for missing pages rather than redirecting every unknown URL to the homepage.",
          "Inspect the page’s JSON-LD against its visible content. Do not invent product reviews, author credentials, business locations, or prices to fill fields. Valid structured data does not guarantee a search feature.",
        ],
      },
      {
        heading: "Use content directories and measure real outcomes",
        paragraphs: [
          "If you enable the content-directory module, inspect /llms.txt and /llms-full.txt for material you intended to make public. These summaries are not access controls and do not improve Google rankings merely by existing. robots.txt preferences also do not keep private content secure.",
          "Use your verified Search Console property to assess indexing, search queries, impressions, and clicks over time. Crawler logs and the plugin’s checks are diagnostics, not proof of traffic growth. Read the plugin privacy page for stored logs, external requests, retention, and uninstall behavior.",
        ],
      },
    ],
  },
  {
    slug: "preview-images-on-hover-chrome",
    extensionSlug: "imagus",
    title: "How to preview images on hover in Chrome with Imagus",
    description:
      "Set up Imagus hover previews, choose an activation key, adjust the delay, and troubleshoot images that do not enlarge in Chrome.",
    intro:
      "Opening every thumbnail in a new tab breaks the flow of browsing a gallery. Imagus can display a larger image when you hover over an image or a supported media link. This guide covers the controls in the Modulus Tools version, including a quieter setup for pages with lots of images.",
    sections: [
      {
        heading: "Start with a supported webpage",
        paragraphs: [
          "Install Imagus using the Chrome Web Store link on this page. Review Chrome’s permission prompt, then open an ordinary webpage with image thumbnails. Refresh a page that was already open before installation so the extension can run there.",
          "Hover over a thumbnail or a link to an image. A preview depends on the page exposing an image URL that Imagus can resolve; it cannot reveal a higher-resolution file that the website does not provide.",
        ],
        steps: [
          "Open the Imagus popup from Chrome’s extensions menu.",
          "Make sure Enable Imagus is on.",
          "Leave Activation key set to Immediate hover for your first test.",
          "Move the pointer over a thumbnail and wait for the hover delay.",
        ],
      },
      {
        heading: "Make previews less intrusive",
        paragraphs: [
          "The Hover delay field controls how long the pointer must stay over an image before a preview appears. The default is 120 milliseconds. If previews appear while you are simply moving around a page, try 300 milliseconds and adjust from there.",
          "For deliberate previews, change Activation key to Hold Alt, Hold Ctrl / Cmd, or Hold Shift. Then hold that key while hovering. Dim the page changes the background behind a preview, while Mute hover videos keeps video previews quiet.",
        ],
      },
      {
        heading: "Use the preview keyboard controls",
        paragraphs: [
          "While a preview is active, Z changes zoom, R rotates, and H or V flips the media horizontally or vertically. C copies the media URL and O opens it. S requests a download of the previewed media.",
          "For example, when comparing product photos, hover to inspect a detail and use O only for the image you want to keep open. Download only media you have permission to save; previewing an image does not grant reuse rights.",
        ],
      },
      {
        heading: "If an image does not enlarge",
        paragraphs: [
          "Check the enable switch and activation key first. Toggle this website can exclude the current hostname, so check your domain grants if previews work elsewhere but not on one site. Chrome also needs to allow the extension to run on that website.",
          "Some pages use protected media, unusual scripts, or thumbnails with no discoverable larger version. A failed preview on one page is not proof that the extension is disabled. Chrome’s internal pages and the Chrome Web Store restrict extension scripts; test on a normal website instead.",
          "Sieves & domain grants contains advanced URL rules and website exclusions. Change custom rules carefully and keep a copy of a working configuration before editing it.",
        ],
      },
      {
        heading: "Understand the network boundary",
        paragraphs: [
          "Preferences are stored locally in your browser. Fetching a preview or downloading a file can still contact the original media host, which receives ordinary web request information. Read the individual Imagus privacy policy for the difference between local preferences and requests to third-party media sites.",
        ],
      },
    ],
  },
  {
    slug: "stop-video-autoplay-chrome",
    extensionSlug: "autoplaystopper",
    title: "How to control video autoplay in Chrome with AutoplayStopper",
    description:
      "Choose block, mute, strict, or allow modes with AutoplayStopper. Set website exceptions and troubleshoot unexpected playback in Chrome.",
    intro:
      "Unexpected playback can interrupt reading, but a blanket block is not ideal for every website. AutoplayStopper adds controls for unprompted HTML5 video and audio, with a separate choice for the website you are visiting. Here is how to choose a mode without losing the ability to play media intentionally.",
    sections: [
      {
        heading: "Enable blocking and choose a website mode",
        paragraphs: [
          "Install the Modulus Tools version of AutoplayStopper from the link below. Refresh existing webpages after installation. Open its popup while viewing the website you want to configure, rather than from a Chrome settings page.",
        ],
        steps: [
          "Turn on Block unexpected playback.",
          "Check the hostname under This website.",
          "Choose Block autoplay as a starting point.",
          "Reload the page and try its normal play button to check your setup.",
        ],
      },
      {
        heading: "Pick block, mute, strict, or allow",
        paragraphs: [
          "Block autoplay is the standard choice for preventing unprompted playback while retaining user-initiated playback. Mute autoplay is useful when silence matters more than stopping video motion. Strict blocking is a stronger restriction that can interfere with interactive players; use it selectively and test the site’s play controls afterward.",
          "Allow autoplay is the exception for a website where automatic playback is useful. For example, you might block playback on a news site while allowing a music website. A rule applies to the displayed hostname; different subdomains can require separate choices.",
        ],
      },
      {
        heading: "Review saved website exceptions",
        paragraphs: [
          "Choose Manage website rules to review the saved configuration. If behavior differs between two websites, check their individual modes before changing the global switch. Turning the global switch off disables the extension’s blocking rather than creating a new website exception.",
          "After changing a mode, reload the page before judging the result. A player that already started or a page that already initialized its scripts may not behave like a fresh load.",
        ],
      },
      {
        heading: "Troubleshoot playback that still starts",
        paragraphs: [
          "Confirm that the extension is enabled, its Chrome site access permits it to run, and the hostname has not been set to Allow autoplay. Then compare a fresh page load before and after the change.",
          "This tool targets HTML5 media behavior, not every possible source of sound or animated content. Websites can use different playback techniques, embedded frames, and custom controls. It is not a universal ad blocker and does not promise to stop every video on every site.",
          "If strict mode prevents a video you want, return to Block autoplay or allow that particular website. When reporting a problem, include the page URL, mode, Chrome version, and whether playback began before or after a click. Do not send private browsing content or account details.",
        ],
      },
      {
        heading: "Keep your preferences private",
        paragraphs: [
          "Global and per-domain choices are saved in chrome.storage.local. AutoplayStopper does not send your playback preferences to a publisher service. Websites you visit still make their own network requests; blocking media playback is not the same as preventing all media downloads or tracking. The privacy policy explains the tool’s access in more detail.",
        ],
      },
    ],
  },
  {
    slug: "open-copy-multiple-links-chrome",
    extensionSlug: "linkclump",
    title: "How to open or copy multiple links in Chrome with Linkclump",
    description:
      "Use Linkclump to drag-select links, open them in background tabs, copy Markdown links, and configure bulk-link actions in Chrome.",
    intro:
      "Research often means repeating the same action on a group of links. Linkclump lets you draw a rectangle around hyperlinks and apply one action to the selection. Start with a small group: opening dozens of pages at once can consume memory and contact every selected website.",
    sections: [
      {
        heading: "Open a small group of links",
        paragraphs: [
          "Install Linkclump from the Chrome Web Store link below and refresh any webpage that was open before installation. In the popup, make sure Enable link selection is on. The following shortcuts describe the default profiles; a customized profile can use different keys.",
        ],
        steps: [
          "On an ordinary webpage, hold Z.",
          "Press and hold the left mouse button on an empty area near the links.",
          "Drag a rectangle around the links you want and check the highlighted selection.",
          "Release the mouse button to open the selected links in background tabs.",
          "Press Escape during a drag if you want to cancel instead.",
        ],
      },
      {
        heading: "Copy a reading list as Markdown",
        paragraphs: [
          "The second default profile uses Shift plus a right-button drag to copy selected links as Markdown. Hold Shift, drag around the links with the right mouse button, then release. Paste into a Markdown editor to review the output.",
          "For a link named Project notes that points to https://example.com/notes, a Markdown entry looks like [Project notes](https://example.com/notes). This is handy for a research log because it keeps the readable title and destination together. Inspect copied URLs before sharing them: links can contain private identifiers or access tokens.",
        ],
      },
      {
        heading: "Choose another action or copy format",
        paragraphs: [
          "Configure actions & filters opens the profile editor. Profiles support opening tabs, opening a new window, copying links, or bookmarking them. Copy formats include URLs only, URLs with titles, titles only, Markdown, HTML, and JSON.",
          "The current editor uses profile JSON rather than a visual profile wizard. Change only the fields you understand and retain a copy of the working configuration. Useful options include deduplication, reverse order, background tabs, a delay between tab openings, and include/exclude keyword filters.",
          "For example, keeping deduplication enabled helps when a list contains repeated destinations. A delay between new tabs can make a large research selection easier to manage; it does not prevent the destination websites from receiving requests.",
        ],
      },
      {
        heading: "Fix an empty or unexpected selection",
        paragraphs: [
          "Check your active profile’s mouse button and key modifier, then start the drag away from an editable text field. If no rectangle appears, confirm the global switch, website exclusions, and Chrome’s site-access setting. Reload the webpage after installation.",
          "Linkclump selects hyperlinks, not every visible piece of text or a button that happens to run JavaScript. Embedded frames and unusual page layouts can limit what a selection can reach. Chrome’s internal pages and the Chrome Web Store do not allow ordinary extension content scripts.",
        ],
      },
      {
        heading: "Know where the selected links go",
        paragraphs: [
          "Selection profiles are stored locally. Copy actions use your system clipboard, bookmark actions use Chrome bookmarks, and opening links sends normal requests to their destination sites. Bookmark syncing and clipboard retention follow your browser and operating-system settings. See the Linkclump privacy policy before selecting sensitive links.",
        ],
      },
    ],
  },
];

export const guideDate = "2026-10-18";
export function guidePublishedDate(guide: Guide) {
  return guide.publishedDate || guideDate;
}
export function guideFormattedDate(guide: Guide) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(guidePublishedDate(guide) + "T12:00:00Z"));
}
export function guideProduct(guide: Guide) {
  if (guide.pluginSlug === seoSuite.slug)
    return {
      name: seoSuite.name,
      platform: "WordPress",
      path: seoSuite.path,
      privacyPath: seoSuite.privacyPath,
      icon: seoSuite.icon,
      image: "/social-card.png",
      storeUrl: seoSuite.storeUrl,
    };
  const extension = findExtension(guide.extensionSlug || "");
  if (!extension) throw new Error(`Missing product for guide ${guide.slug}`);
  return {
    name: extension.name,
    platform: "Chrome",
    path: extensionPath(extension.slug),
    privacyPath: privacyPath(extension.slug),
    icon: `/extensions/${extension.slug}/icon.png`,
    image: `/extensions/${extension.slug}/preview.png`,
    storeUrl: extension.storeUrl,
  };
}
export const guidePath = (slug: string) => `/guides/${slug}`;
export const findGuide = (slug: string) =>
  guides.find((guide) => guide.slug === slug);

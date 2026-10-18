export type Guide = {
  slug: string;
  extensionSlug: string;
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; paragraphs: string[]; steps?: string[] }[];
};

export const guides: Guide[] = [
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
export const guideDisplayDate = "October 18, 2026";
export const guidePath = (slug: string) => `/guides/${slug}`;
export const findGuide = (slug: string) =>
  guides.find((guide) => guide.slug === slug);

export type Category = "Visual & media" | "Productivity" | "Developer tools";
export type Extension = {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  purpose: string;
  category: Category;
  features: string[];
  processedData: string;
  storedData: string;
  retention: string;
  network: string;
  permissions: Record<string, string>;
};

export const extensions: Extension[] = [
  {
    slug: "imagus",
    name: "Imagus",
    tagline: "A closer look, without the click.",
    category: "Visual & media",
    description:
      "Enlarge thumbnails, preview full-size images, and explore galleries just by hovering. Your next closer look is a mouseover away.",
    purpose:
      "Enlarges image thumbnails and previews full-resolution images, galleries, and videos on mouseover across websites.",
    features: ["Hover previews", "Gallery navigation", "Keyboard controls"],
    processedData:
      "Imagus reads image and link URLs, media captions, and image dimensions from the pages where you use hover previews. Media is displayed in your browser. Page information is not sent to the publisher.",
    storedData:
      "Hover delay, keyboard preferences, custom Sieve rules, and per-domain allow/block settings are saved using chrome.storage.local. Media you explicitly download is saved to your device.",
    retention:
      "Preferences remain until you change them or remove the extension. Downloaded media remains in your chosen download location until you delete it.",
    network:
      "Previewing or downloading an image or video can make a browser request to the original website or media host. Those hosts receive normal request information, such as your IP address, according to browser rules and their own privacy policies. There is no publisher-operated data collection service.",
    permissions: {
      storage:
        "Locally stores hover delay, activation keys, custom Sieve rules, and per-domain Grants.",
      downloads: "Saves full-resolution media when you use the save shortcut.",
      contextMenus:
        "Provides access to the Sieves and Grants configuration page.",
      "Host access — all websites":
        "Allows hover previews and media resolution on websites where you use the extension.",
    },
  },
  {
    slug: "autoplaystopper",
    name: "AutoplayStopper",
    tagline: "Press play on your own terms.",
    category: "Productivity",
    description:
      "Keep unexpected video and audio from interrupting your browsing. Choose your playback preferences for each website.",
    purpose:
      "Prevents unprompted HTML5 video and audio elements from autoplaying on web pages while allowing user-initiated playback clicks.",
    features: ["Autoplay blocking", "Per-site settings", "Playback control"],
    processedData:
      "AutoplayStopper checks media elements on webpages and reads the active tab hostname to apply your site-specific preferences. Blocked-media counts are maintained locally for the current tab.",
    storedData:
      "The global blocking state and per-domain playback exceptions are saved using chrome.storage.local.",
    retention:
      "Preferences remain until changed or the extension is removed. Tab-specific blocked counts are cleared when their tab closes.",
    network:
      "The extension does not transmit playback activity or site preferences to the publisher. The websites you visit retain their own network behavior and privacy policies.",
    permissions: {
      storage:
        "Saves global playback preferences and per-domain exceptions locally.",
      tabs: "Reads the active tab hostname to display and configure its playback mode.",
      contextMenus: "Provides quick access to site playback settings.",
      "Host access — all websites":
        "Runs the media interceptor on webpages to prevent unprompted playback.",
    },
  },
  {
    slug: "linkclump",
    name: "Linkclump",
    tagline: "Many links. One simple gesture.",
    category: "Productivity",
    description:
      "Draw a selection around links, then open, copy, or bookmark them together. Turn repetitive clicks into one fluid action.",
    purpose:
      "Allows users to drag a selection rectangle around multiple hyperlinks on a page to open, copy, or bookmark them in bulk.",
    features: ["Drag to select", "Bulk link actions", "Custom profiles"],
    processedData:
      "Linkclump reads the URLs and titles of links inside your selection. The selected links are used only to perform your configured open, copy, or bookmark action.",
    storedData:
      "Trigger profiles, selection colors, and keyword filters are saved using chrome.storage.local. Copied links go to your system clipboard; saved bookmarks go to your browser bookmarks.",
    retention:
      "Preferences remain until changed or the extension is removed. Bookmarks remain until you delete them and may sync according to your browser settings. Your operating system controls clipboard retention.",
    network:
      "Opening selected links navigates to their destination websites. Those websites handle ordinary browser requests under their own privacy policies. Link selections are not transmitted to the publisher.",
    permissions: {
      storage:
        "Locally saves mouse and keyboard profiles, selection colors, and filters.",
      tabs: "Opens selected links in new tabs or a new window.",
      bookmarks: "Saves selected URLs when you choose the bookmark action.",
      clipboardWrite: "Copies selected URLs and titles in your chosen format.",
      "Host access — all websites":
        "Displays link selection and highlighting on webpages.",
    },
  },
  {
    slug: "downalbum",
    name: "DownAlbum",
    tagline: "Keep the whole collection.",
    category: "Visual & media",
    description:
      "Gather images from albums and galleries, review your selection, and download the photos you want in a batch.",
    purpose:
      "Collects and batch-downloads high-resolution images from photo albums and image galleries on the active webpage.",
    features: ["Album capture", "Gallery review", "Batch downloads"],
    processedData:
      "When you start a capture, DownAlbum scans the active page for image URLs, image dimensions, captions, the page title, and hostname. This metadata is used to create a local gallery for review and export.",
    storedData:
      "The most recently captured album metadata is saved using chrome.storage.local for the Gallery Viewer. Downloads and exported album files are saved to your device.",
    retention:
      "The latest album metadata remains until replaced by a new capture or the extension is removed. Downloaded and exported files remain until you delete them.",
    network:
      "Gallery previews and image downloads request files from their original image hosts. Exported HTML can reference online image URLs, so opening it may also contact those hosts. Image hosts handle normal request information under their own policies. Album metadata is not uploaded to the publisher.",
    permissions: {
      storage: "Passes captured album metadata to the local Gallery Viewer.",
      downloads:
        "Downloads selected images and exported album files to your device.",
      activeTab: "Scans the current tab after you start an album capture.",
      scripting: "Runs the album harvester when you request a capture.",
      tabs: "Opens the Gallery Review and Batch Export page.",
      "Host access — all websites":
        "Resolves image URLs and loads gallery previews from image hosts.",
    },
  },
  {
    slug: "json-viewer",
    name: "JSON Viewer",
    tagline: "Make complex data feel clear.",
    category: "Developer tools",
    description:
      "Turn raw JSON into a readable, highlighted tree. Fold, search, and copy the data you need without losing your place.",
    purpose:
      "Automatically formats and syntax-highlights raw JSON and JSONP responses in the browser with collapsible tree navigation and search.",
    features: ["Readable JSON trees", "Syntax highlighting", "Search & copy"],
    processedData:
      "JSON Viewer reads JSON and JSONP content already loaded in your browser to format it and provide tree navigation and search. JSON can include personal or sensitive information; processing happens within your browser.",
    storedData:
      "Theme and tree-depth preferences are saved using chrome.storage.local. JSON or path expressions are written to your system clipboard only when you use a copy action.",
    retention:
      "Preferences remain until changed or the extension is removed. Your operating system controls clipboard retention. JSON documents are not uploaded to the publisher.",
    network:
      "The extension formats responses from the endpoints you visit. It does not send the JSON content to a formatting service, analytics service, or publisher server.",
    permissions: {
      storage:
        "Locally saves your syntax theme and default tree expansion depth.",
      clipboardWrite:
        "Copies formatted JSON or path expressions when requested.",
      "Host access — all websites":
        "Detects JSON and JSONP responses across domains and development endpoints.",
    },
  },
  {
    slug: "chrome-audio-capture",
    name: "Chrome Audio Capture",
    tagline: "Save the sound of your tab.",
    category: "Visual & media",
    description:
      "Record the audio playing in your current tab and save it to your device. Start and stop the recording when you choose.",
    purpose:
      "Records audio playing inside the active browser tab and saves the captured audio locally as a WAV or WebM file.",
    features: [
      "Tab audio recording",
      "Local audio files",
      "Recording shortcuts",
    ],
    processedData:
      "After you start recording, the extension captures the active tab's audio stream. Audio is processed in a local offscreen document and temporarily held in memory to prepare your recording. The extension does not request microphone access.",
    storedData:
      "Finished recordings are saved to your device through the browser downloads API. The declared storage permission supports recording preferences; the publisher does not receive audio recordings.",
    retention:
      "Recorded chunks are held in memory during the recording and encoding session and replaced when a new session begins. Downloaded recordings remain until you delete them.",
    network:
      "Recording and encoding do not upload audio to a publisher server, transcription service, or analytics platform. The source tab may independently contact its own websites or streaming services.",
    permissions: {
      tabCapture:
        "Captures the active tab's audio after you start a recording.",
      offscreen: "Allows recording to continue while the popup is closed.",
      storage: "Supports locally stored recording preferences.",
      downloads: "Saves the completed recording to your computer.",
    },
  },
  {
    slug: "office-copy-paste",
    name: "Office – Enable Copy and Paste",
    shortName: "Office Copy & Paste",
    tagline: "Your words, free to move.",
    category: "Productivity",
    description:
      "Restore text selection and familiar clipboard actions in web office editors and pages that restrict copying and pasting.",
    purpose:
      "Enables clipboard copy, cut, paste, text selection, and context-menu operations in web office editors and restricted web pages.",
    features: ["Copy, cut & paste", "Text selection", "Local snippet history"],
    processedData:
      "The extension works with text selections and clipboard actions in webpages. When you copy selected text on a page where it runs, it records that selection in local snippet history. Copied text can contain personal or sensitive information.",
    storedData:
      "Per-site settings and recent copied selections are saved using chrome.storage.local. History retains up to 15 distinct snippets, with up to 500 characters per snippet. Clipboard actions also use your system clipboard.",
    retention:
      "Recent snippets remain until replaced by newer selections, cleared using the popup's Clear History action, or removed by uninstalling the extension. Preferences remain until changed or the extension is removed. Your operating system controls clipboard retention.",
    network:
      "Clipboard contents and snippet history are not uploaded to the publisher. A webpage you paste into may process that text under its own privacy policy, just as it would with an ordinary paste action.",
    permissions: {
      storage:
        "Stores per-site preferences and recent clipboard snippets locally.",
      clipboardRead: "Supports paste operations in web office editors.",
      clipboardWrite:
        "Supports copy and cut actions and copying saved snippets.",
      contextMenus: "Provides clipboard actions in the context menu.",
      "Host access — all websites":
        "Restores clipboard, selection, and context-menu operations on webpages.",
    },
  },
];
export const categories = [
  "All extensions",
  "Visual & media",
  "Productivity",
  "Developer tools",
] as const;
export const findExtension = (slug: string) =>
  extensions.find((extension) => extension.slug === slug);
export const privacyPath = (slug: string) => `/privacy/${slug}`;
export const extensionPath = (slug: string) => `/extensions/${slug}`;
export const effectiveDate = "October 15, 2026";

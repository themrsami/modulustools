import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      type: "website",
      siteName: site.name,
      images: [
        {
          url: "/social-card.png",
          width: 1200,
          height: 630,
          alt: "Modulus Tools — Small tools. More possibility.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/social-card.png"],
    },
  };
}

export const productTitles: Record<string, string> = {
  imagus: "Imagus — Hover Image Previews for Chrome",
  autoplaystopper: "AutoplayStopper — Control Video Autoplay in Chrome",
  linkclump: "Linkclump — Open & Copy Multiple Links in Chrome",
  downalbum: "DownAlbum — Album & Gallery Image Downloader",
  "json-viewer": "JSON Viewer — Format & Explore JSON in Chrome",
  "chrome-audio-capture": "Chrome Audio Capture — Record Tab Audio",
  "office-copy-paste": "Office Copy & Paste — Browser Clipboard Tools",
};

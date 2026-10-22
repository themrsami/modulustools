import type { MetadataRoute } from "next";
import { extensions, privacyPath, extensionPath } from "@/lib/extensions";
import { site } from "@/lib/site";
import { guides, guidePath } from "@/lib/guides";
import { seoSuite } from "@/lib/wordpress";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/privacy",
    "/privacy/website",
    "/support",
    "/build-an-extension",
    "/about",
    "/guides",
    seoSuite.path,
    seoSuite.privacyPath,
    ...guides.map((guide) => guidePath(guide.slug)),
    ...extensions.flatMap((extension) => [
      privacyPath(extension.slug),
      extensionPath(extension.slug),
    ]),
  ];
  return paths.map((path) => ({
    url: site.url + path,
    lastModified:
      [
        "",
        "/about",
        "/support",
        "/privacy",
        "/guides",
        "/extensions/downalbum",
        seoSuite.path,
        seoSuite.privacyPath,
      ].includes(path) ||
      guides.some(
        (guide) =>
          guide.publishedDate === "2026-10-22" &&
          path === guidePath(guide.slug),
      )
        ? "2026-10-22"
        : path.startsWith("/extensions/") ||
            path.startsWith("/guides") ||
            path === "/about" ||
            path === "/privacy/downalbum"
          ? "2026-10-18"
          : "2026-10-15",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}

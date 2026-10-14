import type { MetadataRoute } from "next";
import { extensions, privacyPath, extensionPath } from "@/lib/extensions";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/privacy",
    "/privacy/website",
    "/support",
    "/build-an-extension",
    ...extensions.flatMap((extension) => [
      privacyPath(extension.slug),
      extensionPath(extension.slug),
    ]),
  ];
  return paths.map((path) => ({
    url: site.url + path,
    lastModified: "2026-10-15",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.6,
  }));
}

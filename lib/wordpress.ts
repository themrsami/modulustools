export const seoSuite = {
  slug: "modulustools-seo-suite",
  name: "ModulusTools SEO Suite",
  platform: "WordPress",
  version: "1.2.2",
  wordpress: "6.5+",
  php: "8.2+",
  path: "/wordpress/modulustools-seo-suite",
  privacyPath: "/privacy/modulustools-seo-suite",
  guideSlug: "set-up-modulustools-seo-suite-wordpress",
  storeUrl: "https://wordpress.org/plugins/modulustools-seo-suite/",
  supportUrl: "https://wordpress.org/support/plugin/modulustools-seo-suite/",
  icon: "/plugins/modulustools-seo-suite.svg",
  description:
    "Manage WordPress SEO titles, sitemaps, structured data, redirects, and internal links with a modular toolkit in your own dashboard.",
  features: [
    {
      title: "Titles, metadata & social previews",
      text: "Set SEO titles, descriptions, canonicals, robots directives, and social metadata per post. Use the bulk editor to work across published pages.",
    },
    {
      title: "Sitemaps & structured data",
      text: "Generate XML and HTML sitemaps, with news and video modules, plus JSON-LD for relevant site, article, author, and product information.",
    },
    {
      title: "Redirects & 404 monitoring",
      text: "Manage exact-path or regex redirects, review missing URLs, and create rules when published post slugs change.",
    },
    {
      title: "Content & internal link checks",
      text: "Review on-page and readability suggestions, count internal links, and identify published content with no recorded inbound internal links.",
    },
    {
      title: "Crawler rules & content directories",
      text: "Manage robots.txt preferences and publish llms.txt summaries. These are publishing controls, not a promise of AI citations or higher Google rankings.",
    },
    {
      title: "Optional drafting assistance",
      text: "Use local draft suggestions, or a configured WordPress AI integration or custom gateway. Review generated titles and descriptions before publishing.",
    },
  ],
} as const;

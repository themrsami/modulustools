export const site = {
  name: "Modulus Tools",
  url: "https://modulustools.com",
  supportEmail: "support@modulustools.com",
  extensionVersion: "1.1.0",
} as const;

export function contactHref(subject = "Modulus Tools support") {
  return `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}`;
}

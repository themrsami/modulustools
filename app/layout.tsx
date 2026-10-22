import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";
import { site } from "@/lib/site";

export const ensureStatic = "navigation";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "Modulus Tools — Chrome Extensions & WordPress SEO",
    template: "%s | Modulus Tools",
  },
  description:
    "Focused Chrome extensions and ModulusTools SEO Suite for WordPress. Explore published tools, setup guides, privacy policies, and custom extension development.",
  icons: { icon: "/brand.svg", apple: "/apple-icon.png" },
  twitter: { card: "summary_large_image", images: ["/social-card.png"] },
  openGraph: {
    title: "Modulus Tools",
    description:
      "Small tools. More possibility. Chrome extensions and a modular WordPress SEO plugin.",
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
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

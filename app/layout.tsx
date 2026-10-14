import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

export const ensureStatic = "navigation";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Modulus Tools — A more thoughtful browser",
    template: "%s | Modulus Tools",
  },
  description:
    "Seven focused Chrome extensions for images, audio, links, JSON, and everyday work. Explore the Modulus Tools collection and individual privacy policies.",
  icons: { icon: "/brand.svg" },
  openGraph: {
    title: "Modulus Tools",
    description:
      "Small tools. More possibility. Seven focused extensions for your everyday browser.",
    type: "website",
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

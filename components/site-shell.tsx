import Link from "next/link";
import { BrandMark, Icon } from "./ui";
import { site, contactHref } from "@/lib/site";
export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Modulus Tools home">
          <BrandMark />
          <span>
            modulus<span className="brand-light">tools</span>
            <span className="brand-period">.</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#extensions">Extensions</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
          <Link href="/build-an-extension" className="support-link">
            Build with us <Icon name="arrow" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Link href="/" className="brand">
              <BrandMark />
              <span>
                modulus<span className="brand-light">tools</span>.
              </span>
            </Link>
            <p>Small tools. A better everyday browser.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/#extensions">The collection</Link>
            <Link href="/guides">Chrome guides</Link>
            <Link href="/about">About us</Link>
            <Link href="/privacy">Privacy policies</Link>
            <Link href="/build-an-extension">Custom extensions</Link>
            <Link href="/support">Support</Link>
            <Link href="/privacy/website">Website privacy</Link>
            <a href={contactHref()}>{site.supportEmail}</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Modulus Tools. All rights reserved.</span>
          <span>Independent tools. Not affiliated with Google.</span>
        </div>
      </div>
    </footer>
  );
}

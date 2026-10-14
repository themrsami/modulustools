import Link from "next/link";
import { BrandMark, Icon } from "./ui";
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
          <Link href="/privacy">Privacy</Link>
          <Link
            href="https://github.com/themrsami/modulustools/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="support-link"
          >
            Get in touch <Icon name="arrow" />
            <span className="sr-only"> (opens in a new tab)</span>
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
            <Link href="/privacy">Privacy policies</Link>
            <Link
              href="https://github.com/themrsami/modulustools/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support<span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Modulus Tools</span>
          <span>Made with purpose. Built for your browser.</span>
        </div>
      </div>
    </footer>
  );
}

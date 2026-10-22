import { pageMetadata } from "@/lib/metadata";
import { StructuredData } from "@/components/structured-data";
import { GuidesSection } from "@/components/guide-cards";
import { site } from "@/lib/site";
import { WordPressFeature } from "@/components/wordpress-feature";
export const metadata = pageMetadata(
  "Chrome Extensions & WordPress SEO Plugin",
  "Explore Imagus, AutoplayStopper, Linkclump, and DownAlbum for Chrome, plus ModulusTools SEO Suite for WordPress. Get official links and practical setup guides.",
  "/",
);
import { Catalog } from "@/components/catalog";
import { BrowserPreview } from "@/components/browser-preview";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
export default function Home() {
  return (
    <main id="main-content">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": site.url + "/#organization",
              name: site.name,
              url: site.url,
              logo: site.url + "/apple-icon.png",
              email: site.supportEmail,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: site.supportEmail,
                url: site.url + "/support",
              },
            },
            {
              "@type": "WebSite",
              "@id": site.url + "/#website",
              name: site.name,
              url: site.url,
              publisher: { "@id": site.url + "/#organization" },
            },
          ],
        }}
      />
      <section className="hero container">
        <div className="hero-copy">
          <Eyebrow>
            <span className="status-dot" /> Thoughtful tools for browsers &
            websites
          </Eyebrow>
          <h1>
            Your workflow.
            <br />
            With <em>more possibility.</em>
          </h1>
          <p className="hero-description">
            Preview images, control autoplay, gather links, and save galleries.
            Explore focused Chrome extensions and a modular SEO toolkit for your
            WordPress site.
          </p>
          <div className="hero-actions">
            <ActionLink href="#extensions">
              Explore the collection <Icon name="arrow" />
            </ActionLink>
            <ActionLink href="#wordpress" variant="text">
              Explore WordPress SEO <Icon name="arrow" />
            </ActionLink>
          </div>
          <div className="hero-note">
            <Icon name="chrome" /> Seven Chrome extensions <span /> WordPress
            SEO
          </div>
        </div>
        <BrowserPreview />
      </section>
      <div className="principle-strip">
        <div className="container principles">
          <span>
            <Icon name="spark" /> One tool. One clear purpose.
          </span>
          <span>
            <Icon name="shield" /> Your data stays with you
          </span>
          <span>
            <Icon name="sliders" /> Built around your workflow
          </span>
        </div>
      </div>
      <Catalog />
      <WordPressFeature />
      <div className="container">
        <GuidesSection />
      </div>
      <section
        className="build-callout container"
        aria-labelledby="build-title"
      >
        <div>
          <Eyebrow>Modulus Tools studio</Eyebrow>
          <h2 id="build-title">
            Your idea.
            <br />
            <em>Your own extension.</em>
          </h2>
          <p>
            A repetitive task, a missing feature, a better way to work. Let’s
            turn it into a focused Chrome extension for you or your team.
          </p>
          <ActionLink href="/build-an-extension">
            Get a quote <Icon name="arrow" />
          </ActionLink>
        </div>
        <div className="build-blueprint" aria-hidden="true">
          <div className="blueprint-bar">
            <span className="status-dot" /> Your next browser tool
          </div>
          <Icon name="spark" />
          <span className="blueprint-title">Made for your workflow.</span>
          <div className="blueprint-tags">
            <span>Custom interface</span>
            <span>Manifest V3</span>
            <span>Clear permissions</span>
          </div>
        </div>
      </section>
      <section className="privacy-callout container" id="our-approach">
        <div className="privacy-symbol">
          <Icon name="shield" />
        </div>
        <div>
          <Eyebrow>Thoughtful by default</Eyebrow>
          <h2>
            Useful tools.
            <br />
            <em>Respect for your privacy.</em>
          </h2>
        </div>
        <div className="privacy-callout-copy">
          <p>
            Chrome extension data stays in your browser or on your device.
            WordPress plugin settings live on your site, with separate
            disclosures for logs and external integrations. Read the policy for
            your product.
          </p>
          <ActionLink href="/privacy" variant="text">
            Read our privacy policies <Icon name="arrow" />
          </ActionLink>
        </div>
      </section>
    </main>
  );
}

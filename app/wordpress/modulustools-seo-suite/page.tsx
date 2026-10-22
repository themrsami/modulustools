import Image from "next/image";
import Link from "next/link";
import { seoSuite } from "@/lib/wordpress";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import {
  ActionLink,
  Badge,
  Eyebrow,
  Icon,
  WordPressLink,
} from "@/components/ui";
import { BreadcrumbData, StructuredData } from "@/components/structured-data";
import { GuidesSection } from "@/components/guide-cards";

export const metadata = pageMetadata(
  "ModulusTools SEO Suite — WordPress SEO Plugin",
  "A modular WordPress SEO plugin for metadata, XML sitemaps, schema, redirects, and internal links. Explore features, setup, requirements, and privacy.",
  seoSuite.path,
);

export default function SEOSuitePage() {
  return (
    <main
      id="main-content"
      className="container resource-page wordpress-product"
    >
      <BreadcrumbData
        items={[
          { name: "Home", path: "/" },
          { name: "WordPress plugins", path: "/#wordpress" },
          { name: seoSuite.name, path: seoSuite.path },
        ]}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "@id": site.url + seoSuite.path + "#software",
          name: seoSuite.name,
          url: site.url + seoSuite.path,
          sameAs: seoSuite.storeUrl,
          applicationCategory: "BusinessApplication",
          operatingSystem: "WordPress 6.5 or later; PHP 8.2 or later",
          softwareVersion: seoSuite.version,
          description: seoSuite.description,
          image: site.url + seoSuite.icon,
          license: "https://www.gnu.org/licenses/gpl-2.0.html",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            url: seoSuite.storeUrl,
          },
          publisher: {
            "@type": "Organization",
            name: site.name,
            "@id": site.url + "/#organization",
          },
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/#wordpress">WordPress plugins</Link>
        <span aria-hidden="true">/</span>
        <span>SEO Suite</span>
      </nav>
      <header className="wordpress-product-hero">
        <div className="resource-heading">
          <Image src={seoSuite.icon} alt="" width={80} height={80} />
          <Eyebrow>Free WordPress SEO plugin · GPLv2 or later</Eyebrow>
          <h1>{seoSuite.name}</h1>
          <p>{seoSuite.description}</p>
          <div className="detail-actions">
            <WordPressLink />
            <ActionLink
              href={`/guides/${seoSuite.guideSlug}`}
              variant="secondary"
            >
              Read the setup guide <Icon name="arrow" />
            </ActionLink>
          </div>
        </div>
        <aside
          className="wordpress-requirements"
          aria-label="Plugin requirements"
        >
          <Badge>
            <span className="status-dot" /> Published on WordPress.org
          </Badge>
          <h2>A toolkit for your own WordPress site.</h2>
          <dl>
            <div>
              <dt>Plugin version</dt>
              <dd>{seoSuite.version}</dd>
            </div>
            <div>
              <dt>WordPress</dt>
              <dd>{seoSuite.wordpress}</dd>
            </div>
            <div>
              <dt>PHP</dt>
              <dd>{seoSuite.php}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>Free plugin</dd>
            </div>
          </dl>
          <p>
            Requirements checked October 22, 2026. The directory listing has the
            latest release information. External AI providers may have their own
            charges.
          </p>
          <ActionLink href={seoSuite.privacyPath} variant="text">
            Data handling & privacy <Icon name="shield" />
          </ActionLink>
        </aside>
      </header>
      <section
        className="wordpress-capabilities"
        aria-labelledby="capabilities-title"
      >
        <Eyebrow>Practical controls, one dashboard</Eyebrow>
        <h2 id="capabilities-title">
          Work on the essentials.
          <br />
          <em>Enable only what you need.</em>
        </h2>
        <div className="about-grid">
          {seoSuite.features.map((feature, index) => (
            <section key={feature.title}>
              <Eyebrow>{String(index + 1).padStart(2, "0")}</Eyebrow>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </section>
          ))}
        </div>
      </section>
      <section className="wordpress-start" aria-labelledby="install-title">
        <div>
          <Eyebrow>Getting started</Eyebrow>
          <h2 id="install-title">From installation to your first page.</h2>
          <p>
            Back up your site and review existing SEO output before switching
            tools. Multiple plugins generating the same metadata, schema, or
            sitemaps can create conflicting output.
          </p>
        </div>
        <ol>
          <li>
            In WordPress, open Plugins → Add New Plugin and search for
            ModulusTools SEO Suite. Confirm the directory slug is
            modulustools-seo-suite and activate it.
          </li>
          <li>
            Open ModulusTools SEO → Modules. Review the enabled modules and
            settings, including IndexNow and any external AI configuration.
          </li>
          <li>
            Save Settings → Permalinks if sitemap routes need refreshing. Edit a
            post, set its title and description, and inspect the published page.
          </li>
        </ol>
      </section>
      <GuidesSection pluginSlug={seoSuite.slug} />
      <section
        className="wordpress-questions"
        aria-labelledby="questions-title"
      >
        <Eyebrow>Before you install</Eyebrow>
        <h2 id="questions-title">A few useful answers.</h2>
        <div className="about-grid">
          <section>
            <h3>Does it guarantee a higher Google ranking?</h3>
            <p>
              No. Metadata, sitemaps, and structured data help you manage your
              website’s output; they do not guarantee indexing, rich results,
              rankings, or traffic. The plugin’s scores are editorial checks,
              not Google ranking scores. llms.txt is a content directory, not a
              Google ranking signal.
            </p>
          </section>
          <section>
            <h3>Do I need an external AI account?</h3>
            <p>
              Not for core SEO controls or local draft suggestions. A configured
              AI provider or custom gateway can receive content when you request
              a draft. Review its terms and avoid sending confidential material.
            </p>
          </section>
          <section>
            <h3>Where is my site’s SEO data stored?</h3>
            <p>
              Metadata, redirects, missing-URL logs, and crawler logs are stored
              in your WordPress database. IndexNow and configured integrations
              have separate network behavior explained in the privacy page.
            </p>
            <ActionLink href={seoSuite.privacyPath} variant="text">
              Read plugin privacy <Icon name="arrow" />
            </ActionLink>
          </section>
          <section>
            <h3>Where can I ask for help?</h3>
            <p>
              Use the WordPress.org support forum or contact Modulus Tools.
              Include the plugin, WordPress, and PHP versions plus reproduction
              steps. Do not send passwords, keys, or a private database export.
            </p>
            <ActionLink href={seoSuite.supportUrl} variant="text">
              WordPress.org support forum <Icon name="arrow" />
            </ActionLink>
          </section>
        </div>
      </section>
      <div className="resource-bottom">
        <div>
          <h2>Ready to configure your site?</h2>
          <p>
            Start with the published plugin and use the guide to check your
            first page, sitemap, and integration settings.
          </p>
        </div>
        <WordPressLink />
      </div>
    </main>
  );
}

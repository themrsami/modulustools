import Link from "next/link";
import { seoSuite } from "@/lib/wordpress";
import { pageMetadata } from "@/lib/metadata";
import { site, contactHref } from "@/lib/site";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
import { BreadcrumbData } from "@/components/structured-data";

export const metadata = pageMetadata(
  "ModulusTools SEO Suite Privacy & Data Handling",
  "How the WordPress plugin stores SEO metadata and logs, handles IndexNow and optional AI requests, and lets site administrators manage their data.",
  seoSuite.privacyPath,
);

export default function PluginPrivacyPage() {
  return (
    <main id="main-content" className="container resource-page">
      <BreadcrumbData
        items={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
          { name: seoSuite.name, path: seoSuite.privacyPath },
        ]}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/privacy">Privacy center</Link>
        <span aria-hidden="true">/</span>
        <span>{seoSuite.name}</span>
      </nav>
      <header className="resource-heading">
        <Eyebrow>WordPress plugin privacy · Effective October 22, 2026</Eyebrow>
        <h1>
          {seoSuite.name}
          <br />
          <em>Data handling.</em>
        </h1>
        <p>
          This policy describes version {seoSuite.version} of the plugin
          installed on a site you administer. It is separate from our Chrome
          extensions and from this website. Your hosting provider and any
          services you configure have their own practices.
        </p>
      </header>
      <article className="guide-content website-policy">
        <section>
          <h2>1. SEO content and settings</h2>
          <p>
            The plugin reads post/page content and SEO settings to generate
            metadata, sitemaps, structured data, link analysis, and configured
            content directories. It stores SEO metadata, focus keywords,
            canonical URLs, social fields, redirects, and related settings in
            your WordPress database. Organization details and author profile
            fields you configure can appear publicly in rendered pages and
            structured data.
          </p>
          <p>
            Dedicated tables use your database prefix followed by
            modulustools_meta, modulustools_redirects, modulustools_404_logs,
            and modulustools_ai_bots. Settings and integration configuration
            also use WordPress options. This installation data is not
            automatically sent to a Modulus Tools analytics service.
          </p>
        </section>
        <section>
          <h2>2. Missing-page and crawler logs</h2>
          <p>
            When the corresponding modules are enabled, the plugin can log
            missing request URLs, referrers, user-agent information, hit counts,
            timestamps, and a hash derived from an IP address for 404
            monitoring. Crawler records can include the crawler label, requested
            URL, post identifier, user agent, status, and visit time.
          </p>
          <p>
            URLs and referrers can contain sensitive query parameters. Review
            what your site records, restrict administrative access, and apply
            retention and backup practices appropriate to your visitors. Do not
            treat hashed identifiers as a guarantee of anonymity.
          </p>
        </section>
        <section>
          <h2>3. IndexNow and configured webhooks</h2>
          <p>
            When IndexNow is enabled, publishing or updating supported public
            content can send the site host, page URL, and generated verification
            key information to https://api.indexnow.org/indexnow. A configured
            IndexNow webhook can also receive this notification payload.
          </p>
          <p>
            Important: the inspected 1.2.2 source initializes IndexNow as
            enabled for a new installation. Review General &amp; Robots before
            publishing content, and disable it if you do not want these
            notifications. Notifications are not a guarantee of search-engine
            inclusion.
          </p>
          <p>
            The recipient handles requests under its own policies. Review the{" "}
            <a className="inline-link" href="https://www.indexnow.org/terms">
              IndexNow terms
            </a>{" "}
            and any webhook provider before use.
          </p>
        </section>
        <section>
          <h2>4. Drafting and AI integrations</h2>
          <p>
            The local heuristic fallback generates suggestions on your WordPress
            server. If you use a configured WordPress AI integration or custom
            gateway, requested draft generation may send a prompt containing a
            post title, content excerpt, focus keyword, and task instructions to
            that provider. The custom-gateway code uses a content snippet of up
            to approximately 250 words.
          </p>
          <p>
            Provider settings and any supplied API credential are stored on your
            WordPress installation. Do not send credentials or confidential
            content to support. Review the selected provider’s retention,
            billing, and privacy terms; configuring an integration does not make
            that provider part of Modulus Tools.
          </p>
        </section>
        <section>
          <h2>5. Public output and site responsibility</h2>
          <p>
            Sitemaps, structured data, metadata, and enabled llms.txt
            directories are intended to be accessible to visitors and crawlers.
            Review their generated contents before enabling them on a sensitive
            site. robots.txt preferences are crawler instructions, not
            authentication or access control.
          </p>
          <p>
            As the site operator, you decide which modules run and are
            responsible for informing your visitors about your site’s
            processing, hosting, and third-party integrations. The plugin does
            not replace your website privacy notice.
          </p>
        </section>
        <section>
          <h2>6. Retention and removal</h2>
          <p>
            Data remains in your database and backups according to your
            administration and hosting practices. Use available controls to
            delete individual redirects or 404 records and review stored
            settings. Removing the plugin does not erase its data by default.
          </p>
          <p>
            The uninstall routine removes its listed tables, settings, and
            profile metadata only when the administrator has enabled
            delete_data_on_uninstall before uninstalling. Back up anything you
            intend to retain. Hosting backups and third-party copies may persist
            separately.
          </p>
        </section>
        <section>
          <h2>7. Contact and support</h2>
          <p>
            For questions about this plugin, contact{" "}
            <a
              className="inline-link"
              href={contactHref("ModulusTools SEO Suite privacy question")}
            >
              {site.supportEmail}
            </a>{" "}
            or use the{" "}
            <a className="inline-link" href={seoSuite.supportUrl}>
              WordPress.org support forum
            </a>
            . Messages you choose to send are handled separately under our{" "}
            <Link className="inline-link" href="/privacy/website">
              website and contact privacy policy
            </Link>
            .
          </p>
          <ActionLink href={seoSuite.path} variant="text">
            Back to the WordPress plugin <Icon name="arrow" />
          </ActionLink>
        </section>
      </article>
    </main>
  );
}

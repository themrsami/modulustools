import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
import { site, contactHref } from "@/lib/site";
import { seoSuite } from "@/lib/wordpress";
export const metadata = pageMetadata(
  "Chrome Extension & WordPress Plugin Support",
  "Get help with a Modulus Tools Chrome extension, ModulusTools SEO Suite for WordPress, or a custom extension project.",
  "/support",
);
export default function SupportPage() {
  return (
    <main id="main-content" className="container contact-page">
      <div className="page-intro">
        <Eyebrow>Human support</Eyebrow>
        <h1>
          A little help.
          <br />
          <em>A clear next step.</em>
        </h1>
        <p>
          Questions, feedback, or a tool that isn’t working as expected? Talk to
          Modulus Tools.
        </p>
      </div>
      <div className="contact-layout">
        <section className="contact-primary">
          <Eyebrow>Your direct line</Eyebrow>
          <h2>Let’s get it sorted.</h2>
          <a className="contact-email" href={contactHref()}>
            {site.supportEmail}
          </a>
          <p>
            Include the product name and version, your Chrome version or
            WordPress/PHP versions, and what happened. A redacted screenshot and
            steps to reproduce the issue help us investigate.
          </p>
          <ActionLink href={contactHref()}>
            Email support <Icon name="arrow" />
          </ActionLink>
          <p className="field-hint">
            Never send passwords, payment details, API keys, or private
            recordings. Only include information needed to understand your
            request.
          </p>
        </section>
        <div className="contact-options">
          <section>
            <Eyebrow>WordPress plugin</Eyebrow>
            <h2>{seoSuite.name}</h2>
            <p>
              For setup and compatibility questions, start with the guide or use
              the plugin’s public WordPress.org forum. Redact sensitive site
              details before posting.
            </p>
            <ActionLink href={`/guides/${seoSuite.guideSlug}`} variant="text">
              WordPress setup guide <Icon name="arrow" />
            </ActionLink>
            <ActionLink href={seoSuite.supportUrl} variant="text">
              WordPress.org support forum <Icon name="arrow" />
            </ActionLink>
          </section>
          <section>
            <Icon name="shield" />
            <h2>Privacy questions</h2>
            <p>
              Each product has its own data-handling and integration disclosure.
            </p>
            <ActionLink href="/privacy" variant="text">
              Visit the privacy center <Icon name="arrow" />
            </ActionLink>
          </section>
          <section>
            <Icon name="spark" />
            <h2>Something made for you</h2>
            <p>Have a workflow that needs its own Chrome extension?</p>
            <ActionLink href="/build-an-extension" variant="text">
              Get a custom extension quote <Icon name="arrow" />
            </ActionLink>
          </section>
          <p className="field-hint">
            Contact emails are handled separately from local extension data.{" "}
            <Link className="inline-link" href="/privacy/website">
              Website & contact privacy
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

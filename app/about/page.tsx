import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
import { BreadcrumbData } from "@/components/structured-data";
import { site, contactHref } from "@/lib/site";

export const metadata = pageMetadata(
  "About Modulus Tools — Focused Chrome Extensions",
  "Meet Modulus Tools: an independent home for focused Chrome extensions, practical browser guides, transparent privacy policies, and custom extension development.",
  "/about",
);

export default function AboutPage() {
  return (
    <main id="main-content" className="container resource-page">
      <BreadcrumbData
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <span>About</span>
      </nav>
      <header className="resource-heading">
        <Eyebrow>Independent by design</Eyebrow>
        <h1>
          Small tools.
          <br />
          <em>A more thoughtful browser.</em>
        </h1>
        <p>
          Modulus Tools is an independent home for focused Chrome extensions and
          custom browser workflows. Our collection brings together tools for
          images, playback, links, data, and everyday work.
        </p>
      </header>
      <div className="about-grid">
        <section>
          <Eyebrow>01 / Useful first</Eyebrow>
          <h2>One tool. One clear purpose.</h2>
          <p>
            Preview an image without opening another tab, choose when a video
            plays, or gather a group of links in one gesture. Each tool has its
            own feature page, availability status, and support link.
          </p>
          <ActionLink href="/#extensions" variant="text">
            Explore the collection <Icon name="arrow" />
          </ActionLink>
        </section>
        <section>
          <Eyebrow>02 / Clear about access</Eyebrow>
          <h2>Privacy in plain language.</h2>
          <p>
            Our extension policies explain what stays on your device, what
            permissions are used, and when an action contacts another website.
            Local processing does not mean the websites you visit stop making
            network requests.
          </p>
          <ActionLink href="/privacy" variant="text">
            Read individual policies <Icon name="arrow" />
          </ActionLink>
        </section>
        <section>
          <Eyebrow>03 / Practical help</Eyebrow>
          <h2>Guidance that gets specific.</h2>
          <p>
            Our guides describe controls in the Modulus Tools versions, with
            examples and limitations. If a site behaves differently, contact us
            with the extension name and steps to reproduce the problem.
          </p>
          <ActionLink href="/guides" variant="text">
            Browse the handbook <Icon name="arrow" />
          </ActionLink>
        </section>
        <section>
          <Eyebrow>04 / Your own workflow</Eyebrow>
          <h2>Have a tool in mind?</h2>
          <p>
            Tell us about a repetitive task or missing browser feature. The
            quote brief helps you describe a custom Chrome extension; it
            prepares an email for you to review and send.
          </p>
          <ActionLink href="/build-an-extension" variant="text">
            Request an extension quote <Icon name="arrow" />
          </ActionLink>
        </section>
      </div>
      <div className="resource-bottom">
        <div>
          <h2>Talk to Modulus Tools.</h2>
          <p>
            Support, privacy questions, and custom extension enquiries:{" "}
            <a className="inline-link" href={contactHref()}>
              {site.supportEmail}
            </a>
            .
          </p>
          <p>
            Independent of Google. Chrome and Chrome Web Store are Google
            trademarks. Third-party names and licenses remain with their
            respective owners.
          </p>
        </div>
        <ActionLink href="/support" variant="secondary">
          Support & contact <Icon name="arrow" />
        </ActionLink>
      </div>
    </main>
  );
}

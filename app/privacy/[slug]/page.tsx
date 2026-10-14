import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  extensions,
  findExtension,
  effectiveDate,
  extensionPath,
} from "@/lib/extensions";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
import { site, contactHref } from "@/lib/site";
import { CopyPolicyLink } from "@/components/copy-link";
export function generateStaticParams() {
  return extensions.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const extension = findExtension((await params).slug);
  return {
    alternates: extension
      ? { canonical: `/privacy/${extension.slug}` }
      : undefined,
    title: extension ? `${extension.name} Privacy Policy` : "Policy not found",
    description: extension
      ? `Data handling, storage, permissions, and privacy choices for ${extension.name}.`
      : undefined,
  };
}
export default async function PrivacyPolicy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const extension = findExtension((await params).slug);
  if (!extension) notFound();
  return (
    <main id="main-content" className="container policy-page">
      <ActionLink href="/privacy" variant="text">
        <Icon name="back" /> All privacy policies
      </ActionLink>
      <div className="policy-heading">
        <Image
          src={`/extensions/${extension.slug}/icon.png`}
          alt=""
          width={72}
          height={72}
        />
        <div>
          <Eyebrow>Privacy policy</Eyebrow>
          <h1>{extension.name}</h1>
          <p>
            Effective {effectiveDate} · Extension version{" "}
            {site.extensionVersion}
          </p>
        </div>
      </div>
      <div className="policy-layout">
        <aside className="policy-sidebar">
          <Eyebrow>In this policy</Eyebrow>
          <nav aria-label="Policy contents">
            {[
              "Purpose",
              "Data handling",
              "Local storage",
              "Permissions",
              "Third parties",
              "Your choices",
              "Contact",
            ].map((title, i) => (
              <ActionLink key={title} href={`#section-${i + 1}`} variant="text">
                <span>{String(i + 1).padStart(2, "0")}</span>
                {title}
              </ActionLink>
            ))}
          </nav>
          <CopyPolicyLink />
        </aside>
        <article className="policy-content">
          <div className="policy-highlight">
            <Icon name="shield" />
            <p>
              The publisher does not collect, sell, or receive your extension
              data. Processing takes place in your browser or on your device.
            </p>
          </div>
          <section id="section-1">
            <Eyebrow>01 / Purpose</Eyebrow>
            <h2>What this extension does</h2>
            <p>{extension.purpose}</p>
            <p>
              This policy applies to the {extension.name} Manifest V3 extension
              distributed by the Modulus Tools publisher.
            </p>
          </section>
          <section id="section-2">
            <Eyebrow>02 / Data handling</Eyebrow>
            <h2>Information used by the extension</h2>
            <p>{extension.processedData}</p>
            <p>
              The extension has no publisher-operated account system,
              advertising tracker, analytics SDK, or remote analytics endpoint.
              We do not use extension data to profile you or sell it to
              advertisers.
            </p>
          </section>
          <section id="section-3">
            <Eyebrow>03 / Local storage</Eyebrow>
            <h2>What stays on your device</h2>
            <p>{extension.storedData}</p>
            <h3>How long it is kept</h3>
            <p>{extension.retention}</p>
          </section>
          <section id="section-4">
            <Eyebrow>04 / Permissions</Eyebrow>
            <h2>Access, with a purpose</h2>
            <p>
              Browser permissions support the extension’s stated features. Here
              is why each declared permission is needed.
            </p>
            <dl className="permission-list">
              {Object.entries(extension.permissions).map(
                ([permission, reason]) => (
                  <div key={permission}>
                    <dt>{permission}</dt>
                    <dd>{reason}</dd>
                  </div>
                ),
              )}
            </dl>
          </section>
          <section id="section-5">
            <Eyebrow>05 / Third parties</Eyebrow>
            <h2>Network requests and data sharing</h2>
            <p>{extension.network}</p>
            <p>
              We do not sell or share extension user data with advertising, data
              brokerage, or analytics providers. Extension data is used only for
              the disclosed features, in accordance with the Chrome Web Store
              User Data Policy, including its Limited Use requirements.
            </p>
          </section>
          <section id="section-6">
            <Eyebrow>06 / Your choices</Eyebrow>
            <h2>You are in control</h2>
            <p>
              You can change available preferences through the extension’s popup
              or options page and manage site access in Chrome’s extension
              settings. Removing the extension removes its extension storage;
              files you downloaded, bookmarks you created, and your system
              clipboard are managed separately by you and your browser or
              operating system.
            </p>
            <p>
              Local extension storage is not a secure vault. Avoid copying or
              retaining sensitive information on a shared device. If this policy
              changes, we will update the effective date on this page and
              disclose material changes to data practices as required.
            </p>
          </section>
          <section id="section-7">
            <Eyebrow>07 / Contact</Eyebrow>
            <h2>Questions about your privacy?</h2>
            <p>
              Contact Modulus Tools at {site.supportEmail}. If you email us, we
              receive the information you choose to include so we can respond.
              This correspondence is separate from the extension’s local data
              processing. Do not send passwords, private recordings, or
              sensitive browsing content.
            </p>
            <ActionLink
              href={contactHref(`${extension.name} privacy question`)}
              variant="secondary"
            >
              Email the publisher <Icon name="arrow" />
            </ActionLink>
            <p>
              <ActionLink href="/privacy/website" variant="text">
                How we handle contact emails <Icon name="arrow" />
              </ActionLink>
            </p>
          </section>
          <div className="policy-end">
            <span>End of policy · {effectiveDate}</span>
            <ActionLink href={extensionPath(extension.slug)} variant="text">
              Explore {extension.shortName || extension.name}{" "}
              <Icon name="arrow" />
            </ActionLink>
          </div>
        </article>
      </div>
    </main>
  );
}

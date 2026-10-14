import type { Metadata } from "next";
import Image from "next/image";
import { extensions, privacyPath } from "@/lib/extensions";
import { ActionLink, Badge, Eyebrow, Icon } from "@/components/ui";
export const metadata: Metadata = {
  title: "Privacy policies",
  alternates: { canonical: "/privacy" },
  description:
    "Individual privacy policies and permission disclosures for every Modulus Tools extension.",
};
export default function PrivacyIndex() {
  return (
    <main id="main-content" className="container privacy-index">
      <div className="page-intro">
        <Eyebrow>Privacy center</Eyebrow>
        <h1>
          Your tools.
          <br />
          <em>Your data.</em>
        </h1>
        <p>
          Understand what each extension accesses, what stays on your device,
          and how to stay in control.
        </p>
      </div>
      <div className="privacy-summary">
        <Icon name="shield" />
        <div>
          <h2>Local processing. Clear permissions.</h2>
          <p>
            Our extensions process their features in your browser. The publisher
            does not receive your browsing content, copied text, or recordings,
            and the extensions include no advertising trackers or analytics.
          </p>
        </div>
        <Badge>Privacy by design</Badge>
      </div>
      <div className="policy-list">
        {extensions.map((extension, index) => (
          <article key={extension.slug} className="policy-row">
            <span className="policy-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Image
              src={`/extensions/${extension.slug}/icon.png`}
              alt=""
              width={48}
              height={48}
            />
            <div>
              <h2>{extension.name}</h2>
              <p>{extension.category}</p>
            </div>
            <ActionLink href={privacyPath(extension.slug)} variant="text">
              Privacy policy <Icon name="arrow" />
            </ActionLink>
          </article>
        ))}
      </div>
      <div className="website-note">
        <h2>About this website</h2>
        <p>
          This catalog has no advertising scripts, analytics SDKs, or
          application cookies. Its hosting provider processes ordinary
          connection information to deliver webpages and maintain the service.
          These website requests are separate from the data processed by your
          installed extensions.
        </p>
        <p>
          Contact and quote emails are separate from extension data.{" "}
          <ActionLink href="/privacy/website" variant="text">
            Read the website & contact privacy policy <Icon name="arrow" />
          </ActionLink>
        </p>
        <p>
          Questions about a policy?{" "}
          <ActionLink href="/support" variant="text">
            Contact the publisher <Icon name="arrow" />
          </ActionLink>
        </p>
      </div>
    </main>
  );
}

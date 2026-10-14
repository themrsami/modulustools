import type { Metadata } from "next";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
import { site, contactHref } from "@/lib/site";
import { effectiveDate } from "@/lib/extensions";
export const metadata: Metadata = {
  title: "Website & contact privacy policy",
  description:
    "How Modulus Tools handles website visits, support correspondence, and custom extension quote requests.",
  alternates: { canonical: "/privacy/website" },
};
export default function WebsitePrivacy() {
  return (
    <main id="main-content" className="container policy-page">
      <ActionLink href="/privacy" variant="text">
        <Icon name="back" /> Privacy center
      </ActionLink>
      <div className="policy-heading">
        <div>
          <Eyebrow>Modulus Tools privacy policy</Eyebrow>
          <h1>Website & contact</h1>
          <p>Effective {effectiveDate} · modulustools.com</p>
        </div>
      </div>
      <article className="policy-content website-policy">
        <div className="policy-highlight">
          <Icon name="shield" />
          <p>
            Visiting this website or contacting us does not give us access to
            data held by your installed extensions.
          </p>
        </div>
        <section>
          <Eyebrow>01 / Scope</Eyebrow>
          <h2>A website, not a window into your browser</h2>
          <p>
            This policy covers {site.url}, support correspondence, and custom
            extension quote requests. Each extension has a separate policy in
            our privacy center. Modulus Tools is the publisher and the contact
            for this website.
          </p>
        </section>
        <section>
          <Eyebrow>02 / Website visits</Eyebrow>
          <h2>What happens when you visit</h2>
          <p>
            Our application does not include advertising trackers, analytics
            SDKs, user accounts, or application cookies. Vercel hosts the
            website and processes ordinary connection information, such as IP
            address, requested URL, timestamps, and browser information, to
            deliver pages, secure the service, and diagnose failures. Network
            providers and your browser may also process requests under their own
            policies.
          </p>
          <p>
            Fonts, extension artwork, and brand assets are delivered as website
            assets. We do not receive clipboard contents, browsing history,
            album selections, or audio recordings from installed extensions
            through this website.
          </p>
        </section>
        <section>
          <Eyebrow>03 / Project briefs</Eyebrow>
          <h2>You decide what to send</h2>
          <p>
            The quote brief runs in your browser. It holds your name, email
            address, idea, and optional timeline and budget in page memory while
            you edit. It does not upload or persist them to a database or
            browser storage. Preparing the brief generates an email link; it
            does not send a message. Your email app handles the draft, and you
            decide whether to send it.
          </p>
        </section>
        <section>
          <Eyebrow>04 / Correspondence</Eyebrow>
          <h2>Support and quote emails</h2>
          <p>
            If you send email to {site.supportEmail}, we receive your address,
            message, and attachments you choose to include. We use them to
            respond, investigate problems, discuss a project, and maintain the
            correspondence needed for those purposes. Email and delivery
            providers process messages to route, store, and deliver them. These
            providers may process information outside your country.
          </p>
          <p>
            We do not sell your correspondence or use it for advertising
            profiles. Avoid including passwords, API keys, financial details, or
            sensitive browsing content. Do not send information about others
            unless you are authorized to share it.
          </p>
        </section>
        <section>
          <Eyebrow>05 / Retention & security</Eyebrow>
          <h2>Only for the purpose it serves</h2>
          <p>
            We retain correspondence for as long as reasonably needed to handle
            the request, maintain an ongoing project relationship, resolve
            disputes, or meet legal obligations. Provider logs follow the
            hosting or email provider’s retention settings. We limit access to
            correspondence, but no internet transmission or email service can be
            guaranteed completely secure.
          </p>
        </section>
        <section>
          <Eyebrow>06 / Choices</Eyebrow>
          <h2>Ask, correct, or delete</h2>
          <p>
            You can contact us to ask about, correct, or request deletion of
            personal information you provided. We may need to verify the request
            and retain information where legally required. Rights and applicable
            requirements depend on your location. Closing or reloading the quote
            page clears its in-memory brief.
          </p>
        </section>
        <section>
          <Eyebrow>07 / Contact & changes</Eyebrow>
          <h2>A direct point of contact</h2>
          <p>
            For privacy questions or requests, email {site.supportEmail}. If our
            practices change, we will update this page and its effective date
            and provide additional notice where required.
          </p>
          <ActionLink
            href={contactHref("Website privacy question")}
            variant="secondary"
          >
            Email Modulus Tools <Icon name="arrow" />
          </ActionLink>
        </section>
      </article>
    </main>
  );
}

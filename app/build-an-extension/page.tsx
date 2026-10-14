import type { Metadata } from "next";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
import { QuoteBrief } from "@/components/quote-brief";
export const metadata: Metadata = {
  title: "Get a quote for your own Chrome extension",
  description:
    "Turn your workflow into a custom Chrome extension. Share your idea with Modulus Tools and request a project quote.",
  alternates: { canonical: "/build-an-extension" },
};
export default function BuildPage() {
  return (
    <main id="main-content" className="container service-page">
      <ActionLink href="/" variant="text">
        <Icon name="back" /> Back to Modulus Tools
      </ActionLink>
      <div className="service-layout">
        <div className="service-copy">
          <Eyebrow>Modulus Tools studio</Eyebrow>
          <h1>
            A browser tool.
            <br />
            <em>Built around you.</em>
          </h1>
          <p className="service-lead">
            Have an idea for a Chrome extension? Let’s make it useful,
            intuitive, and unmistakably yours.
          </p>
          <div className="service-features">
            <div>
              <Icon name="sliders" />
              <div>
                <h2>Your workflow, simplified</h2>
                <p>
                  Tools for repetitive tasks, focused utilities, and team
                  workflows.
                </p>
              </div>
            </div>
            <div>
              <Icon name="spark" />
              <div>
                <h2>A considered interface</h2>
                <p>
                  Custom components, thoughtful typography, and your brand from
                  the first click.
                </p>
              </div>
            </div>
            <div>
              <Icon name="shield" />
              <div>
                <h2>Built with clear boundaries</h2>
                <p>
                  Manifest V3, purposeful permissions, and data handling
                  explained in plain language.
                </p>
              </div>
            </div>
          </div>
          <div className="service-process">
            <Eyebrow>What happens next</Eyebrow>
            <p>
              Share your idea → discuss the scope → receive a tailored quote.
            </p>
            <p>
              Pricing and delivery depend on the agreed requirements. A quote
              request is not a purchase. Chrome Web Store approval is decided by
              Google.
            </p>
          </div>
        </div>
        <QuoteBrief />
      </div>
    </main>
  );
}

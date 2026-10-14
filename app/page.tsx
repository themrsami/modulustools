import { Catalog } from "@/components/catalog";
import { BrowserPreview } from "@/components/browser-preview";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
export default function Home() {
  return (
    <main id="main-content">
      <section className="hero container">
        <div className="hero-copy">
          <Eyebrow>
            <span className="status-dot" /> A little less friction. A lot more
            flow.
          </Eyebrow>
          <h1>
            Your browser.
            <br />
            With <em>more possibility.</em>
          </h1>
          <p className="hero-description">
            Small, thoughtful extensions for the things you do every day.
            Explore, create, and work your way.
          </p>
          <div className="hero-actions">
            <ActionLink href="#extensions">
              Explore the collection <Icon name="arrow" />
            </ActionLink>
            <ActionLink href="/privacy" variant="text">
              Our approach to privacy <Icon name="arrow" />
            </ActionLink>
          </div>
          <div className="hero-note">
            <Icon name="chrome" /> Made for Chrome <span /> Seven focused tools
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
            Settings and extension data stay in your browser or on your device.
            No advertising trackers or extension analytics. Clear permissions,
            explained in plain language.
          </p>
          <ActionLink href="/privacy" variant="text">
            Read our privacy policies <Icon name="arrow" />
          </ActionLink>
        </div>
      </section>
    </main>
  );
}

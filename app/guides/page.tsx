import { pageMetadata } from "@/lib/metadata";
import { GuideCards } from "@/components/guide-cards";
import { ActionLink, Eyebrow, Icon } from "@/components/ui";
import { BreadcrumbData } from "@/components/structured-data";

export const metadata = pageMetadata(
  "Chrome Extension Guides — Setup & Troubleshooting",
  "Practical guides to Imagus hover previews, AutoplayStopper website rules, and opening or copying groups of links with Linkclump.",
  "/guides",
);

export default function GuidesPage() {
  return (
    <main id="main-content" className="container resource-page">
      <BreadcrumbData
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ]}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ActionLink href="/" variant="text">
          Home
        </ActionLink>
        <span aria-hidden="true">/</span>
        <span>Guides</span>
      </nav>
      <header className="resource-heading">
        <Eyebrow>The Modulus Tools handbook</Eyebrow>
        <h1>
          Make Chrome work <em>your way.</em>
        </h1>
        <p>
          Start with a task, not a settings panel. These guides explain the
          controls in our extensions, everyday examples, and what to check when
          a website behaves differently.
        </p>
      </header>
      <GuideCards />
      <div className="resource-bottom">
        <p>
          Need help with a particular page? Tell us the extension, website, and
          steps you tried.
        </p>
        <ActionLink href="/support" variant="secondary">
          Get extension support <Icon name="arrow" />
        </ActionLink>
      </div>
    </main>
  );
}

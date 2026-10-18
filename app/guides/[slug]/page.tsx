import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  findGuide,
  guides,
  guidePath,
  guideDate,
  guideDisplayDate,
} from "@/lib/guides";
import { findExtension, extensionPath, privacyPath } from "@/lib/extensions";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { ActionLink, Eyebrow, Icon, StoreLink } from "@/components/ui";
import { BreadcrumbData, StructuredData } from "@/components/structured-data";

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const guide = findGuide((await params).slug);
  if (!guide) return { title: "Guide not found" };
  const metadata = pageMetadata(
    guide.title,
    guide.description,
    guidePath(guide.slug),
  );
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: guideDate,
      modifiedTime: guideDate,
      authors: [site.name],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const guide = findGuide((await params).slug);
  if (!guide) notFound();
  const extension = findExtension(guide.extensionSlug)!;
  return (
    <main id="main-content" className="container resource-page">
      <BreadcrumbData
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path: guidePath(guide.slug) },
        ]}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          mainEntityOfPage: site.url + guidePath(guide.slug),
          image: site.url + `/extensions/${extension.slug}/preview.png`,
          datePublished: `${guideDate}T09:00:00+05:00`,
          dateModified: `${guideDate}T09:00:00+05:00`,
          author: {
            "@type": "Organization",
            name: site.name,
            url: site.url + "/about",
          },
          publisher: {
            "@type": "Organization",
            "@id": site.url + "/#organization",
            name: site.name,
            url: site.url,
          },
        }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/guides">Guides</Link>
        <span aria-hidden="true">/</span>
        <span>{extension.name}</span>
      </nav>
      <header className="resource-heading article-heading">
        <Eyebrow>{extension.name} · Setup & troubleshooting</Eyebrow>
        <h1>{guide.title}</h1>
        <p>{guide.intro}</p>
        <div className="article-byline">
          By <Link href="/about">Modulus Tools</Link>
          <span aria-hidden="true">·</span>
          <time dateTime={guideDate}>{guideDisplayDate}</time>
        </div>
      </header>
      <div className="article-layout">
        <aside className="article-sidebar">
          <Eyebrow>In this guide</Eyebrow>
          <nav aria-label="Guide contents">
            {guide.sections.map((section, index) => (
              <a key={section.heading} href={`#step-${index + 1}`}>
                {section.heading}
              </a>
            ))}
          </nav>
          <div className="article-tool">
            <strong>{extension.name} for Chrome</strong>
            <p>
              Install the version covered by this guide from its official store
              listing.
            </p>
            {extension.storeUrl && (
              <StoreLink href={extension.storeUrl} name={extension.name} />
            )}
            <ActionLink href={extensionPath(extension.slug)} variant="text">
              Explore the tool <Icon name="arrow" />
            </ActionLink>
            <ActionLink href={privacyPath(extension.slug)} variant="text">
              Privacy policy <Icon name="shield" />
            </ActionLink>
          </div>
        </aside>
        <article className="guide-content">
          {guide.sections.map((section, index) => (
            <section key={section.heading} id={`step-${index + 1}`}>
              <Eyebrow>{String(index + 1).padStart(2, "0")}</Eyebrow>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.steps && (
                <ol>
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              )}
            </section>
          ))}
          <div className="guide-help">
            <h2>Still need a hand?</h2>
            <p>
              This guide describes the Modulus Tools interface. Website
              compatibility and your configured profiles can affect the result.
              For help, share the steps to reproduce the issue, not passwords or
              sensitive page content.
            </p>
            <ActionLink href="/support" variant="secondary">
              Contact support <Icon name="arrow" />
            </ActionLink>
          </div>
        </article>
      </div>
      <section className="related-guides">
        <Eyebrow>Keep exploring</Eyebrow>
        <h2>More ways to simplify your browser.</h2>
        <div>
          {guides
            .filter((item) => item.slug !== guide.slug)
            .map((item) => (
              <ActionLink
                key={item.slug}
                href={guidePath(item.slug)}
                variant="text"
              >
                {item.title}
                <Icon name="arrow" />
              </ActionLink>
            ))}
        </div>
      </section>
    </main>
  );
}

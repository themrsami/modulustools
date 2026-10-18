import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { extensions, findExtension, privacyPath } from "@/lib/extensions";
import { ActionLink, Badge, Eyebrow, Icon, StoreLink } from "@/components/ui";
import { GuidesSection } from "@/components/guide-cards";
import { BreadcrumbData } from "@/components/structured-data";
import { pageMetadata, productTitles } from "@/lib/metadata";
export function generateStaticParams() {
  return extensions.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const extension = findExtension((await params).slug);
  if (!extension) return { title: "Extension not found" };
  return pageMetadata(
    productTitles[extension.slug],
    extension.description,
    `/extensions/${extension.slug}`,
  );
}
export default async function ExtensionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const extension = findExtension((await params).slug);
  if (!extension) notFound();
  return (
    <main id="main-content" className="container extension-page">
      <BreadcrumbData
        items={[
          { name: "Home", path: "/" },
          { name: "Extensions", path: "/#extensions" },
          { name: extension.name, path: `/extensions/${extension.slug}` },
        ]}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ActionLink href="/" variant="text">
          Home
        </ActionLink>
        <span aria-hidden="true">/</span>
        <ActionLink href="/#extensions" variant="text">
          Extensions
        </ActionLink>
        <span aria-hidden="true">/</span>
        <span>{extension.name}</span>
      </nav>
      <ActionLink href="/#extensions" variant="text">
        <Icon name="back" /> Back to the collection
      </ActionLink>
      <div className="extension-detail-layout">
        <div className="extension-detail-copy">
          <Image
            className="detail-icon"
            src={`/extensions/${extension.slug}/icon.png`}
            alt=""
            width={88}
            height={88}
          />
          <Eyebrow>{extension.category}</Eyebrow>
          <h1>{extension.shortName || extension.name}</h1>
          <h2>{extension.tagline}</h2>
          <p>{extension.description}</p>
          <div className="detail-features">
            {extension.features.map((feature) => (
              <span key={feature}>
                <Icon name="check" />
                {feature}
              </span>
            ))}
          </div>
          <Badge>
            <span className="status-dot" />{" "}
            {extension.storeUrl
              ? "Available on Chrome Web Store"
              : "Not yet available on Chrome Web Store"}
          </Badge>
          <div className="detail-actions">
            {extension.storeUrl && (
              <StoreLink href={extension.storeUrl} name={extension.name} />
            )}
            <ActionLink href={privacyPath(extension.slug)} variant="secondary">
              <Icon name="shield" /> Read privacy policy <Icon name="arrow" />
            </ActionLink>
            <ActionLink href="/support" variant="text">
              Get support <Icon name="arrow" />
            </ActionLink>
          </div>
        </div>
        <div className="detail-preview">
          <div className="browser-chrome">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>{extension.name}</span>
          </div>
          <Image
            src={`/extensions/${extension.slug}/preview.png`}
            alt={`${extension.name} promotional artwork illustrating its main feature`}
            width={1280}
            height={800}
            sizes="(max-width: 900px) 90vw, 55vw"
            preload
          />
          <div className="detail-preview-caption">
            A focused addition to your everyday browser.
          </div>
        </div>
      </div>
      <GuidesSection extensionSlug={extension.slug} />
      <div className="detail-privacy-note">
        <Icon name="shield" />
        <div>
          <h3>Clear about what it accesses.</h3>
          <p>
            See this tool’s individual privacy policy for local storage,
            permissions, data handling, and your choices.
          </p>
        </div>
        <ActionLink href={privacyPath(extension.slug)} variant="text">
          Read the policy <Icon name="arrow" />
        </ActionLink>
      </div>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { guides, guidePath } from "@/lib/guides";
import { findExtension } from "@/lib/extensions";
import { ActionLink, Eyebrow, Icon } from "./ui";

export function GuideCards({ extensionSlug }: { extensionSlug?: string }) {
  const selected = extensionSlug
    ? guides.filter((guide) => guide.extensionSlug === extensionSlug)
    : guides;
  return (
    <div className={`guide-grid${extensionSlug ? " guide-grid-single" : ""}`}>
      {selected.map((guide) => {
        const extension = findExtension(guide.extensionSlug)!;
        return (
          <article className="guide-card" key={guide.slug}>
            <div className="guide-card-label">
              <Image
                src={`/extensions/${extension.slug}/icon.png`}
                alt=""
                width={36}
                height={36}
              />
              <Eyebrow>{extension.name} guide</Eyebrow>
            </div>
            <div className="guide-card-copy">
              <h3>
                <Link href={guidePath(guide.slug)}>{guide.title}</Link>
              </h3>
              <p>{guide.description}</p>
            </div>
            <ActionLink href={guidePath(guide.slug)} variant="text">
              Read the guide <Icon name="arrow" />
            </ActionLink>
          </article>
        );
      })}
    </div>
  );
}

export function GuidesSection({ extensionSlug }: { extensionSlug?: string }) {
  if (
    extensionSlug &&
    !guides.some((guide) => guide.extensionSlug === extensionSlug)
  )
    return null;
  return (
    <section className="guides-section" aria-labelledby="guides-heading">
      <div className="section-heading">
        <div>
          <Eyebrow>A little know-how</Eyebrow>
          <h2 id="guides-heading">
            Put your tools <em>to work.</em>
          </h2>
        </div>
        <ActionLink href="/guides" variant="text">
          All Chrome extension guides <Icon name="arrow" />
        </ActionLink>
      </div>
      <GuideCards extensionSlug={extensionSlug} />
    </section>
  );
}

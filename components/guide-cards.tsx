import Link from "next/link";
import Image from "next/image";
import { guides, guidePath, guideProduct } from "@/lib/guides";
import { ActionLink, Eyebrow, Icon } from "./ui";

type GuideFilter = { extensionSlug?: string; pluginSlug?: string };
export function GuideCards({ extensionSlug, pluginSlug }: GuideFilter) {
  const selected = pluginSlug
    ? guides.filter((guide) => guide.pluginSlug === pluginSlug)
    : extensionSlug
      ? guides.filter((guide) => guide.extensionSlug === extensionSlug)
      : guides;
  return (
    <div
      className={`guide-grid${extensionSlug || pluginSlug ? " guide-grid-single" : ""}`}
    >
      {selected.map((guide) => {
        const product = guideProduct(guide);
        return (
          <article className="guide-card" key={guide.slug}>
            <div className="guide-card-label">
              <Image src={product.icon} alt="" width={36} height={36} />
              <Eyebrow>
                {product.platform} · {product.name}
              </Eyebrow>
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

export function GuidesSection({ extensionSlug, pluginSlug }: GuideFilter) {
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
          All product guides <Icon name="arrow" />
        </ActionLink>
      </div>
      <GuideCards extensionSlug={extensionSlug} pluginSlug={pluginSlug} />
    </section>
  );
}

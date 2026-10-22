import Image from "next/image";
import { seoSuite } from "@/lib/wordpress";
import { ActionLink, Badge, Eyebrow, Icon, WordPressLink } from "./ui";

export function WordPressFeature() {
  return (
    <section
      className="wordpress-feature container"
      id="wordpress"
      aria-labelledby="wordpress-title"
    >
      <div className="wordpress-feature-copy">
        <Eyebrow>Beyond the browser · WordPress plugins</Eyebrow>
        <div className="wordpress-product-label">
          <Image src={seoSuite.icon} alt="" width={64} height={64} />
          <Badge>Available on WordPress.org</Badge>
        </div>
        <h2 id="wordpress-title">
          Your site.
          <br />
          <em>A clearer SEO workflow.</em>
        </h2>
        <h3>{seoSuite.name}</h3>
        <p>{seoSuite.description}</p>
        <div className="detail-actions">
          <WordPressLink />
          <ActionLink href={seoSuite.path} variant="text">
            Explore the WordPress SEO plugin <Icon name="arrow" />
          </ActionLink>
        </div>
      </div>
      <div className="wordpress-feature-modules">
        <Eyebrow>One toolkit. Choose your modules.</Eyebrow>
        {seoSuite.features.slice(0, 4).map((feature, index) => (
          <div key={feature.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
        <ActionLink href={`/guides/${seoSuite.guideSlug}`} variant="text">
          Start with the setup guide <Icon name="arrow" />
        </ActionLink>
      </div>
    </section>
  );
}

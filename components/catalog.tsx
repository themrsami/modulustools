"use client";
import Image from "next/image";
import { useState } from "react";
import {
  categories,
  extensions,
  extensionPath,
  privacyPath,
} from "@/lib/extensions";
import {
  ActionLink,
  Badge,
  Button,
  Eyebrow,
  Icon,
  SearchField,
  StoreLink,
} from "./ui";
export function Catalog() {
  const [category, setCategory] = useState<string>("All extensions");
  const [query, setQuery] = useState("");
  const filtered = extensions.filter(
    (extension) =>
      (category === "All extensions" || extension.category === category) &&
      `${extension.name} ${extension.description} ${extension.features.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  return (
    <section className="catalog container" id="extensions">
      <div className="section-heading">
        <div>
          <Eyebrow>The collection</Eyebrow>
          <h2>
            Find your next <em>little advantage.</em>
          </h2>
        </div>
        <p>
          Seven tools. Each with a clear purpose.
          <br />
          Pick the ones that fit your day.
        </p>
      </div>
      <div className="catalog-toolbar">
        <div
          className="filter-group"
          role="group"
          aria-label="Filter extensions by category"
        >
          {categories.map((item) => (
            <Button
              key={item}
              className={`filter-button${category === item ? " is-active" : ""}`}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
              {item === "All extensions" && (
                <span className="filter-count">7</span>
              )}
            </Button>
          ))}
        </div>
        <SearchField
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Find a tool…"
        />
      </div>
      <div className="results-note" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "extension" : "extensions"}
        {category !== "All extensions"
          ? ` · ${category}`
          : " · Designed for everyday browsing"}
      </div>
      <div className="extension-grid">
        {filtered.map((extension) => (
          <article className="extension-card" key={extension.slug}>
            <div className="card-top">
              <Image
                className="extension-icon"
                src={`/extensions/${extension.slug}/icon.png`}
                alt=""
                width={64}
                height={64}
              />
              <Badge muted>{extension.category}</Badge>
            </div>
            <h3>{extension.shortName || extension.name}</h3>
            <p className="card-tagline">{extension.tagline}</p>
            <p className="card-description">{extension.description}</p>
            <div className="feature-tags">
              {extension.features.slice(0, 2).map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
            <div className="card-availability">
              {extension.storeUrl ? (
                <StoreLink href={extension.storeUrl} name={extension.name} />
              ) : (
                <span className="upcoming-label">
                  Not yet available on Chrome Web Store
                </span>
              )}
            </div>
            <div className="card-footer">
              <ActionLink href={extensionPath(extension.slug)} variant="text">
                Explore tool <Icon name="arrow" />
              </ActionLink>
              <ActionLink
                href={privacyPath(extension.slug)}
                variant="text"
                className="privacy-link"
              >
                <Icon name="shield" /> Privacy
              </ActionLink>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <Icon name="search" />
          <h3>No tools found</h3>
          <p>Try a different name or choose another category.</p>
          <Button
            className="reset-button"
            onClick={() => {
              setQuery("");
              setCategory("All extensions");
            }}
          >
            Reset filters <Icon name="arrow" />
          </Button>
        </div>
      )}
      <div className="availability-note">
        <span className="status-dot" />
        <p>
          Imagus, AutoplayStopper, and Linkclump are available on the Chrome Web
          Store. The other four tools are not yet available. Explore their
          features and privacy policies here.
        </p>
      </div>
    </section>
  );
}

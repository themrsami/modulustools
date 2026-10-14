"use client";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent, InputHTMLAttributes, ReactNode } from "react";
import { ActionLink, Button, Icon } from "./ui";
import { contactHref, site } from "@/lib/site";

function BriefField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="brief-field">
      <span className="field-caption">{label}</span>
      {children}
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}
function TextField({
  label,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <BriefField label={label} error={error}>
      <input
        {...props}
        aria-label={label}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? props.id + "-error" : undefined}
      />
      <span id={props.id + "-error"} className="sr-only">
        {error}
      </span>
    </BriefField>
  );
}
type Brief = {
  name: string;
  email: string;
  idea: string;
  timeline: string;
  budget: string;
};
const empty: Brief = {
  name: "",
  email: "",
  idea: "",
  timeline: "",
  budget: "",
};
export function QuoteBrief() {
  const [brief, setBrief] = useState(empty);
  const [errors, setErrors] = useState<Partial<Brief>>({});
  const [emailLink, setEmailLink] = useState("");
  function change(key: keyof Brief, value: string) {
    setBrief((previous) => ({ ...previous, [key]: value }));
    setEmailLink("");
    setErrors((previous) => ({ ...previous, [key]: undefined }));
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Brief> = {};
    if (!brief.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(brief.email.trim()))
      next.email = "Please add a valid email address.";
    if (brief.idea.trim().length < 20)
      next.idea = "Tell us a little more — at least 20 characters.";
    setErrors(next);
    if (Object.keys(next).length) {
      setEmailLink("");
      return;
    }
    const body = [
      "Hello Modulus Tools,",
      "I would like a quote for a custom Chrome extension.",
      "",
      "Name: " + brief.name.trim(),
      "Reply email: " + brief.email.trim(),
      "",
      "What I want to build:",
      brief.idea.trim(),
      "",
      "Preferred timeline: " + (brief.timeline.trim() || "Let’s discuss"),
      "Budget range: " + (brief.budget.trim() || "Let’s discuss"),
      "",
      "Please let me know the scope, estimated cost, and next steps.",
    ].join("\n");
    setEmailLink(
      contactHref("Custom Chrome extension — quote request") +
        "&body=" +
        encodeURIComponent(body),
    );
  }
  return (
    <form className="quote-brief" noValidate onSubmit={prepare}>
      <div className="brief-top">
        <span className="status-dot" />
        <span>Your project brief</span>
        <span>01 / Start here</span>
      </div>
      <div className="brief-fields">
        <div className="brief-row">
          <TextField
            id="brief-name"
            label="Your name"
            value={brief.name}
            onChange={(e) => change("name", e.target.value)}
            autoComplete="name"
            maxLength={80}
            error={errors.name}
          />
          <TextField
            id="brief-email"
            type="email"
            label="Your email"
            value={brief.email}
            onChange={(e) => change("email", e.target.value)}
            autoComplete="email"
            maxLength={120}
            error={errors.email}
          />
        </div>
        <BriefField label="What should your extension do?" error={errors.idea}>
          <textarea
            id="brief-idea"
            aria-label="What should your extension do?"
            aria-invalid={Boolean(errors.idea)}
            aria-describedby="idea-hint idea-error"
            rows={6}
            maxLength={1000}
            value={brief.idea}
            onChange={(e) => change("idea", e.target.value)}
            placeholder="The task you want to simplify, who will use it, and the features you have in mind…"
          />
          <span id="idea-error" className="sr-only">
            {errors.idea}
          </span>
          <span id="idea-hint" className="field-hint">
            No passwords, API keys, or confidential customer data.{" "}
            {brief.idea.length}/1000
          </span>
        </BriefField>
        <div className="brief-row">
          <TextField
            id="brief-timeline"
            label="Timeline (optional)"
            value={brief.timeline}
            onChange={(e) => change("timeline", e.target.value)}
            placeholder="e.g. Within a month"
            maxLength={80}
          />
          <TextField
            id="brief-budget"
            label="Budget range (optional)"
            value={brief.budget}
            onChange={(e) => change("budget", e.target.value)}
            placeholder="e.g. $500–$1,000 or not sure yet"
            maxLength={80}
          />
        </div>
        <p className="field-hint">
          This brief stays in this page’s memory. Preparing it does not send or
          save anything. You review and send it from your own email app.
        </p>
        <Button type="submit" className="action action-primary">
          Prepare quote email <Icon name="arrow" />
        </Button>
        {Object.values(errors).some(Boolean) && (
          <p role="alert" className="field-error">
            Please check the highlighted fields above.
          </p>
        )}
        {emailLink && (
          <div className="brief-ready" role="status">
            <h3>Your email draft is ready.</h3>
            <p>
              Open your email app, review the draft, and send it to{" "}
              {site.supportEmail}. Nothing has been submitted yet.
            </p>
            <ActionLink href={emailLink}>
              Open email to request quote <Icon name="arrow" />
            </ActionLink>
          </div>
        )}
        <p className="field-hint">
          No email app? Write directly to{" "}
          <a
            className="inline-link"
            href={contactHref("Custom Chrome extension — quote request")}
          >
            {site.supportEmail}
          </a>{" "}
          with your idea. Read our{" "}
          <Link className="inline-link" href="/privacy/website">
            contact privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export function Icon({
  name,
  className = "",
}: {
  name:
    | "arrow"
    | "back"
    | "shield"
    | "spark"
    | "sliders"
    | "search"
    | "chrome"
    | "check"
    | "copy";
  className?: string;
}) {
  const paths = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    back: <path d="M19 12H5m6-6-6 6 6 6" />,
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    spark: (
      <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />
    ),
    sliders: (
      <>
        <path d="M4 7h4m4 0h8M4 17h8m4 0h4" />
        <circle cx="10" cy="7" r="2" />
        <circle cx="14" cy="17" r="2" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),
    chrome: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 8.5h8M9 14l-4-7m9 8-4 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
export function BrandMark() {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      className="brand-mark"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="11" fill="currentColor" />
      <path
        d="M9 25V12l9 8 9-8v13"
        stroke="#FAF5F6"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
      <path d="M18 20v7" stroke="#829E85" strokeWidth="2.3" />
    </svg>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}
export function Badge({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <span className={`badge${muted ? " badge-muted" : ""}`}>{children}</span>
  );
}
export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
}) {
  return (
    <Link href={href} className={`action action-${variant} ${className}`}>
      {children}
    </Link>
  );
}
export function Button({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={`custom-button ${className}`} {...props}>
      {children}
    </button>
  );
}
export function SearchField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="search-field">
      <Icon name="search" />
      <span className="sr-only">Search extensions</span>
      <input type="search" {...props} />
    </label>
  );
}

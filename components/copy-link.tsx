"use client";
import { useState } from "react";
import { Button, Icon } from "./ui";
export function CopyPolicyLink() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return (
    <div className="copy-policy">
      <Button className="copy-button" onClick={copy}>
        <Icon name={status === "copied" ? "check" : "copy"} />
        {status === "copied" ? "Link copied" : "Copy policy link"}
      </Button>
      <span role="status" className="copy-status">
        {status === "error"
          ? "Copy the URL from your browser’s address bar."
          : status === "copied"
            ? "Ready to paste into your store listing."
            : ""}
      </span>
    </div>
  );
}

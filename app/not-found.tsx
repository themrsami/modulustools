import { ActionLink, Eyebrow, Icon } from "@/components/ui";
export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <Eyebrow>404 / A wrong turn</Eyebrow>
      <h1>This page wandered off.</h1>
      <p>Our collection and privacy policies are still right here.</p>
      <ActionLink href="/">
        Back to Modulus Tools <Icon name="arrow" />
      </ActionLink>
    </main>
  );
}

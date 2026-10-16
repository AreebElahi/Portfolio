import { ButtonLink } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="container-page section-y">
      <p className="font-mono text-xs tracking-wider text-muted uppercase">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page doesn&apos;t exist.</h1>
      <p className="mt-3 text-muted">The link may be out of date.</p>
      <ButtonLink href="/" className="mt-8">
        Back to the homepage
      </ButtonLink>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { site, spec, stackLayers } from "@/data/site";
import { ButtonLink } from "@/components/ui/primitives";
import { LayerStrip } from "@/components/shared/LayerStrip";

const links = [
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
  { label: site.email, href: `mailto:${site.email}`, external: false },
];

export function Hero() {
  const [before, after] = site.headline.split(site.headlineMark);
  return (
    <section
      aria-labelledby="hero-title"
      className="container-page grid gap-14 pt-12 pb-16 lg:grid-cols-12 lg:gap-x-12 lg:pt-20 lg:pb-24"
    >
      <div className="lg:col-span-7">
        <h1 id="hero-title" className="text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] font-extrabold tracking-[-0.05em]">
          {site.name.split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-[22ch] font-display text-[clamp(1.5rem,2.8vw,2.125rem)] leading-[1.15] font-semibold tracking-[-0.02em]">
          {before}
          <span className="underline decoration-highlight decoration-[0.1em] underline-offset-[0.16em]">
            {site.headlineMark}
          </span>
          {after}
        </p>
        <p className="mt-5 max-w-[54ch] text-muted">{site.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/#projects">
            View projects
            <ArrowRight size={16} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink variant="secondary" href={site.resume} download>
            Download resume
            <Download size={16} aria-hidden="true" />
          </ButtonLink>
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem]">
          {links.map(({ label, href, external }) => (
            <li key={href}>
              <Link
                href={href}
                {...(external && { target: "_blank", rel: "noreferrer" })}
                className="inline-flex items-center gap-1 py-1 font-semibold text-primary underline-offset-4 hover:underline"
              >
                {label}
                {external && <ArrowUpRight size={15} aria-hidden="true" />}
                {external && <span className="sr-only"> (opens in a new tab)</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <aside aria-label="Spec sheet" className="lg:col-span-5 lg:pt-4">
        <p className="label border-t-2 border-ink pt-3">Spec sheet</p>
        <dl className="mt-3">
          {spec.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[minmax(0,8.5rem)_1fr] gap-x-4 border-b border-line py-2.5">
              <dt className="label pt-0.5 text-muted">{label}</dt>
              <dd className="text-[0.9375rem]">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="label mt-8 mb-3">Stack by layer</p>
        <LayerStrip layers={stackLayers} />
      </aside>
    </section>
  );
}

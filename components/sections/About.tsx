import { about, sections } from "@/data/site";
import { SectionMarker } from "@/components/shared/SectionMarker";

export function About() {
  const [lead, ...rest] = about.paragraphs;
  return (
    <section id="about" aria-labelledby="about-title" className="pb-[clamp(3.5rem,7vw,6rem)]">
      <div className="container-page">
        <SectionMarker id="about-title" {...sections.about} size="sm" />
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <p
            data-reveal
            className="font-display text-[clamp(1.625rem,3.4vw,2.75rem)] leading-[1.15] font-semibold tracking-[-0.02em] lg:col-span-10"
          >
            {lead}
          </p>
          <div data-reveal className="grid gap-6 text-muted md:grid-cols-3 lg:col-span-10 lg:col-start-3">
            {rest.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

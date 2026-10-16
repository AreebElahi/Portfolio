import { sections } from "@/data/site";
import { education, experience } from "@/data/resume";
import { SectionMarker } from "@/components/shared/SectionMarker";

const row = "grid gap-x-8 gap-y-1 border-b border-line py-6 sm:grid-cols-[9.5rem_1fr]";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-y-lg border-t border-line bg-surface"
    >
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <SectionMarker id="experience-title" {...sections.experience} />
            <p className="mt-5 max-w-[34ch] text-muted">{sections.experience.intro}</p>
          </div>
        </div>

        <div data-reveal className="lg:col-span-8">
          <ol className="border-t border-ink">
            {experience.map(({ role, org, period, points }) => (
              <li key={role} className={row}>
                <p className="label pt-1.5 text-muted">{period}</p>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.01em]">{role}</h3>
                  <p className="text-muted">{org}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-line-strong">
                    {points.map((point) => (
                      <li key={point} className="max-w-[68ch] pl-1">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="label mt-14 mb-3 text-muted">Education</h3>
          <ol className="border-t border-ink">
            {education.map(({ title, org, period, note }) => (
              <li key={title} className={row}>
                <p className="label pt-1 text-muted">{period}</p>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <h4 className="font-display text-lg font-bold">{title}</h4>
                    <p className="text-muted">{org}</p>
                  </div>
                  {note && <p className="label text-primary">{note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

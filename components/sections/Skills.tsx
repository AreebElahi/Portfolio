import Link from "next/link";
import { sections } from "@/data/site";
import { skills } from "@/data/resume";
import { projects } from "@/data/projects";
import { SectionMarker } from "@/components/shared/SectionMarker";
import { ChipList } from "@/components/ui/primitives";

// A project demonstrates a group when one of its stack tools appears in a skill name ("Stripe" in "Stripe Payment Intents").
const usedIn = (items: string[]) =>
  projects.filter(({ layers }) => layers.some(({ tools }) => tools.some((t) => items.some((i) => i.includes(t)))));

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y border-t border-line">
      <div className="container-page">
        <SectionMarker id="skills-title" {...sections.skills} />
        <p className="mt-5 text-muted">{sections.skills.intro}</p>
        <div data-reveal className="mt-10 grid gap-x-14 lg:grid-cols-2">
          {skills.map(({ group, items }) => (
            <div key={group} className="grid gap-x-6 gap-y-2.5 border-t border-line py-4 sm:grid-cols-[9.5rem_1fr]">
              <h3 className="pt-0.5 text-base font-bold">{group}</h3>
              <div>
                <ChipList items={items} />
                {usedIn(items).length > 0 && (
                  <p className="mt-2.5 text-sm text-muted">
                    <span className="label mr-2">Used in</span>
                    {usedIn(items).map(({ slug, title }, i) => (
                      <span key={slug}>
                        {i > 0 && " · "}
                        <Link
                          href={`/projects/${slug}`}
                          className="font-semibold text-primary underline-offset-4 hover:underline"
                        >
                          {title}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

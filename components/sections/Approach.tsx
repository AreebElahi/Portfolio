import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { approach, sections } from "@/data/site";
import { projects } from "@/data/projects";
import { SectionMarker } from "@/components/shared/SectionMarker";

const titles = Object.fromEntries(projects.map(({ slug, title }) => [slug, title]));

export function Approach() {
  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y-lg">
      <div className="container-page">
        <SectionMarker id="approach-title" {...sections.approach} />
        <p className="mt-5 max-w-[52ch] text-muted">{sections.approach.intro}</p>
        <ol data-reveal className="mt-12 grid gap-y-10 lg:grid-cols-5 lg:gap-x-6">
          {approach.map(({ title, body, project, evidence }, i) => (
            <li
              key={title}
              className="relative flex flex-col border-l lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:gap-y-0 border-line pl-6 lg:border-t-2 lg:border-l-0 lg:border-ink lg:pt-6 lg:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[5px] size-2.5 bg-primary lg:-top-[6px] lg:left-0"
              />
              <p className="label text-primary">Step {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-xl leading-tight font-bold tracking-[-0.015em]">{title}</h3>
              <p className="mt-2 mb-4 text-[0.9375rem] text-muted">{body}</p>
              <div className="mt-auto border-t border-line pt-3 text-[0.9375rem]">
                <p className="label text-muted">In {titles[project]}</p>
                <p className="mt-1.5">{evidence}</p>
                <Link
                  href={`/projects/${project}`}
                  className="mt-2 inline-flex items-center gap-1 py-1 font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Case study<span className="sr-only">: {titles[project]}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

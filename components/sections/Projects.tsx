import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { sections, site } from "@/data/site";
import { SectionMarker } from "@/components/shared/SectionMarker";
import { ProjectLead, ProjectRow } from "@/components/shared/ProjectCard";

export function Projects() {
  const [lead, ...rest] = projects;
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-y-lg border-y border-line bg-surface">
      <div className="container-page">
        <SectionMarker id="projects-title" {...sections.projects} />
        <div className="mt-5 mb-12 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <p className="max-w-[52ch] text-muted">{sections.projects.intro}</p>
          <Link
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 py-1 text-[0.9375rem] font-semibold text-primary underline-offset-4 hover:underline"
          >
            All repositories on GitHub
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>

        <ProjectLead project={lead} />

        <p className="label mt-16 mb-3 text-muted">More projects · select a row for details</p>
        <ul className="border-t border-ink">
          {rest.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

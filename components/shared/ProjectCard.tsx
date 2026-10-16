import Image from "next/image";
import { ArrowUpRight, Lock, Plus } from "lucide-react";
import type { Project } from "@/data/projects";
import { ButtonLink } from "@/components/ui/primitives";
import { GitHubIcon } from "@/components/ui/icons";
import { LayerStrip } from "./LayerStrip";

const external = { target: "_blank", rel: "noreferrer" } as const;
const newTab = <span className="sr-only"> (opens in a new tab)</span>;

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.repo ? (
        <ButtonLink variant="secondary" href={project.repo} {...external}>
          <GitHubIcon size={16} />
          GitHub{newTab}
        </ButtonLink>
      ) : (
        <span className="inline-flex h-11 items-center gap-2 px-1 text-[0.9375rem] text-muted">
          <Lock size={16} aria-hidden="true" />
          Private repo
        </span>
      )}
      {project.live && (
        <ButtonLink variant="secondary" href={project.live} {...external}>
          Live demo
          <ArrowUpRight size={16} aria-hidden="true" />
          {newTab}
        </ButtonLink>
      )}
    </>
  );
}

function Preview({ project, sizes, className = "" }: { project: Project; sizes: string; className?: string }) {
  return (
    <div className={`relative aspect-[16/10] overflow-hidden rounded-[3px] border border-line bg-chip ${className}`}>
      <Image
        src={project.image.src}
        alt={project.image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
      />
    </div>
  );
}

function Details({ project }: { project: Project }) {
  return (
    <>
      <p className="text-muted">{project.summary}</p>
      <p className="mt-4 text-[0.9375rem]">
        <span className="label mr-2 text-muted">My role</span>
        {project.role}
      </p>
      <LayerStrip layers={project.layers} className="mt-6" />
      <div className="mt-6 flex flex-wrap gap-2">
        <ButtonLink href={`/projects/${project.slug}`}>
          Read case study<span className="sr-only">: {project.title}</span>
        </ButtonLink>
        <ProjectLinks project={project} />
      </div>
    </>
  );
}

export function ProjectLead({ project }: { project: Project }) {
  return (
    <article data-reveal className="group grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
      <Preview
        project={project}
        sizes="(min-width: 1024px) 680px, 100vw"
        className="lg:sticky lg:top-24 lg:col-span-7"
      />
      <div className="lg:col-span-5">
        <p className="label text-muted">
          <span className="text-primary">Lead project</span> · {project.kind} · {project.team}
        </p>
        <h3 className="mt-3 text-[clamp(2rem,3.6vw,2.75rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
          {project.title}
        </h3>
        <p className="mt-3 mb-4 font-display text-lg leading-snug font-semibold">{project.tagline}</p>
        <Details project={project} />
      </div>
    </article>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="border-b border-line">
      <details className="group/row">
        <summary className="-mx-3 grid cursor-pointer list-none grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 px-3 py-5 transition-colors hover:bg-paper md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_auto]">
          <span>
            <h3 className="text-[clamp(1.375rem,2.4vw,1.75rem)] leading-tight font-bold tracking-[-0.02em]">
              {project.title}
            </h3>
            <span className="text-[0.9375rem] text-muted">{project.tagline}</span>
          </span>
          <span className="label hidden text-muted md:block">
            {project.kind} · {project.team}
          </span>
          <span className="grid size-11 place-items-center rounded-[3px] border border-ink">
            <Plus size={18} aria-hidden="true" className="transition-transform group-open/row:rotate-45" />
            <span className="sr-only">Show details</span>
          </span>
        </summary>
        <div className="group grid gap-8 pt-2 pb-10 md:grid-cols-12 md:gap-10">
          <Preview project={project} sizes="(min-width: 768px) 420px, 100vw" className="md:col-span-5" />
          <div className="md:col-span-7">
            <p className="label mb-3 text-muted md:hidden">
              {project.kind} · {project.team}
            </p>
            <Details project={project} />
          </div>
        </div>
      </details>
    </li>
  );
}

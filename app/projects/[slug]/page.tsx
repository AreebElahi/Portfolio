import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectLinks } from "@/components/shared/ProjectCard";
import { LayerStrip } from "@/components/shared/LayerStrip";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

const findProject = (slug: string) => projects.find((p) => p.slug === slug);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  const url = `/projects/${project.slug}`;
  const title = `${project.title} case study`;
  // Setting openGraph here replaces the root's, so the shared OG image is re-added explicitly.
  return {
    title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: { title, description: project.summary, url, images: "/opengraph-image" },
    twitter: { card: "summary_large_image", title, description: project.summary, images: "/twitter-image" },
  };
}

const heading = "border-t border-ink pt-3 text-2xl font-bold tracking-[-0.02em]";
const label = "label text-muted";

export default async function CaseStudy({ params }: Props) {
  const project = findProject((await params).slug);
  if (!project) notFound();
  const { title, tagline, summary, kind, team, role, layers, image, caseStudy } = project;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article className="container-page py-12 lg:py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 py-1 text-[0.9375rem] font-semibold text-primary hover:underline"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        All work
      </Link>

      <header className="mt-8 max-w-4xl">
        <p className={label}>
          Case study · {kind} · {team}
        </p>
        <h1 className="mt-3 text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
          {title}
        </h1>
        <p className="mt-5 font-display text-[clamp(1.25rem,2.2vw,1.625rem)] leading-snug font-semibold">{tagline}</p>
        <p className="mt-3 max-w-[65ch] text-muted">{summary}</p>
      </header>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[3px] border border-line bg-chip">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 1200px) 1120px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <dl className="space-y-6 lg:sticky lg:top-24">
            <div>
              <dt className={label}>My role</dt>
              <dd className="mt-1.5 text-[0.9375rem]">{role}</dd>
            </div>
            <div>
              <dt className={label}>Stack by layer</dt>
              <dd className="mt-2">
                <LayerStrip layers={layers} />
              </dd>
            </div>
            <div>
              <dt className={label}>Links</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                <ProjectLinks project={project} />
              </dd>
            </div>
          </dl>
        </aside>

        <div className="max-w-[70ch] space-y-10 lg:col-span-8">
          <section>
            <h2 className={heading}>Problem</h2>
            <p className="mt-3">{caseStudy.problem}</p>
          </section>
          <section>
            <h2 className={heading}>What I built</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-line-strong">
              {caseStudy.built.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className={heading}>Architecture and key decisions</h2>
            <dl className="mt-3 space-y-5">
              {caseStudy.decisions.map((decision) => (
                <div key={decision.title}>
                  <dt className="font-semibold">{decision.title}</dt>
                  <dd className="mt-1 text-muted">{decision.body}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section>
            <h2 className={heading}>What I learned</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-line-strong">
              {caseStudy.learned.map((item) => (
                <li key={item} className="pl-1">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <Link href={`/projects/${next.slug}`} className="group mt-16 grid gap-1 border-t-2 border-ink pt-5 lg:mt-24">
        <span className={label}>Next case study</span>
        <span className="flex items-center gap-3 text-[clamp(2rem,4.5vw,3.25rem)] leading-tight font-extrabold tracking-[-0.035em] group-hover:text-primary">
          {next.title}
          <ArrowRight className="size-[0.7em] transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
        <span className="text-muted">{next.tagline}</span>
      </Link>
    </article>
  );
}

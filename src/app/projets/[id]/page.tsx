import { notFound } from "next/navigation";
import projects from "@/data/projects";
import sideProjects from "@/data/sideProjects";
import Link from "next/link";

const allProjects = [...projects, ...sideProjects];
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import DeviceMockup from "@/components/DeviceMockup";
import CodeBlock from "@/components/CodeBlock";
import type { Metadata } from "next";

type Params = Promise<{ id: string }>;

type PageProps = { params: Params };
type MetadataProps = { params: Params };

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { id } = await params;
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Projet introuvable",
      description: "Ce projet n'existe pas ou a été supprimé.",
      robots: { index: false, follow: false },
    };
  }

  const baseUrl = "https://www.louisrotellini.fr";
  const url = `${baseUrl}/projets/${project.id}`;
  const description =
    project.tagline ?? project.context ?? `Étude de cas du projet ${project.title}.`;
  const ogImage = project.after;
  const ogUrl = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`;

  return {
    title: `${project.title}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} | Louis Rotellini`,
      description,
      url,
      siteName: "Louis Rotellini",
      type: "article",
      images: [{ url: ogUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Louis Rotellini`,
      description,
      images: [ogUrl],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;

  const project = allProjects.find((p) => p.id === id);
  if (!project) return notFound();

  const after = project.after;
  const before = project.before ?? null;
  const hasBeforeAfter = Boolean(before);

  const problems = project.challenges ?? [];
  const actions = project.solutions ?? [];
  const mainSnippet = project.codeSnippets?.[0] ?? null;

  // Suite : 2 autres projets (suivants dans la liste, ou les 2 premiers à défaut)
  const currentIndex = allProjects.findIndex((p) => p.id === id);
  const others = [
    allProjects[(currentIndex + 1) % allProjects.length],
    allProjects[(currentIndex + 2) % allProjects.length],
  ].filter((p) => p && p.id !== id);

  return (
    <article className="pt-[120px] pb-20">
      <Link
        href="/#projets"
        className="inline-flex items-center gap-2 font-mono text-[12px] text-[--muted] hover:text-[--ink] transition-colors mb-9"
      >
        ← Retour aux projets
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[--muted] border-b border-[--rule] pb-3.5 mb-6">
          <span className="text-[--ink] font-medium">{project.client}</span>
          {project.year && <span>· {project.year}</span>}
          {project.status && <span>· {project.status}</span>}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-1 hover:text-[--ink] transition-colors"
            >
              {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
            </a>
          )}
        </div>

        <h1 className="text-[clamp(2rem,6.5vw,64px)] font-medium tracking-[-0.04em] leading-[0.95] m-0 mb-[18px] max-w-[18ch]">
          {project.title}.
        </h1>

        <p className="text-[clamp(1rem,2vw,20px)] leading-[1.4] text-[--muted] max-w-[64ch] m-0">
          {project.tagline ?? project.context}
        </p>

        {!!project.stack?.length && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[11.5px] text-[--muted] border border-[--rule] rounded-full px-2.5 py-1"
              >
                {t.toLowerCase()}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Media principal */}
      <div className="my-12">
        {hasBeforeAfter ? (
          <>
            <div className="hidden lg:block">
              <BeforeAfterSlider
                before={before as string}
                after={after}
                alt={`${project.title} — avant / après`}
              />
            </div>
            <div className="lg:hidden">
              <DeviceMockup type="desktop" src={after} alt={`Après — ${project.title}`} />
            </div>
          </>
        ) : (
          <DeviceMockup type="desktop" src={after} alt={project.title} />
        )}
      </div>

      {/* Challenges / Solutions */}
      {(problems.length > 0 || actions.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-16">
          {problems.length > 0 && (
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] m-0 mb-[18px] font-medium">
                Challenges
              </h2>
              <ol className="list-none p-0 m-0 [counter-reset:li]">
                {problems.map((p, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[28px_1fr] gap-2 py-3.5 border-b border-[--rule] text-[15.5px] leading-[1.5] [counter-increment:li]"
                  >
                    <span className="font-mono text-[11px] text-[--muted] pt-[3px]">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {actions.length > 0 && (
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] m-0 mb-[18px] font-medium">
                Solutions
              </h2>
              <ol className="list-none p-0 m-0">
                {actions.map((a, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[28px_1fr] gap-2 py-3.5 border-b border-[--rule] text-[15.5px] leading-[1.5]"
                  >
                    <span className="font-mono text-[11px] text-[--muted] pt-[3px]">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>
      )}

      {/* Code snippet */}
      {mainSnippet && (
        <div className="mt-16">
          <CodeBlock
            title={mainSnippet.title}
            language={mainSnippet.language as Parameters<typeof CodeBlock>[0]["language"]}
            code={mainSnippet.code}
          />
        </div>
      )}

      {/* Suite — autres projets */}
      {others.length > 0 && (
        <section className="mt-24 pt-16 border-t border-[--rule]">
          <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] border-b border-[--rule] pb-3.5 mb-12">
            <span className="text-[--ink]">→ Suite</span>
            <span>Autres projets</span>
          </div>

          <div className="border-t border-[--rule]">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/projets/${p.id}`}
                className="group grid grid-cols-[auto_1fr_auto_auto] gap-6 py-7 border-b border-[--rule] items-center"
              >
                <span className="font-mono text-[12px] text-[--muted] w-7">→</span>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[--muted]">
                    {p.client}
                    {p.year ? ` · ${p.year}` : ""}
                  </span>
                  <h3 className="text-[clamp(1.125rem,2.4vw,24px)] font-medium tracking-[-0.018em] leading-[1.15] m-0">
                    {p.title}
                  </h3>
                </div>
                <div className="hidden md:flex items-center gap-1.5">
                  {p.stack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-[--muted] border border-[--rule] rounded-full px-[9px] py-[3px]"
                    >
                      {tech.toLowerCase()}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[14px] text-[--muted] w-6 text-right transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[--accent]">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

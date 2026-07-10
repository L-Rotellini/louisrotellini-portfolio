import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import baseProjects from "@/data/projects";
import baseSideProjects from "@/data/sideProjects";
import { getAllProjects, getProject } from "@/data/getProjects";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import DeviceMockup from "@/components/DeviceMockup";
import CodeBlock from "@/components/CodeBlock";
import {
  defaultLocale,
  hreflang,
  isLocale,
  localePrefix,
  localizedHref,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const SITE_URL = "https://www.louisrotellini.fr";

type Params = Promise<{ locale: string; id: string }>;

export function generateStaticParams() {
  const ids = [...baseProjects, ...baseSideProjects].map((p) => p.id);
  return ["fr", "en"].flatMap((locale) => ids.map((id) => ({ locale, id })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: raw, id } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const project = getProject(locale, id);

  if (!project) {
    return {
      title: "404",
      robots: { index: false, follow: false },
    };
  }

  const path = localizedHref(locale, `/projets/${project.id}`);
  const url = `${SITE_URL}${path}`;
  const description = project.tagline ?? project.context ?? project.title;
  const ogImage = project.after;
  const ogUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title: project.title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "fr-FR": `/projets/${project.id}`,
        "en-US": `/en/projets/${project.id}`,
        "x-default": `/projets/${project.id}`,
      },
    },
    openGraph: {
      title: `${project.title} | Louis Rotellini`,
      description,
      url,
      siteName: "Louis Rotellini",
      type: "article",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} · Louis Rotellini`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Louis Rotellini`,
      description,
      images: [ogUrl],
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { locale: raw, id } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const t = dict.projectPage;

  const allProjects = getAllProjects(locale);
  const project = getProject(locale, id);
  if (!project) return notFound();

  const path = localizedHref(locale, `/projets/${project.id}`);
  const url = `${SITE_URL}${path}`;
  const projectImage = project.after.startsWith("http")
    ? project.after
    : `${SITE_URL}${project.after}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: project.title,
        headline: project.title,
        description: project.tagline ?? project.context,
        url,
        image: projectImage,
        inLanguage: hreflang[locale],
        keywords: project.stack,
        creator: {
          "@type": "Person",
          name: "Louis Rotellini",
          url: SITE_URL,
        },
        about: project.client,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.breadcrumbHome,
            item: `${SITE_URL}${localePrefix(locale) || "/"}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t.breadcrumbProjects,
            item: `${SITE_URL}${localizedHref(locale, "/#projets")}`,
          },
          { "@type": "ListItem", position: 3, name: project.title, item: url },
        ],
      },
    ],
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href={localizedHref(locale, "/#projets")}
        className="inline-flex items-center gap-2 font-mono text-[12px] text-[--muted] hover:text-[--ink] transition-colors mb-9"
      >
        {t.back}
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
              {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              <span aria-hidden="true">↗</span>
              <span className="sr-only">{t.newTab}</span>
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
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11.5px] text-[--muted] border border-[--rule] rounded-full px-2.5 py-1"
              >
                {tech.toLowerCase()}
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
                alt={project.title}
              />
            </div>
            <div className="lg:hidden">
              <DeviceMockup type="desktop" src={after} alt={project.title} />
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
                {t.challenges}
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
                {t.solutions}
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
            <span className="text-[--ink]">{t.nextEyebrow}</span>
            <span>{t.otherProjects}</span>
          </div>

          <div className="border-t border-[--rule]">
            {others.map((p) => (
              <Link
                key={p.id}
                href={localizedHref(locale, `/projets/${p.id}`)}
                className="group grid grid-cols-[auto_1fr_auto_auto] gap-6 py-7 border-b border-[--rule] items-center"
              >
                <span aria-hidden="true" className="font-mono text-[12px] text-[--muted] w-7">→</span>
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
                <span aria-hidden="true" className="font-mono text-[14px] text-[--muted] w-6 text-right transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[--accent]">
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

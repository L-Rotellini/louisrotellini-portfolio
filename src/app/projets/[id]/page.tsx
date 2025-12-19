import { notFound } from "next/navigation";
import projects from "@/data/projects";

import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import DeviceMockup from "@/components/DeviceMockup";
import CodeBlock from "@/components/CodeBlock";

type PageProps = {
  params: { id: string };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return notFound();

  // ---- Nouveau modèle media ----
  const after = project.after; // obligatoire
  const before = project.before ?? null; // optionnel
  const mobile = project.mobile ?? null; // optionnel

  const hasBeforeAfter = Boolean(before);
  const hasMobileAside = Boolean(mobile);

  const problems = project.challenges ?? [];
  const actions = project.solutions ?? [];
  const mainSnippet = project.codeSnippets?.[0] ?? null;

  return (
    <main className="pt-24 pb-20 overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="container mx-auto px-6 pb-10 overflow-x-hidden">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 min-w-0">
          <div className="col-span-12 md:col-span-8 min-w-0">
            <p className="text-sm mb-2 text-muted-foreground">
              {project.client}
              {project.url && (
                <>
                  {" · "}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-foreground"
                  >
                    Voir en ligne
                  </a>
                </>
              )}
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">
              {project.tagline ?? project.context}
            </p>

            {!!project.stack?.length && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-[--surface-border] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="col-span-12 md:col-span-4 min-w-0">
            <dl className="rounded-2xl border border-[--surface-border] bg-[--foreground]/[0.02] p-5 min-w-0">
              {[
                { k: "Année", v: project.year },
                { k: "Stack", v: project.stack?.join(" · ") },
                {
                  k: "Type",
                  v: hasBeforeAfter ? "Refonte (avant / après)" : "Réalisation",
                },
                { k: "Rôle", v: "Dev front + UX" },
              ].map((item, i) => (
                <div
                  key={item.k}
                  className={`grid grid-cols-[96px,1fr] gap-4 py-2 min-w-0 ${
                    i !== 0 ? "border-t border-[--surface-border]/70" : ""
                  }`}
                >
                  <dt className="text-sm text-muted-foreground">{item.k}</dt>
                  <dd className="text-sm font-medium text-right leading-snug min-w-0 break-words">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ================= MEDIA PRINCIPALE ================= */}
      {hasBeforeAfter ? (
        <section className="container mx-auto px-6 pb-14 overflow-x-hidden">
          <h2 className="text-2xl font-semibold mb-4">Avant / Après</h2>

          {/* Desktop : slider */}
          <div className="hidden lg:block max-w-full overflow-hidden min-w-0">
            <BeforeAfterSlider
              before={before as string}
              after={after}
              alt={`${project.title} — avant / après`}
            />
          </div>

          {/* Mobile : uniquement "Après" */}
          <div className="lg:hidden min-w-0 max-w-full overflow-hidden">
            <DeviceMockup type="desktop" src={after} alt={`Après — ${project.title}`} />
          </div>
        </section>
      ) : (
        <section className="container mx-auto px-6 pb-14 overflow-x-hidden">
          <h2 className="text-2xl font-semibold mb-4">Aperçu</h2>
          <div className="min-w-0 max-w-full overflow-hidden">
            <DeviceMockup type="desktop" src={after} alt={project.title} />
          </div>
        </section>
      )}

      {/* ================= CONCEPTION & RÉALISATION ================= */}
      <section className="container mx-auto px-6 pt-20 pb-14 overflow-x-hidden">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Conception & réalisation
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Problèmes rencontrés, décisions UX et livrables.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start min-w-0">
          {/* Colonne gauche (optionnelle) */}
          {hasMobileAside && (
            <aside className="col-span-12 md:col-span-4 min-w-0">
              <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Aperçu mobile
              </h3>

              <div className="flex justify-center md:justify-start">
                <div className="w-full max-w-[280px] min-w-0 overflow-hidden">
                  <DeviceMockup type="phone" src={mobile as string} alt={`Mobile — ${project.title}`} />
                </div>
              </div>
            </aside>
          )}

          {/* Colonne droite */}
          <div
            className={`col-span-12 min-w-0 space-y-12 ${
              hasMobileAside ? "md:col-span-8" : "md:col-span-12"
            }`}
          >
            {/* Problèmes */}
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">Problèmes identifiés</h3>
                <span className="text-xs text-muted-foreground">
                  {problems.length} point{problems.length > 1 ? "s" : ""}
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground min-w-0">
                {problems.map((p, i) => (
                  <li key={i} className="min-w-0 break-words">
                    – {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold">Actions réalisées</h3>
                <span className="text-xs text-muted-foreground">
                  {actions.length} livrable{actions.length > 1 ? "s" : ""}
                </span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground min-w-0">
                {actions.map((a, i) => (
                  <li key={i} className="min-w-0 break-words">
                    – {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Code */}
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3 className="text-xl font-semibold">Code</h3>
                <span className="text-xs text-muted-foreground uppercase">
                  {mainSnippet?.language ?? ""}
                </span>
              </div>

              {mainSnippet ? (
                <div className="min-w-0 max-w-full overflow-x-hidden">
                  <CodeBlock
                    title={mainSnippet.title}
                    language={mainSnippet.language}
                    code={mainSnippet.code}
                  />
                </div>
              ) : (
                <p className="text-sm text-muted-foreground max-w-2xl">
                  Code non affiché pour le moment (refacto / optimisation en cours).
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= NAV FIN (style contact) ================= */}
      <section className="container mx-auto px-6 pt-12 overflow-x-hidden">
        <div className="space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Suite du parcours</h2>
          <p className="text-sm text-muted-foreground">
            Accéder aux autres projets ou me contacter.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#projets"
              className="inline-flex items-center gap-2 rounded-full border border-[--surface-border] bg-[--foreground]/5 px-6 py-3 text-sm font-medium transition-all hover:bg-[--foreground] hover:text-[--background]"
            >
              Retour aux projets
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[--surface-border] bg-[--foreground]/5 px-6 py-3 text-sm font-medium transition-all hover:bg-[--foreground] hover:text-[--background]"
            >
              Me contacter
            </a>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[--surface-border] bg-[--foreground]/5 px-6 py-3 text-sm font-medium transition-all hover:bg-[--foreground] hover:text-[--background]"
              >
                Voir en ligne
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

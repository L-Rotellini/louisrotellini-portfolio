import SectionEyebrow from "./SectionEyebrow";

const items = [
  {
    title: "Construction de produits AI-assisted",
    text: "MVP livrés en 2-4 semaines. Next.js, TypeScript, intégration LLM si pertinent.",
    metaEnd: "↳ Mission cadrée",
  },
  {
    title: "Intégration LLM dans vos produits",
    text: "Agents, OCR, RAG, pour vos workflows internes ou produits clients.",
    metaEnd: "↳ Régie / forfait",
  },
  {
    title: "Missions AI Product Engineer / front-end confirmées",
    text: "Refontes, modules, intégrations modernes IA pour agences et grands comptes. React, Next.js, TypeScript, intégration LLM.",
    metaEnd: "↳ Agences · grands comptes",
  },
];

export default function WorkProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="py-24"
    >
      <SectionEyebrow
        idx="04"
        label="Comment je travaille"
        meta="3 missions-types"
      />

      <h2
        id="process-title"
        className="text-[clamp(2.25rem,6vw,56px)] font-medium tracking-[-0.035em] leading-[0.95] m-0 max-w-[18ch]"
      >
        Comment je travaille.
      </h2>
      <p className="mt-4 text-[16px] text-[--muted] max-w-[48ch] mb-12">
        Basé à Lille, je travaille en distanciel partout en France et au
        Benelux, ou en présentiel sur Paris et Lille.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[--rule] border-y border-[--rule]">
        {items.map(({ title, text, metaEnd }, i) => (
          <div
            key={title}
            className="bg-[--paper] hover:bg-[--paper-2] py-9 px-7 min-h-[240px] flex flex-col gap-3.5 transition-colors"
          >
            <span
              aria-hidden="true"
              className="text-[64px] font-medium tracking-[-0.045em] leading-[0.85] tabular-nums"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="text-[18px] font-medium tracking-[-0.012em] m-0">
              {title}
            </h3>
            <p className="text-[14px] text-[--muted] leading-[1.5] m-0">
              {text}
            </p>
            <span className="mt-auto font-mono text-[10.5px] uppercase tracking-[0.1em] text-[--muted]">
              {metaEnd}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[14px] text-[--muted] max-w-[64ch]">
        Mes clients récents : Decathlon, Damart, IÉSEG. En général, je rentre
        sur un projet en moins d&apos;une semaine et je livre dans les délais
        convenus.
      </p>
    </section>
  );
}

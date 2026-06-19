import SectionEyebrow from "./SectionEyebrow";

const items = [
  {
    title: "Construction de produits en pilotant l'IA",
    text: "De l'idée à la production, je pilote des agents IA pour avancer vite sans sacrifier la qualité. Next.js, TypeScript, intégration LLM quand elle apporte de la valeur.",
    metaEnd: "↳ Produit",
  },
  {
    title: "Intégration LLM",
    text: "Connecter des modèles de langage à des interfaces et des workflows concrets : agents, OCR, RAG.",
    metaEnd: "↳ IA appliquée",
  },
  {
    title: "Front-end React/Next.js moderne",
    text: "Refontes, modules et intégrations : interfaces rapides, accessibles et maintenables en React, Next.js, TypeScript.",
    metaEnd: "↳ Front-end",
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
        idx="03"
        label="Comment j'aborde un projet"
        meta="approche & expertise"
      />

      <h2
        id="process-title"
        className="text-[clamp(2.25rem,6vw,56px)] font-medium tracking-[-0.035em] leading-[0.95] m-0 max-w-[18ch]"
      >
        Comment j&apos;aborde un projet.
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
        Mes clients récents : Decathlon, Damart, IÉSEG.
      </p>
    </section>
  );
}

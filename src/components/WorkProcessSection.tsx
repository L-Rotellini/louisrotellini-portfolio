const items = [
  {
    title: "Intégration de maquettes",
    text: "Figma vers React, Next.js, WordPress, Magento ou Prestashop.",
  },
  {
    title: "Projets one-shot d'agences",
    text: "Refontes, landing pages, modules sur mesure.",
  },
  {
    title: "Renforts d'équipe",
    text: "Missions où vos équipes sont en sous-effectif.",
  },
];

export default function WorkProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="space-y-7"
    >
      <div className="flex items-baseline gap-4">
        <span className="flex-1 h-px bg-[--surface-border]" />
      </div>

      <h2
        id="process-title"
        className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight leading-[1.1]"
      >
        Comment je travaille
      </h2>

      <p className="text-base text-[--muted] max-w-2xl">
        Je suis dev front-end freelance basé à Lille, je travaille en distanciel
        partout en France et au Benelux, ou en présentiel sur Paris et Lille.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 mt-4 border-t border-[--surface-border]">
        {items.map(({ title, text }, i) => (
          <div
            key={title}
            className="pt-8 pb-7 px-7 border-b border-[--surface-border] sm:[&:not(:last-child)]:border-r sm:[&:not(:last-child)]:border-[--surface-border] flex flex-col gap-3.5 min-h-[180px] sm:min-h-[220px]"
          >
            <span
              aria-hidden="true"
              className="text-[3.5rem] font-light tracking-[-0.04em] leading-none tabular-nums"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-auto text-base font-semibold tracking-[-0.01em]">
              {title}
            </h3>
            <p className="text-sm text-[--muted]">{text}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-[--muted] max-w-2xl">
        Mes clients récents : Decathlon, Damart, IÉSEG. En général, je rentre
        sur un projet en moins d&apos;une semaine et je livre dans les délais
        convenus.
      </p>
    </section>
  );
}

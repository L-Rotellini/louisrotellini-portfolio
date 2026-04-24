import { ArrowRight, Clock } from "lucide-react";

const tasks = [
  "Relances clients",
  "Préparation de visites",
  "Archivage terrain",
  "Reporting manuel",
  "Saisie multi-outils",
];

export default function AuditSection() {
  return (
    <section id="audit" aria-labelledby="audit-title" className="space-y-7">
      <p className="text-xs text-[--muted] uppercase tracking-[0.12em]">Audit gratuit · antwork</p>

      <h2
        id="audit-title"
        className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight leading-[1.1]"
      >
        Vos équipes perdent des heures sur des tâches qui pourraient{" "}
        <span style={{ color: "#e9481f" }}>disparaître</span>.
      </h2>

      <p className="text-base text-[--muted]">
        J&apos;audite gratuitement les PME pour identifier leurs tâches répétitives
        automatisables, et je construis l&apos;outil sur mesure.
      </p>

      <div className="flex flex-wrap gap-2">
        {tasks.map((t) => (
          <span
            key={t}
            className="text-[13px] text-[--muted] border border-[--surface-border] px-3 py-[5px] rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <a
          href="https://antwork.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors hover-invert"
        >
          <ArrowRight className="size-4" aria-hidden="true" />
          <span>Demander un audit gratuit</span>
        </a>
        <span className="inline-flex items-center gap-1.5 text-[13px] text-[--muted]">
          <Clock className="size-3.5" />
          1 heure · sans engagement
        </span>
      </div>
    </section>
  );
}

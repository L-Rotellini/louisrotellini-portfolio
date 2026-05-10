import { Fragment } from "react";

const steps = [
  { label: "Specs + contexte", note: "humain" },
  { label: "Claude Code", note: "génération" },
  { label: "Revue + tests", note: "humain" },
  { label: "Production", note: "livraison" },
];

const tools = ["claude-code", "cursor", "next.js 15", "typescript", "git"];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-title"
      className="flex flex-col gap-6 sm:gap-9"
    >
      {/* Eyebrow */}
      <div className="flex items-baseline gap-4">
        <span className="text-xs uppercase tracking-[0.18em] text-[--muted]">
          Workflow
        </span>
        <span className="flex-1 h-px bg-[--surface-border]" />
        <span className="font-mono text-[0.72rem] text-[--muted]">
          ai-assisted
        </span>
      </div>

      {/* Manifesto (2-col) */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_2.2fr] gap-6 sm:gap-12 items-start">
        <div className="flex flex-col gap-3">
          <h2
            id="workflow-title"
            className="text-[clamp(1.4rem,1.8vw,1.6rem)] font-semibold tracking-[-0.02em] leading-[1.15]"
          >
            Mon workflow AI-assisted
          </h2>
          <p className="text-[0.92rem] text-[--muted] max-w-[32ch]">
            Je pilote Claude Code et les outils IA équivalents sur l&apos;ensemble du
            cycle de développement.
          </p>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -top-8 -left-3 text-[5.5rem] leading-none text-[--surface-border] font-serif"
          >
            &ldquo;
          </span>
          <p className="text-[clamp(1.6rem,2.4vw,2.05rem)] font-normal leading-[1.25] tracking-[-0.02em] text-balance">
            L&apos;IA accélère l&apos;écriture du code.
            <br />
            <span className="text-[--muted]">
              La structuration du contexte, la validation et les décisions critiques{" "}
              <span className="text-[--foreground]">restent humaines.</span>
            </span>
          </p>
        </div>
      </div>

      {/* Pipeline */}
      <div className="border border-[--surface-border] rounded-[10px] px-5 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 font-mono text-[0.78rem]">
        {steps.map((s, i) => (
          <Fragment key={s.label}>
            <div className="flex flex-col gap-1 flex-1 min-w-0">
              <span className="text-[--muted] text-[0.65rem] uppercase tracking-[0.14em]">
                {String(i + 1).padStart(2, "0")} · {s.note}
              </span>
              <span className="text-[--foreground] font-medium">{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="text-[--muted] text-[0.85rem] self-start sm:self-center pl-2 sm:pl-0"
              >
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            )}
          </Fragment>
        ))}
      </div>

      {/* Stack */}
      <div className="flex items-center gap-2.5 flex-wrap">
        <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[--muted]">
          Stack
        </span>
        <span className="w-6 h-px bg-[--surface-border]" />
        {tools.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.74rem] text-[--muted] px-2 py-[3px] border border-[--surface-border] rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

import SectionEyebrow from "./SectionEyebrow";

const rows = [
  { num: "01", step: "Specs · contexte", role: "humain" as const, pct: "—" },
  { num: "02", step: "Claude Code · génération", role: "agent" as const, pct: "~70%" },
  { num: "03", step: "Revue · tests", role: "humain" as const, pct: "100%" },
  { num: "04", step: "Production · livraison", role: "humain" as const, pct: "—" },
];

const tools = ["claude-code", "cursor", "next.js 15", "typescript", "git"];

export default function WorkflowSection() {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-title"
      className="py-24"
    >
      <SectionEyebrow
        idx="05"
        label="Workflow"
        meta="ai-assisted, human-led"
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2
            id="workflow-title"
            className="text-[32px] font-medium tracking-[-0.025em] leading-[1.05] m-0 mb-3"
          >
            Mon workflow AI-assisted
          </h2>
          <p className="text-[16px] text-[--muted] max-w-[36ch] m-0">
            Je pilote Claude Code et les outils IA équivalents sur
            l&apos;ensemble du cycle de développement.
          </p>
        </div>

        <div>
          <blockquote className="text-[clamp(1.5rem,3.4vw,36px)] font-medium tracking-[-0.025em] leading-[1.05] max-w-[22ch] m-0">
            L&apos;IA accélère le code.
            <br />
            <span className="text-[--muted]">
              Le contexte, la validation et les décisions critiques restent
              humains.
            </span>
          </blockquote>

          <div className="mt-9 border-t border-[--rule]">
            {rows.map((r) => (
              <div
                key={r.num}
                className="grid grid-cols-[40px_1fr_auto_60px] md:grid-cols-[48px_1fr_140px_80px] gap-[18px] py-[18px] border-b border-[--rule] items-center font-mono text-[12px] text-[--muted]"
              >
                <span>{r.num}</span>
                <span className="font-sans text-[15px] md:text-[17px] font-medium tracking-[-0.005em] text-[--ink]">
                  {r.step}
                </span>
                {r.role === "humain" ? (
                  <span className="inline-flex items-center gap-2 text-[--ink]">
                    <span aria-hidden="true">●</span>humain
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[--accent]">
                    <span aria-hidden="true">◆</span>agent
                  </span>
                )}
                <span className="text-right">{r.pct}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3.5 flex-wrap font-mono text-[11px] uppercase tracking-[0.1em] text-[--muted]">
            <span className="inline-flex items-center gap-2.5">
              Stack
              <span aria-hidden="true" className="w-6 h-px bg-[--rule-strong]" />
            </span>
            <div className="flex flex-wrap gap-1.5 normal-case tracking-normal">
              {tools.map((t) => (
                <span
                  key={t}
                  className="border border-[--rule] rounded px-2 py-[3px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

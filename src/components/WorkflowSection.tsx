import SectionEyebrow from "./SectionEyebrow";
import type { Dictionary } from "@/i18n/getDictionary";

const tools = ["claude-code", "cursor", "next.js 16", "typescript", "git"];

type Props = {
  dict: Dictionary["workflow"];
};

export default function WorkflowSection({ dict }: Props) {
  return (
    <section
      id="workflow"
      aria-labelledby="workflow-title"
      className="py-24"
    >
      <SectionEyebrow
        idx="04"
        label={dict.eyebrowLabel}
        meta={dict.eyebrowMeta}
      />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2
            id="workflow-title"
            className="text-[32px] font-medium tracking-[-0.025em] leading-[1.05] m-0 mb-3"
          >
            {dict.title}
          </h2>
          <p className="text-[16px] text-[--muted] max-w-[36ch] m-0">
            {dict.intro}
          </p>
        </div>

        <div>
          <blockquote className="text-[clamp(1.5rem,3.4vw,36px)] font-medium tracking-[-0.025em] leading-[1.05] max-w-[22ch] m-0">
            {dict.quoteLine1}
            <br />
            <span className="text-[--muted]">{dict.quoteLine2}</span>
          </blockquote>

          <div className="mt-9 border-t border-[--rule]">
            {dict.rows.map((r) => (
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
                    <span aria-hidden="true">●</span>
                    {dict.roleHuman}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[--accent]">
                    <span aria-hidden="true">◆</span>
                    {dict.roleAgent}
                  </span>
                )}
                <span className="text-right">{r.pct}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3.5 flex-wrap font-mono text-[11px] uppercase tracking-[0.1em] text-[--muted]">
            <span className="inline-flex items-center gap-2.5">
              {dict.stackLabel}
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

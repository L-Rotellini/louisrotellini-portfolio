type Props = {
  idx: string;
  label: string;
  meta?: string;
};

export default function SectionEyebrow({ idx, label, meta }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] border-b border-[--rule] pb-3.5 mb-12">
      <span className="text-[--ink]">
        {idx} / {label}
      </span>
      {meta && <span>{meta}</span>}
    </div>
  );
}

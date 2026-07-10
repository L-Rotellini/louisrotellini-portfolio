import type { Dictionary } from "@/i18n/dictionaries/fr";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section className="hero" data-tag="block.hero">
      <div className="wrap">
        <div className="hero__eye eyebrow reveal">
          <span className="n">{"//"}</span> {dict.eyebrow}
        </div>
        <h1 className="reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
          {dict.h1.pre}
          <span className="accent">{dict.h1.accent}</span>
          {dict.h1.post}
        </h1>
      </div>
    </section>
  );
}

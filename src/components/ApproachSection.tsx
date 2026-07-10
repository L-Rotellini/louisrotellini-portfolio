import type { Dictionary } from "@/i18n/dictionaries/fr";

export default function ApproachSection({ dict }: { dict: Dictionary["approach"] }) {
  return (
    <section className="section" id="approach" data-tag="section#approach">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              <span className="n">{dict.num}</span> / {dict.label}
            </div>
            <h2>{dict.title}</h2>
          </div>
          <p>{dict.intro}</p>
        </div>
        <div className="principles reveal">
          {dict.principles.map((p) => (
            <div className="principle" key={p.t}>
              <div className="principle__t">{p.t}</div>
              <p className="principle__x">{p.x}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

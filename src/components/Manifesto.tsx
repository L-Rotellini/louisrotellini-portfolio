import type { Dictionary } from "@/i18n/dictionaries/fr";

export default function Manifesto({ dict }: { dict: Dictionary["manifesto"] }) {
  return (
    <section className="manifesto" data-tag="block.manifesto">
      <div className="wrap">
        <p className="manifesto__q reveal">
          {dict.line1}
          <br />
          <span>{dict.line2}</span>
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/fr";

const LOGOS: { src: string; alt: string; cls: string }[] = [
  { src: "/logos/decathlon.svg", alt: "Decathlon", cls: "lg-wide" },
  { src: "/logos/damart.svg", alt: "Damart", cls: "lg-wide" },
  { src: "/logos/ieseg.svg", alt: "IÉSEG", cls: "lg-mid" },
  { src: "/logos/blancheporte.svg", alt: "Blancheporte", cls: "lg-wide" },
  { src: "/logos/promod.svg", alt: "Promod", cls: "lg-wide" },
  { src: "/logos/credit-mutuel.svg", alt: "Crédit Mutuel", cls: "lg-wide" },
  { src: "/logos/disneyland-paris.svg", alt: "Disneyland Paris", cls: "lg-mid" },
  { src: "/logos/la-foir-fouille.svg", alt: "La Foir'Fouille", cls: "lg-mid" },
  { src: "/logos/tape-a-loeil.svg", alt: "Tape à l'Œil", cls: "lg-tall" },
];

export default function AboutSection({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section className="section" id="about" data-tag="section#about">
      <div className="wrap">
        <div className="about">
          <div className="about__bio reveal">
            <div className="eyebrow" style={{ marginBottom: 22 }}>
              <span className="n">{dict.num}</span> / {dict.label}
            </div>
            <p>{dict.bio1}</p>
            <p>{dict.bio2}</p>
            <div className="logos">
              <div className="logos__l">
                {dict.clientsLabel}{" "}
                <span style={{ color: "var(--muted)", textTransform: "none", letterSpacing: 0 }}>
                  {dict.clientsNote}
                </span>
              </div>
              <div className="logos__row">
                {LOGOS.map((l) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={l.src} className={l.cls} src={l.src} alt={l.alt} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
          <div
            className="ph reveal"
            style={{ "--d": "80ms", padding: 0, overflow: "hidden", position: "relative" } as React.CSSProperties}
          >
            <Image
              src="/louis-rotellini.jpg"
              alt={dict.portraitAlt}
              fill
              sizes="(max-width: 820px) 100vw, 300px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

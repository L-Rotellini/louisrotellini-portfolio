import { profile } from "@/data/profile";
import { mailtoHref } from "@/lib/mailto";
import SectionEyebrow from "./SectionEyebrow";

const links = [
  {
    label: profile.email,
    href: mailtoHref(),
    meta: "EMAIL · DIRECT",
    external: false,
  },
  {
    label: "Profil Malt",
    href: profile.maltUrl,
    meta: "PLATEFORME · DEVIS",
    external: true,
  },
  {
    label: "LinkedIn",
    href: profile.linkedinUrl,
    meta: "RÉSEAU · MESSAGE",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-24 pb-32"
    >
      <SectionEyebrow
        idx="06"
        label="Contact"
        meta="réponse · 24h ouvrées"
      />

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-14 items-end">
        <h2
          id="contact-title"
          className="font-medium tracking-[-0.045em] leading-[0.92] max-w-[12ch] text-[clamp(2.5rem,9vw,88px)] m-0"
        >
          Un projet en tête ? Écris-moi.
        </h2>

        <div className="border-t border-[--rule]">
          {links.map((l) =>
            l.href ? (
              <a
                key={l.meta}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="group flex justify-between items-center py-4 border-b border-[--rule] text-[18px] hover:text-[--accent] transition-colors"
              >
                <span className="flex flex-col gap-0.5 min-w-0 truncate">
                  <span className="truncate">{l.label}</span>
                  <small className="block font-mono text-[11px] uppercase tracking-[0.06em] text-[--muted]">
                    {l.meta}
                  </small>
                </span>
                <span className="font-mono text-[14px] text-[--muted] transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[--accent]">
                  ↗
                </span>
              </a>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
}

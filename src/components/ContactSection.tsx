"use client";

import { useUi } from "@/components/UiProvider";
import { EMAIL, GITHUB_LABEL, GITHUB_URL, LINKEDIN_LABEL, LINKEDIN_URL } from "@/lib/site";
import type { Dictionary } from "@/i18n/dictionaries/fr";

export default function ContactSection({ dict }: { dict: Dictionary["contact"] }) {
  const { toast } = useUi();

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(EMAIL)
        .then(() => toast(dict.copied))
        .catch(() => toast(EMAIL));
    } else {
      toast(EMAIL);
    }
  };

  return (
    <section className="section contact" id="contact" data-tag="section#contact">
      <div className="wrap">
        <div className="eyebrow reveal" style={{ marginBottom: 20 }}>
          <span className="n">{dict.num}</span> / {dict.label}
        </div>
        <h2 className="reveal" style={{ "--d": "60ms" } as React.CSSProperties}>
          {dict.title}
        </h2>
        <div className="contact__list reveal" style={{ "--d": "120ms" } as React.CSSProperties}>
          <div
            className="crow"
            tabIndex={0}
            role="button"
            aria-label={dict.emailCopyAria}
            onClick={copyEmail}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                copyEmail();
              }
            }}
          >
            <span className="crow__k">{dict.emailKey}</span>
            <span className="crow__v">{EMAIL}</span>
            <span className="crow__ar">{dict.emailCopyHint}</span>
          </div>
          <a className="crow" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <span className="crow__k">{dict.githubKey}</span>
            <span className="crow__v">{GITHUB_LABEL}</span>
            <span className="crow__ar">↗</span>
          </a>
          <a className="crow" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <span className="crow__k">{dict.linkedinKey}</span>
            <span className="crow__v">{LINKEDIN_LABEL}</span>
            <span className="crow__ar">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

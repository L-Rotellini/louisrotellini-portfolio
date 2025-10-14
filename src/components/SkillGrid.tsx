"use client";

import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/skills";
import { Code, Shield, Cloud, Wrench, Smile } from "lucide-react";

const categories = [
  { title: "Front-end & Web", icon: Code, color: "text-sky-500", items: skills.web },
  { title: "Back / Cloud / Scripts", icon: Cloud, color: "text-indigo-500", items: skills.back },
  { title: "Cybersécurité (en cours)", icon: Shield, color: "text-emerald-500", items: skills.cyber },
  { title: "Outils & Collaboration", icon: Wrench, color: "text-amber-500", items: skills.tools },
  { title: "Soft Skills", icon: Smile, color: "text-rose-500", items: skills.soft },
];

type CSSVars = React.CSSProperties & { ["--card"]?: number; ["--i"]?: number };

export default function SkillGrid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e.isIntersecting) {
          setActive(true);     // déclenche une fois
          io.disconnect();
        }
      },
      { root: null, rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      aria-labelledby="skills-title"
      className={`space-y-8 ${active ? "skills-in" : ""}`}
    >
      <h2 id="skills-title">Compétences</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ title, icon: Icon, color, items }, cardIndex) => (
          <article
            key={title}
            className="surface h-full flex flex-col justify-between rounded-2xl border border-[--surface-border] p-5 transition-all duration-300 hover:bg-[--foreground]/[0.02]"
            aria-labelledby={`${title}-title`}
            style={{ ["--card" as "--card"]: cardIndex } as CSSVars}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`size-5 ${color}`} aria-hidden="true" />
                <h3 id={`${title}-title`} className="text-lg font-semibold tracking-tight">
                  {title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2" role="list">
                {items.map((it, i) => (
                  <li
                    key={it}
                    className="chip-anim text-xs text-[--muted] border border-[--surface-border] rounded-full px-2 py-1"
                    style={{ ["--i" as "--i"]: i } as CSSVars}
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

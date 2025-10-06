"use client";

import { skills } from "@/data/skills";
import { Code, Shield, Cloud, Wrench, Smile } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const categories = [
  { title: "Front-end & Web", icon: Code, items: skills.web },
  { title: "Back / Cloud / Scripts", icon: Cloud, items: skills.back },
  { title: "Cybersécurité (en cours)", icon: Shield, items: skills.cyber },
  { title: "Outils & Collaboration", icon: Wrench, items: skills.tools },
  { title: "Soft Skills", icon: Smile, items: skills.soft },
];

export default function SkillGrid() {
  return (
    <section id="skills" className="space-y-8">
      <FadeIn>
        <h2>Compétences</h2>
      </FadeIn>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ title, icon: Icon, items }, idx) => (
          <FadeIn key={title} delay={idx * 0.08}>
            <div className="surface h-full flex flex-col justify-between hover:bg-[--foreground]/[0.02] transition-all duration-300">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="size-5 text-[--muted]" />
                  <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="text-xs text-[--muted] border border-[--surface-border] rounded-full px-2 py-1"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import SectionEyebrow from "./SectionEyebrow";
import { localizedHref, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

type Props = {
  dict: Dictionary["projects"];
  projects: Project[];
  locale: Locale;
};

export default function ProjectsSection({ dict, projects, locale }: Props) {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const hoveredProject = hoveredProjectId
    ? projects.find((p) => p.id === hoveredProjectId)
    : null;

  return (
    <section
      id="projets"
      aria-labelledby="projets-title"
      className="py-24"
    >
      <SectionEyebrow idx="02" label={dict.eyebrowLabel} meta={dict.eyebrowMeta} />

      <h2
        id="projets-title"
        className="text-[clamp(2.25rem,6vw,56px)] font-medium tracking-[-0.035em] leading-[0.95] m-0 max-w-[18ch]"
      >
        {dict.title}
      </h2>
      <p className="mt-4 text-[16px] text-[--muted] max-w-[48ch] mb-12">
        {dict.intro}
      </p>

      <div className="relative" onMouseMove={handleMouseMove}>
        <div className="border-t border-[--rule]">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={localizedHref(locale, `/projets/${project.id}`)}
              className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] gap-4 md:gap-6 py-7 border-b border-[--rule] items-center"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              <span className="font-mono text-[12px] text-[--muted] w-7">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[--muted]">
                  {project.client}
                  {project.year ? ` · ${project.year}` : ""}
                </span>
                <h3 className="text-[clamp(1.125rem,2.4vw,24px)] font-medium tracking-[-0.018em] leading-[1.15] m-0 truncate">
                  {project.title}
                </h3>
              </div>
              <div className="hidden md:flex items-center gap-1.5">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-[--muted] border border-[--rule] rounded-full px-[9px] py-[3px]"
                  >
                    {tech.toLowerCase()}
                  </span>
                ))}
              </div>
              <span className="font-mono text-[14px] text-[--muted] w-6 text-right transition-transform duration-250 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[--accent]">
                ↗
              </span>
            </Link>
          ))}
        </div>

        {/* Hover preview cursor-follow — RÈGLE 0 : ne pas toucher */}
        {hoveredProject && (
          <div
            className="fixed pointer-events-none z-[9999] w-80 aspect-video rounded-xl overflow-hidden border border-[--surface-border] shadow-2xl hidden md:block"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 120,
            }}
          >
            <Image
              src={hoveredProject.after}
              alt={hoveredProject.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}

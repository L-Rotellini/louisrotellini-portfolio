"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import projects from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const hoveredProject = hoveredProjectId
    ? projects.find((p) => p.id === hoveredProjectId)
    : null;

  return (
    <section id="projets" aria-labelledby="projets-title" className="space-y-8">
      <h2 id="projets-title">Projets</h2>

      <div className="relative" onMouseMove={handleMouseMove}>
        {/* Liste */}
        <div className="divide-y divide-[--surface-border]">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projets/${project.id}`}
              className="group flex items-center gap-4 py-6 cursor-pointer"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
            >
              {/* Thumbnail mobile */}
              <div className="relative w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-[--surface-border] md:hidden">
                <Image
                  src={project.after}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[--muted] uppercase tracking-wider">
                  {project.client}
                </p>
                <h3 className="text-lg md:text-2xl font-semibold truncate group-hover:text-[--muted] transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Stack - desktop only */}
              <div className="hidden md:flex items-center gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[--muted] border border-[--surface-border] px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <ArrowUpRight className="size-5 text-[--muted] flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Image flottante (desktop only) */}
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

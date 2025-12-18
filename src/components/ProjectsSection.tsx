"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

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
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Thumbnail mobile */}
              <div className="relative w-16 h-12 flex-shrink-0 rounded-lg overflow-hidden border border-[--surface-border] md:hidden">
                <Image
                  src={project.thumbnail}
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
                <h3 className="text-lg md:text-2xl font-semibold group-hover:text-[--muted] transition-colors truncate">
                  {project.title}
                </h3>
              </div>

              {/* Stack - desktop only */}
              <div className="hidden md:flex items-center gap-4">
                <div className="flex gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-[--muted] border border-[--surface-border] px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight className="size-5 text-[--muted] flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          ))}
        </div>

        {/* Image flottante - desktop only */}
        {hoveredProject && (
          <div
            className="fixed pointer-events-none z-50 w-80 aspect-video rounded-xl overflow-hidden border border-[--surface-border] shadow-2xl hidden md:block"
            style={{
              left: mousePosition.x + 20,
              top: mousePosition.y - 100,
            }}
          >
            <Image
              src={projects.find((p) => p.id === hoveredProject)?.thumbnail || ""}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
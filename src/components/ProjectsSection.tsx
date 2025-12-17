"use client";

import { useState } from "react";
import Image from "next/image";
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
            
             <a key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-6 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="space-y-1">
                <p className="text-sm text-[--muted] uppercase tracking-wider">
                  {project.client}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-[--muted] transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex gap-2">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-[--muted] border border-[--surface-border] px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ArrowUpRight className="size-5 text-[--muted] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Image flottante */}
        {hoveredProject && (
          <div
            className="fixed pointer-events-none z-50 w-80 aspect-video rounded-xl overflow-hidden border border-[--surface-border] shadow-2xl"
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
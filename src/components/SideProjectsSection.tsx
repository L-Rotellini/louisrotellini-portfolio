import Link from "next/link";
import Image from "next/image";
import sideProjects from "@/data/sideProjects";
import { ArrowUpRight } from "lucide-react";

export default function SideProjectsSection() {
  return (
    <section
      id="side-projects"
      aria-labelledby="side-projects-title"
      className="space-y-8"
    >
      <div className="space-y-2">
        <h2 id="side-projects-title">Side projects</h2>
        <p className="text-base text-[--muted] max-w-2xl">
          Mes produits perso, construits en autonomie en mode AI-assisted.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sideProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projets/${project.id}`}
            className="group flex flex-col rounded-xl border border-[--surface-border] overflow-hidden hover:bg-[--foreground]/[0.02] transition-colors"
          >
            <div className="relative aspect-video w-full overflow-hidden border-b border-[--surface-border]">
              <Image
                src={project.after}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex items-center justify-between">
                <span className="inline-block text-[11px] text-[--muted] border border-[--surface-border] rounded-full px-2 py-0.5">
                  Side project
                </span>
                <ArrowUpRight className="size-4 text-[--muted] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold leading-snug">
                {project.title}
              </h3>
              {project.tagline && (
                <p className="text-sm text-[--muted]">{project.tagline}</p>
              )}
              <p className="text-sm text-[--muted]">{project.context}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] text-[--muted] border border-[--surface-border] px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

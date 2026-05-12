import Link from "next/link";
import Image from "next/image";
import sideProjects from "@/data/sideProjects";
import SectionEyebrow from "./SectionEyebrow";

export default function SideProjectsSection() {
  return (
    <section
      id="side-projects"
      aria-labelledby="side-projects-title"
      className="py-24"
    >
      <SectionEyebrow
        idx="02"
        label="Side projects"
        meta={`${sideProjects.length} produits IA`}
      />

      <h2
        id="side-projects-title"
        className="text-[clamp(2.25rem,6vw,56px)] font-medium tracking-[-0.035em] leading-[0.95] m-0 max-w-[18ch]"
      >
        Mes produits IA, en autonomie.
      </h2>
      <p className="mt-4 text-[16px] text-[--muted] max-w-[48ch] mb-12">
        Construits en mode AI-assisted, du cadrage à la mise en prod. Stack :
        Next.js, TypeScript, agents IA.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
        {sideProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projets/${project.id}`}
            className="group flex flex-col bg-[--paper] border border-[--rule] rounded-[12px] overflow-hidden hover:bg-[--paper-2] transition-colors duration-300"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[--rule]">
              <Image
                src={project.after}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-2.5 p-5 flex-1">
              <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.1em] text-[--muted]">
                <span>PRODUIT</span>
                <span className="font-mono text-[13px] text-[--muted] transition-transform duration-250 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-[--accent]">
                  ↗
                </span>
              </div>
              <h3 className="text-[22px] font-medium tracking-[-0.015em] leading-[1.05] m-0">
                {project.title}
              </h3>
              <p className="text-[13.5px] text-[--muted] leading-[1.5] m-0">
                {project.tagline ?? project.context}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10.5px] text-[--muted] border border-[--rule] rounded-full px-2 py-[1px]"
                  >
                    {tech.toLowerCase()}
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

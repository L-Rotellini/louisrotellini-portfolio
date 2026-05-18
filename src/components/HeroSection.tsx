import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { mailtoHref } from "@/lib/mailto";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="pt-[140px] pb-[110px]"
    >
      {/* Meta header */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-[--muted] mb-16">
        <span>Lille · France · LR—2026</span>
        <span className="inline-flex items-center gap-2 text-[--ink]">
          <span className="pulse-dot" aria-hidden="true" />
          Disponible · réponse 24h
        </span>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex-1 min-w-0">
          <h1
            id="hero-title"
            className="font-medium tracking-[-0.045em] leading-[0.92] max-w-[14ch] text-[clamp(2.5rem,9vw,88px)] m-0"
          >
            Louis<br />Rotellini.
          </h1>

          <p className="mt-8 text-[clamp(1.125rem,2.4vw,24px)] leading-[1.3] tracking-[-0.005em] text-[--muted] max-w-[36ch]">
            Développeur Senior freelance · React, Next.js, TypeScript · 10 ans
            XP. Workflow AI-Native avec{" "}
            <b className="text-[--ink] font-medium">Claude Code</b>. Je cadre, je
            valide, je livre vite et proprement. Ex-Decathlon, Damart, IÉSEG.
          </p>

          <ul className="mt-9 flex flex-wrap gap-2 font-mono text-[11.5px] text-[--muted]">
            {["claude code", "next.js", "typescript", "agents ia", "rag", "react", "node.js"].map(
              (tag) => (
                <li
                  key={tag}
                  className="border border-[--rule] rounded-full px-2.5 py-1"
                >
                  {tag}
                </li>
              )
            )}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-2">
            <a
              href={mailtoHref()}
              className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13.5px] bg-[--ink] text-[--paper] border border-[--ink] hover:bg-[--accent] hover:border-[--accent] transition-colors"
            >
              Discuter d&apos;un projet
              <span className="font-mono text-[12px]">→</span>
            </a>
            {profile.maltUrl && (
              <Link
                href={profile.maltUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13.5px] border border-[--rule-strong] text-[--ink] hover:bg-[--ink] hover:text-[--paper] hover:border-[--ink] transition-colors"
              >
                Malt
              </Link>
            )}
            {profile.linkedinUrl && (
              <Link
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-[18px] py-[11px] text-[13.5px] border border-[--rule-strong] text-[--ink] hover:bg-[--ink] hover:text-[--paper] hover:border-[--ink] transition-colors"
              >
                LinkedIn
              </Link>
            )}
          </div>
        </div>

        {/* Photo profil — RÈGLE 0 : ne pas toucher (forme blob, image, position) */}
        <div className="flex-shrink-0 relative">
          <div
            className="relative w-56 h-56 md:w-80 md:h-80 overflow-hidden border-2 border-[--rule] shadow-[0_0_60px_rgba(255,255,255,0.1)]"
            style={{
              borderRadius: "50% 50% 45% 55% / 55% 45% 50% 50%",
            }}
          >
            <Image
              src="/louis-rotellini.jpg"
              alt="Louis Rotellini"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

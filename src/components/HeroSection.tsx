import Image from "next/image";
import { profile } from "@/data/profile";
import {
  Mail,
  Globe,
  MapPin,
  Zap,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { mailtoHref } from "@/lib/mailto";

export default function HeroSection() {
  return (
    <div
      id="hero"
      aria-labelledby="hero-title"
      className="pt-16 sm:pt-20 space-y-8"
    >
      {/* Badges méta + dispo */}
      <div className="inline-flex flex-wrap items-center gap-2 text-sm text-[--muted]">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[--surface-border] px-2 py-0.5">
          <MapPin className="size-3 text-rose-500" aria-hidden="true" />
          <span>{profile.location}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[--surface-border] px-2 py-0.5">
          <Globe className="size-3 text-emerald-500" aria-hidden="true" />
          <span>Disponible</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[--surface-border] px-2 py-0.5">
          <Zap className="size-3 text-amber-500" aria-hidden="true" />
          <span>Réponse sous 24&nbsp;h</span>
        </span>
      </div>

      {/* Contenu principal : Texte + Photo */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8">
        {/* Texte */}
        <div className="space-y-6">
          <h1
            id="hero-title"
            className="tracking-tight leading-[1.08] text-[clamp(2rem,6vw,4.2rem)] font-bold text-balance"
          >
            <span className="block">
              Louis <span className="font-bold">ROTELLINI</span>
            </span>
            <span className="block font-normal text-[clamp(1.5rem,5vw,2.8rem)]">
              Développeur front-end freelance
            </span>
          </h1>

          {/* Stack */}
          <ul className="flex flex-wrap gap-2 text-sm text-[--muted]">
            {["React", "Next.js", "Vue", "Nuxt", "Tailwind", "WordPress", "Prestashop", "Figma"].map(
              (tag) => (
                <li
                  key={tag}
                  className="border border-[--surface-border] rounded-full px-2 py-1"
                >
                  {tag}
                </li>
              )
            )}
          </ul>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">
            
            <a href={mailtoHref()}
              className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors hover-invert"
            >
              <Mail className="size-4" aria-hidden="true" />
              <span>Discuter de votre projet</span>
            </a>
            {profile.maltUrl && (
              <Link
                href={profile.maltUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors"
              >
                <Globe className="size-4 text-emerald-500" aria-hidden="true" />
                <span>Profil Malt</span>
              </Link>
            )}

            {/* LinkedIn */}
            {profile.linkedinUrl && (
              <Link
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors"
              >
                <Linkedin className="size-4 text-[#0A66C2]" aria-hidden="true" />
                <span>LinkedIn</span>
              </Link>
            )}
          </div>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-full blur-2xl" />
          <div
            className="relative w-56 h-56 md:w-80 md:h-80 overflow-hidden border-2 border-[--surface-border] shadow-[0_0_60px_rgba(255,255,255,0.1)]"
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
    </div>
  );
}
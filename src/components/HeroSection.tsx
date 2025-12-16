import Image from "next/image";
import { profile } from "@/data/profile";
import {
  Mail,
  ArrowDownRight,
  Globe,
  MapPin,
  MonitorSmartphone,
  Zap,
} from "lucide-react";
import Link from "next/link";

function mailtoHref() {
  const s = encodeURIComponent("Projet front-end / intégration — demande de mission");
  const b = encodeURIComponent(
    [
      "Bonjour Louis,",
      "",
      "Je vous contacte pour un besoin :",
      "- Intégration de maquettes",
      "- Développement front",
      "- Création / refonte WordPress",
      "- Maintenance / optimisation (performance, accessibilité, SEO)",
      "",
      "Contexte :",
      "Délais :",
      "Budget :",
      "",
      "Merci !",
    ].join("\n")
  );
  return `mailto:${profile.email}?subject=${s}&body=${b}`;
}

export default function HeroSection() {

  return (
    <div
      id="hero"
      aria-labelledby="hero-title"
      className="pt-16 sm:pt-20 space-y-8"
    >
      {/* Badges méta + dispo */}
      <div className="inline-flex flex-wrap items-center gap-2 text-sm text-[--muted]">
        {/* Métier */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[--surface-border] px-2 py-0.5">
          <MonitorSmartphone className="size-3 text-sky-500" aria-hidden="true" />
          <span>Front-end & intégrateur freelance</span>
        </span>

        {/* Localisation */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[--surface-border] px-2 py-0.5">
          <MapPin className="size-3 text-rose-500" aria-hidden="true" />
          <span>{profile.location}</span>
        </span>

        {/* Disponibilité */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[--surface-border] px-2 py-0.5">
          <Globe className="size-3 text-emerald-500" aria-hidden="true" />
          <span>Disponible</span>
        </span>

        {/* Réactivité */}
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
              Développeur front-end & intégrateur freelance
            </span>
          </h1>

          <p className="max-w-prose text-[--muted] text-[15px]">
            J&apos;aide les entreprises et agences à transformer leurs{" "}
            <strong>maquettes</strong> en{" "}
            <strong>sites rapides, accessibles</strong> et fidèles au design initial.
            Spécialiste <strong>React / Next.js</strong> et{" "}
            <strong>WordPress</strong>. Code propre, maintenable,{" "}
            <strong>optimisé SEO & performance</strong>.
          </p>
        </div>

        {/* Photo */}
        <div className="flex-shrink-0 relative">
          {/* Fond dégradé derrière */}
          <div className="absolute -inset-6 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-full blur-2xl" />
          
          {/* Photo */}
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

      {/* CTA principaux */}
      <div className="flex flex-wrap items-center gap-3">
        {/* 1. Contact direct */}
        <a
          href={mailtoHref()}
          className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors hover-invert"
        >
          <Mail className="size-4" aria-hidden="true" />
          <span>Discuter de votre projet</span>
        </a>


        {/* 2. Profil Malt */}
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

        {/* 3. Voir l’offre */}
        <Link
          href="/#offre"
          className="inline-flex items-center gap-2 rounded-md border border-transparent px-5 py-3 text-sm hover:underline underline-offset-4 hover:opacity-80"
        >
          <ArrowDownRight className="size-4" aria-hidden="true" />
          <span>Voir mon offre</span>
        </Link>
      </div>

      {/* Barre de confiance : Outils & stack de prédilection */}
      <div className="pt-2">
        <p className="text-xs uppercase tracking-wider text-[--muted]">
          Outils & stack de prédilection
        </p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm text-[--muted]">
          {["React / Next.js", "Tailwind CSS", "WordPress", "Accessibilité & SEO"].map(
            (tag) => (
              <li
                key={tag}
                className="text-md text-[--muted] border border-[--surface-border] rounded-full px-2 py-1"
              >
                {tag}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

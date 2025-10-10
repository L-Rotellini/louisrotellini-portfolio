import { profile } from "@/data/profile";
import {
  Mail,
  ArrowDownRight,
  Globe,
  MapPin,
  MonitorSmartphone,
  Zap,
} from "lucide-react";

function mailtoHref() {
  const s = encodeURIComponent("Demande de mission freelance");
  const b = encodeURIComponent(
    "Bonjour Louis,\n\nJe vous contacte à propos d’un projet (intégration / maintenance WP / LP).\n\nContexte :\nDélais :\nBudget :\n\nMerci !"
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
          <span>Front-end freelance & WordPress</span>
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
          <span>Réponse sous 24 h</span>
        </span>
      </div>

      {/* Titre */}
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

      {/* Sous-texte */}
      <p className="max-w-prose text-[--muted] text-[15px]">
        Disponible en freelance pour missions courtes&nbsp;: intégration front,
        maintenance WordPress et emailing HTML responsive.
      </p>

      {/* CTA principal + lien offre */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={mailtoHref()}
          className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors hover-invert"
        >
          <Mail className="size-4" />
          <span>Discuter de votre projet</span>
        </a>
        <a
          href="/#offre"
          className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:opacity-80"
        >
          Voir mon offre
          <ArrowDownRight className="size-4" />
        </a>
      </div>

      {/* Barre de confiance : Outils & stack de prédilection */}
      <div className="pt-2">
        <p className="text-xs uppercase tracking-wider text-[--muted]">
          Outils & stack de prédilection
        </p>
        <ul className="mt-3 flex flex-wrap gap-2 text-sm text-[--muted]">
          {["Next.js", "Tailwind", "WordPress", "Emails HTML", "Framer Motion"].map(
            (tag) => (
              <li
                key={tag}
                className="rounded-md border border-[--surface-border] px-3 py-1"
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

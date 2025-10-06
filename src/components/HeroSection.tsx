import { profile } from "@/data/profile";
import { Mail, ArrowDownRight } from "lucide-react";

function mailtoHref() {
  const s = encodeURIComponent("Demande de mission freelance");
  const b = encodeURIComponent(
    "Bonjour Louis,\n\nJe vous contacte à propos d’un projet (intégration / maintenance WP / LP).\n\nContexte :\nDélais :\nBudget :\n\nMerci !"
  );
  return `mailto:${profile.email}?subject=${s}&body=${b}`;
}

export default function HeroSection() {
  return (
    <section className="pt-10 md:pt-16 space-y-8">
      {/* Badges méta */}
      <div className="inline-flex flex-wrap items-center gap-2 text-sm text-[--muted]">
        <span className="rounded-full border px-2 py-0.5">Webmaster & Intégrateur</span>
        <span className="rounded-full border px-2 py-0.5">{profile.location}</span>
        <span className="rounded-full border px-2 py-0.5">Réponse &lt; 24 h</span>
      </div>

      {/* Titre */}
      <h1 className="tracking-tight leading-[1.08] text-[clamp(2.4rem,6vw,4.2rem)] font-bold">
        Louis ROTELLINI<br className="hidden md:block" />
        <span className="font-normal">Intégrations propres, rapides et sans lourdeur de process.</span>
      </h1>

      {/* Sous-texte */}
      <p className="max-w-prose text-[--muted] text-[15px]">
        Disponible en freelance pour missions courtes&nbsp;: intégration front,
        maintenance WordPress et emailing HTML responsive.
      </p>

      {/* CTA */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={mailtoHref()}
          className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors"
        >
          <Mail className="size-4" />
          <span>Discutons de votre projet</span>
        </a>
        <a href="/#offre" className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:opacity-80">
          Voir mon offre
          <ArrowDownRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

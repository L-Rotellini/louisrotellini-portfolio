import Link from "next/link";

export const metadata = {
  title: "Mentions légales",
  description:
    "Informations légales relatives au site louisrotellini.fr, conformément à la loi pour la confiance dans l'économie numérique.",
};

export default function MentionsLegales() {
  return (
    <article className="max-w-[680px] pt-[120px] pb-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-[12px] text-[--muted] hover:text-[--ink] transition-colors mb-9"
      >
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="text-[clamp(2rem,5.5vw,56px)] font-medium tracking-[-0.035em] leading-[0.95] m-0 mb-4">
        Mentions légales.
      </h1>

      <p className="text-[18px] text-[--muted] leading-[1.5] m-0 mb-12">
        Informations légales relatives au site louisrotellini.fr, conformément
        à la loi pour la confiance dans l&apos;économie numérique.
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        01 / Éditeur
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        Louis Rotellini — AI Product Engineer.
        <br />
        Lille / Paris, France.
        <br />
        Contact :{" "}
        <a
          href="mailto:louis.rotellini@gmail.com"
          className="border-b border-[--rule-strong] hover:border-[--ink] hover:text-[--accent] transition-colors"
        >
          louis.rotellini@gmail.com
        </a>
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        02 / Hébergeur
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
        <br />
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-[--rule-strong] hover:border-[--ink] hover:text-[--accent] transition-colors"
        >
          vercel.com
        </a>
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        03 / Propriété intellectuelle
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        L&apos;ensemble des contenus présents sur ce site (textes, code, images,
        structure) est protégé par le droit d&apos;auteur. Toute reproduction,
        même partielle, est soumise à autorisation préalable.
      </p>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        04 / Données personnelles
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        Ce site n&apos;utilise aucun cookie tiers à des fins publicitaires. Les
        statistiques de visite sont collectées via Vercel Web Analytics,
        anonymement et sans transfert hors UE.
      </p>
      <ul className="text-[15.5px] leading-[1.65] mt-3 pl-5 list-disc">
        <li>Aucune création de profil utilisateur</li>
        <li>Aucun cookie publicitaire</li>
        <li>Données anonymisées, conservées 30 jours</li>
      </ul>

      <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[--muted] mt-12 mb-3 font-medium">
        05 / Contact
      </h2>
      <p className="text-[15.5px] leading-[1.65] m-0">
        Pour toute question relative aux mentions légales ou à la protection
        des données :{" "}
        <a
          href="mailto:louis.rotellini@gmail.com"
          className="border-b border-[--rule-strong] hover:border-[--ink] hover:text-[--accent] transition-colors"
        >
          louis.rotellini@gmail.com
        </a>
      </p>

      <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[--muted] mt-16 pt-6 border-t border-[--rule]">
        Dernière mise à jour · Mai 2026
      </p>
    </article>
  );
}

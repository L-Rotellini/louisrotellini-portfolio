import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="a-propos" className="space-y-8">
      <h2>À propos</h2>

      <div className="grid gap-8 md:grid-cols-[200px,1fr] items-start">
        {/* Portrait */}
        <div className="relative aspect-square w-[180px] md:w-[200px] overflow-hidden">
          <Image
            src="/louis-rotellini.jpg"           // <- remplace si besoin
            alt="Portrait de Louis Rotellini"
            fill
            sizes="(max-width: 768px) 180px, 200px"
            className="object-cover"
            priority
          />
        </div>

        {/* Texte */}
        <div className="space-y-4 text-[15px] max-w-prose">
          <p>
            Je conçois et intègre des interfaces sobres, accessibles et performantes.
            Mon approche&nbsp;: comprendre vite, livrer propre, collaborer simplement
            avec les équipes produit et marketing.
          </p>
          <p>
            Après plusieurs années en freelance pour des marques comme Decathlon, Disneyland Paris
            ou Damart, j’interviens aujourd’hui sur des missions ponctuelles en parallèle
            de mon activité salariée.
          </p>

          {/* Infos rapides */}
          <ul className="flex flex-wrap gap-2 text-sm text-[--muted]">
            <li className="rounded-full border px-3 py-1">HTML/CSS/JS</li>
            <li className="rounded-full border px-3 py-1">WordPress</li>
            <li className="rounded-full border px-3 py-1">Emailing HTML</li>
            <li className="rounded-full border px-3 py-1">Accessibilité</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

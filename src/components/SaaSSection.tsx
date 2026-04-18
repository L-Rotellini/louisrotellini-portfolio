type StatusBadgeProps = {
  status: string;
  type: "live" | "dev";
};

function StatusBadge({ status, type }: StatusBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[--surface-border] px-2 py-0.5 text-xs text-[--muted]">
      <span className="relative inline-flex size-2">
        <span
          className={`absolute inset-0 rounded-full ${
            type === "live" ? "bg-emerald-500" : "bg-amber-500"
          }`}
        />
        {type === "live" && (
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-50 animate-ping" />
        )}
      </span>
      {status}
    </span>
  );
}

const products = [
  {
    name: "DocSnap",
    number: "01",
    year: "2026",
    status: "En développement",
    statusType: "dev" as const, //dev or live
    problem: "Prestataires de santé à domicile",
    shortDesc: "Scan & export PDF de comptes rendus médicaux, 100% on-device.",
    description:
      "Photos de comptes rendus d'hospitalisation, recadrage automatique, export PDF prêt à imprimer. 100% on-device, aucune donnée ne sort de l'appareil.",
    stack: ["React Native", "Expo", "Vision ML", "TypeScript"],
    image: null,
  },
  {
    name: "Relancio",
    number: "02",
    year: "2026",
    status: "En développement",
    statusType: "dev" as const, //dev or live
    problem: "PME sous EBP",
    shortDesc: "Relances factures automatisées, écrites par IA dans votre ton.",
    description:
      "Import des factures, génération de mails de relance personnalisés par IA, dans le ton du commercial.",
    stack: ["Next.js", "Mistral AI", "Postgres", "Tailwind"],
    image: null,
  },
];

export default function SaaSSection() {
  return (
    <section id="saas" aria-labelledby="saas-title" className="space-y-10">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 flex-wrap">
        <div>
          <p className="text-xs text-[--muted] uppercase tracking-[0.12em] mb-3">Produits</p>
          <h2
            id="saas-title"
            className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight leading-[1.1] max-w-xl"
          >
            Outils IA pour les PME
          </h2>
        </div>
        <p className="text-sm text-[--muted] max-w-xs">
          En parallèle de mes missions front-end, j&apos;identifie des problèmes terrain dans les
          PME et je construis des outils simples pour les résoudre.
        </p>
      </div>

      <div>
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === products.length - 1;
          return (
            <article
              key={product.name}
              className={`grid md:grid-cols-[1fr_1.1fr] gap-10 py-10 border-t border-[--surface-border]${
                isLast ? " border-b" : ""
              }`}
            >
              <div
                className={`aspect-[4/3] border border-[--surface-border] rounded-xl overflow-hidden bg-[--foreground]/[0.02]${
                  isEven ? " order-1" : " order-1 md:order-2"
                }`}
              >
                <div className="flex items-center justify-center h-full text-xs text-[--muted] font-mono tracking-wider">
                  [ {product.name} — visuel à venir ]
                </div>
              </div>

              <div
                style={{ gap: "14px" }}
                className={`flex flex-col justify-center${
                  isEven ? " order-2" : " order-2 md:order-1"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-[--muted] tracking-wide">
                    {product.number} — {product.year}
                  </span>
                  <span className="w-5 h-px bg-[--surface-border]" />
                  <StatusBadge status={product.status} type={product.statusType} />
                </div>

                <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight">
                  {product.name}
                </h3>

                <p className="text-[15px] text-[--foreground]/85">
                  <strong>{product.problem}.</strong> {product.shortDesc}
                </p>

                <p className="text-sm text-[--muted]">{product.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {product.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] text-[--muted] border border-[--surface-border] px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

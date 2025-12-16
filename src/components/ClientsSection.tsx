"use client";

import Image from "next/image";

const clients = [
  { name: "Decathlon", logo: "/logos/decathlon.svg" },
  { name: "Disneyland Paris", logo: "/logos/disneyland-paris.svg" },
  { name: "Damart", logo: "/logos/damart.svg" },
  { name: "IÉSEG", logo: "/logos/ieseg.svg" },
  { name: "Crédit Mutuel", logo: "/logos/credit-mutuel.svg" },
  { name: "Promod", logo: "/logos/promod.svg" },
  { name: "La Foir'Fouille", logo: "/logos/la-foir-fouille.svg" },
  { name: "Tape à l'œil", logo: "/logos/tape-a-loeil.svg" },
  { name: "Blancheporte", logo: "/logos/blancheporte.svg" },
];

export default function ClientsSection() {
  return (
    <section className="space-y-8">
      {/* Première ligne - 5 logos */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {clients.slice(0, 5).map((client) => (
          <div
            key={client.name}
            className="relative flex items-center justify-center h-16 md:h-20 px-4 rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain p-4 grayscale opacity-70 dark:invert hover:grayscale-0 hover:opacity-100 hover:dark:invert-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Deuxième ligne - 4 logos centrés */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {clients.slice(5).map((client) => (
          <div
            key={client.name}
            className="relative flex items-center justify-center h-16 md:h-20 w-[calc(33%-1rem)] md:w-[calc(20%-1.5rem)] rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain p-4 grayscale opacity-70 dark:invert hover:grayscale-0 hover:opacity-100 hover:dark:invert-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
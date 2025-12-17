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
  const duplicatedClients = [...clients];
  return (
    <section className="space-y-8">
      {/* Première ligne - 5 logos */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {duplicatedClients.map((client, i) => (
          <div
            key={client.name}
            className="logo-card relative flex items-center justify-center h-16 md:h-20 px-4 rounded-xl border transition-colors"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
             className="object-contain p-4 logo-invert"

            />
          </div>
        ))}
      </div>
    </section>
  );
}
import { notFound } from "next/navigation";

// Toute URL non reconnue sous une locale bascule sur le not-found localisé
// (rendu dans le layout [locale], avec navbar/footer traduits).
export default function CatchAll(): never {
  notFound();
}

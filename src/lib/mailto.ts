import { profile } from "@/data/profile";

export function mailtoHref(subject: string, body?: string) {
  const defaultBody = `Bonjour Louis,

Je suis intéressé par cette offre. Voici quelques infos :
- Contexte :
- Délai souhaité :
- Budget indicatif :

Merci !`;

  const b = encodeURIComponent(body ?? defaultBody);
  const s = encodeURIComponent(subject);
  return `mailto:${profile.email}?subject=${s}&body=${b}`;
}
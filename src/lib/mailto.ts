import { profile } from "@/data/profile";

export function mailtoHref(subject?: string, body?: string) {
  const defaultSubject = "Nouveau projet — prise de contact";
  
  const defaultBody = `Bonjour Louis,

Je vous contacte pour discuter d'un projet.

Contexte :
Délais :
Budget :

Merci !`;

  const s = encodeURIComponent(subject ?? defaultSubject);
  const b = encodeURIComponent(body ?? defaultBody);
  return `mailto:${profile.email}?subject=${s}&body=${b}`;
}
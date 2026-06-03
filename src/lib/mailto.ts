import { profile } from "@/data/profile";

export function mailtoHref(subject?: string, body?: string) {
  const defaultSubject = "Prise de contact";

  const defaultBody = `Bonjour Louis,

Je vous contacte suite à la consultation de votre portfolio.

Merci !`;

  const s = encodeURIComponent(subject ?? defaultSubject);
  const b = encodeURIComponent(body ?? defaultBody);
  return `mailto:${profile.email}?subject=${s}&body=${b}`;
}
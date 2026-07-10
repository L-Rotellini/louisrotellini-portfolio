const EMAIL = "louis.rotellini@gmail.com";

export function mailtoHref(subject?: string, body?: string) {
  const defaultSubject = "Prise de contact";

  const defaultBody = `Bonjour Louis,

Je vous contacte suite à la consultation de votre portfolio.

Merci !`;

  const s = encodeURIComponent(subject ?? defaultSubject);
  const b = encodeURIComponent(body ?? defaultBody);
  return `mailto:${EMAIL}?subject=${s}&body=${b}`;
}

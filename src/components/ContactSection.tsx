"use client";

import { useEffect, useState } from "react";
import { Mail, MapPin, MessageSquare, Copy, Check, Info } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { profile } from "@/data/profile";

function mailtoHref() {
  const s = encodeURIComponent("Demande de mission freelance");
  const b = encodeURIComponent(
    "Bonjour Louis,\n\nJe vous contacte à propos d’un projet web.\n\nContexte :\nObjectif / impact :\nPérimètre (pages / fonctionnalités) :\nMaquettes / références :\nBudget / Délais :\n\nMerci !"
  );
  return `mailto:${profile.email}?subject=${s}&body=${b}`;
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {}
  };

  const mapsHref = `https://www.google.com/maps/search/${encodeURIComponent(profile.location)}`;

  return (
    <section id="contact" aria-labelledby="contact-title" className="space-y-8">
      <FadeIn>
        <h2 id="contact-title">Contact</h2>
      </FadeIn>

      {/* Intro + badges */}
      <FadeIn delay={0.06}>
        <div className="max-w space-y-4 text-[15px] leading-relaxed">
          <p>
            Besoin d’une intégration front soignée, d’une LP rapide ou d’une maintenance WordPress&nbsp;? 
            Écrivez-moi et on définit ensemble le périmètre, le budget et le délai.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-[--muted]">
            <span className="rounded-full border border-[--surface-border] px-2 py-0.5">
              ✅ Disponible
            </span>
            <span className="rounded-full border border-[--surface-border] px-2 py-0.5">
              ⚡ Réponse &lt; 24 h
            </span>
          </div>
        </div>
      </FadeIn>

      {/* Deux cartes principales côte à côte */}
      <FadeIn delay={0.12}>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Email */}
          <div className="surface rounded-2xl border border-[--surface-border] p-6 flex flex-col gap-3">
            <Mail className="size-5 text-[--muted]" aria-hidden="true" />
            <div className="text-sm text-[--muted] uppercase tracking-wide">Email</div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={mailtoHref()}
                className="text-lg font-medium underline underline-offset-4"
                aria-label={`Envoyer un email à ${profile.email}`}
              >
                {profile.email}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-2.5 py-1.5 text-xs transition-colors hover-invert"
                aria-live="polite"
                aria-label={copied ? "Email copié" : "Copier l'email"}
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied ? "Copié" : "Copier"}
              </button>
            </div>
            <p className="text-[13px] text-[--muted]">
              Joignez un lien Figma ou un dossier d’exemples si possible — cela facilite
              l’estimation.
            </p>
          </div>

          {/* Localisation */}
          <div className="surface rounded-2xl border border-[--surface-border] p-6 flex flex-col gap-3">
            <MapPin className="size-5 text-[--muted]" aria-hidden="true" />
            <div className="text-sm text-[--muted] uppercase tracking-wide">Localisation</div>
            <p className="text-lg font-medium">{profile.location}</p>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
            >
              Ouvrir dans Maps
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Bloc “pour bien démarrer” pleine largeur */}
      <FadeIn delay={0.18}>
        <div className="surface rounded-2xl border border-[--surface-border] p-6 flex flex-col gap-3">
          <Info className="size-5 text-[--muted]" aria-hidden="true" />
          <div className="text-sm text-[--muted] uppercase tracking-wide">
            Pour bien démarrer
          </div>
          <ul className="text-[15px] space-y-1.5">
            <li>• Contexte & objectif (ex. refonte, landing page, maintenance)</li>
            <li>• Maquettes ou exemples (Figma, lien web, capture)</li>
            <li>• Périmètre estimé (pages, composants, CMS, contraintes)</li>
            <li>• Délai souhaité & budget indicatif</li>
          </ul>
          <p className="text-[13px] text-[--muted]">
            NDA possible. Merci d’éviter les données sensibles par email.
          </p>
        </div>
      </FadeIn>

      {/* CTA final */}
      <FadeIn delay={0.22}>
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={mailtoHref()}
            className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm transition-colors hover-invert"
          >
            <MessageSquare className="size-4" />
            <span>Discutons de votre projet</span>
          </a>
          <a
            href="/#offre"
            className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm transition-colors"
          >
            Voir mes offres
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

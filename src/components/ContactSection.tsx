"use client";

import { Mail, MapPin, MessageSquare } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-8">
      <FadeIn>
        <h2>Contact</h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="max-w space-y-6 text-[15px]">
          <p>
            Basé entre <strong>Lille</strong> et <strong>Paris</strong>, je travaille à la fois en présentiel
            et à distance. Disponible pour des missions ponctuelles en parallèle de mon activité salariée,
            je privilégie les projets clairs, bien cadrés et orientés résultat.
          </p>

          <p>
            Si vous avez un besoin en intégration, maintenance WordPress ou création front-end rapide,
            n’hésitez pas à me contacter directement. Je réponds en général sous 24&nbsp;heures.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        {/* Grille pleine largeur */}
        <div className="grid gap-6 sm:grid-cols-2 w-full">
          {/* Email */}
          <div className="w-full surface rounded-2xl border border-[--surface-border] p-6 flex flex-col gap-3">
            <Mail className="size-5 text-[--muted]" />
            <div className="text-sm text-[--muted] uppercase tracking-wide">Email</div>
            <a
              href={`mailto:${profile.email}`}
              className="text-lg font-medium underline underline-offset-4 hover:text-[--muted] transition-colors"
            >
              {profile.email}
            </a>
          </div>

          {/* Localisation */}
          <div className="w-full surface rounded-2xl border border-[--surface-border] p-6 flex flex-col gap-3">
            <MapPin className="size-5 text-[--muted]" />
            <div className="text-sm text-[--muted] uppercase tracking-wide">Localisation</div>
            <p className="text-lg font-medium">{profile.location}</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="pt-8 flex justify-center">
          <a
            href={`mailto:${profile.email}?subject=Demande de mission freelance&body=Bonjour Louis,%0D%0A%0D%0AJe vous contacte à propos d’un projet d’intégration / maintenance front.%0D%0A%0D%0AContexte :%0D%0ADélais :%0D%0ABudget :%0D%0A%0D%0AMerci !`}
            className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors"
          >
            <MessageSquare className="size-4" />
            <span>Discutons de votre projet</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

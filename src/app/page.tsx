import ProjectsSection from "@/components/ProjectsSection";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import SaaSSection from "@/components/SaaSSection";
import { Mail } from "lucide-react";
import { mailtoHref } from "@/lib/mailto";

export default function Home() {
  return (
    <div className="py-16 space-y-32">
      {/* HERO */}
      <AnimatedSection immediate>
        <HeroSection />
      </AnimatedSection>
      
      {/* CLIENTS */}
      <AnimatedSection>
        <ClientsSection />
      </AnimatedSection>

      {/* PROJETS */}
      <AnimatedSection id="projets">
        <ProjectsSection />
      </AnimatedSection>

      {/* SAAS */}
      <AnimatedSection id="saas">
        <SaaSSection />
      </AnimatedSection>

      {/* AUDIT */}
      <AnimatedSection>
        <div className="rounded-xl border border-[--surface-border] bg-[--foreground]/[0.02] px-8 py-10 space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug max-w-xl">
            Vous perdez du temps chaque semaine sur une tâche répétitive ?
          </h2>
          <p className="text-[--muted] max-w-xl">
            Je propose des audits gratuits d&apos;une heure pour identifier ce qui est automatisable dans vos équipes. Pas de vente, juste un diagnostic. Vous repartez avec un compte-rendu écrit.
          </p>
          <a
            href={mailtoHref("Demande d'audit gratuit")}
            className="inline-flex items-center gap-2 rounded-md border border-[--surface-border] px-5 py-3 text-sm hover:bg-[--foreground]/5 transition-colors hover-invert"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span>Demander un audit gratuit</span>
          </a>
        </div>
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection id="contact">
      <ContactSection />
    </AnimatedSection>
    </div>
  );
}


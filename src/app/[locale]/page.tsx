import ProjectsSection from "@/components/ProjectsSection";
import SideProjectsSection from "@/components/SideProjectsSection";
import WorkflowSection from "@/components/WorkflowSection";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import { getDictionary } from "@/i18n/getDictionary";
import { getProjects, getSideProjects } from "@/data/getProjects";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const projects = getProjects(locale);
  const sideProjects = getSideProjects(locale);

  return (
    <div>
      {/* HERO */}
      <AnimatedSection immediate>
        <HeroSection dict={dict.hero} mail={dict.mail} />
      </AnimatedSection>

      {/* PRODUITS IA — preuve centrale du positionnement */}
      <AnimatedSection id="side-projects">
        <SideProjectsSection
          dict={dict.sideProjects}
          projects={sideProjects}
          locale={locale}
        />
      </AnimatedSection>

      {/* CLIENTS (logos) */}
      <AnimatedSection>
        <ClientsSection />
      </AnimatedSection>

      {/* PROJETS — sélection clients récents */}
      <AnimatedSection id="projets">
        <ProjectsSection dict={dict.projects} projects={projects} locale={locale} />
      </AnimatedSection>

      {/* COMMENT JE TRAVAILLE */}
      <AnimatedSection id="process">
        <WorkProcessSection dict={dict.process} />
      </AnimatedSection>

      {/* WORKFLOW — je pilote l'IA */}
      <AnimatedSection id="workflow">
        <WorkflowSection dict={dict.workflow} />
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection id="contact">
        <ContactSection dict={dict.contact} mail={dict.mail} />
      </AnimatedSection>
    </div>
  );
}

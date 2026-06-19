import ProjectsSection from "@/components/ProjectsSection";
import SideProjectsSection from "@/components/SideProjectsSection";
import WorkflowSection from "@/components/WorkflowSection";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import WorkProcessSection from "@/components/WorkProcessSection";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <AnimatedSection immediate>
        <HeroSection />
      </AnimatedSection>

      {/* PRODUITS IA — preuve centrale du positionnement builder */}
      <AnimatedSection id="side-projects">
        <SideProjectsSection />
      </AnimatedSection>

      {/* CLIENTS (logos) */}
      <AnimatedSection>
        <ClientsSection />
      </AnimatedSection>

      {/* PROJETS — sélection clients récents */}
      <AnimatedSection id="projets">
        <ProjectsSection />
      </AnimatedSection>

      {/* COMMENT JE TRAVAILLE */}
      <AnimatedSection id="process">
        <WorkProcessSection />
      </AnimatedSection>

      {/* WORKFLOW — je pilote l'IA */}
      <AnimatedSection id="workflow">
        <WorkflowSection />
      </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection id="contact">
        <ContactSection />
      </AnimatedSection>
    </div>
  );
}

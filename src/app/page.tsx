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

      {/* CLIENTS */}
      <AnimatedSection>
        <ClientsSection />
      </AnimatedSection>

      {/* SIDE PROJECTS */}
      <AnimatedSection id="side-projects">
        <SideProjectsSection />
      </AnimatedSection>

      {/* PROJETS */}
      <AnimatedSection id="projets">
        <ProjectsSection />
      </AnimatedSection>

      {/* COMMENT JE TRAVAILLE */}
      <AnimatedSection id="process">
        <WorkProcessSection />
      </AnimatedSection>

      {/* WORKFLOW AI-ASSISTED */}
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

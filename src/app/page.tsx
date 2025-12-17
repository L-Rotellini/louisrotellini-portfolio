import ProjectsSection from "@/components/ProjectsSection";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";

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

      {/* CONTACT */}
      <AnimatedSection id="contact">
      <ContactSection />
    </AnimatedSection>
    </div>
  );
}


import ProjectsCarousel from "@/components/ProjectsCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";

export default function Home() {
  return (
    <div className="py-16 space-y-24">
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
      <ProjectsCarousel />
    </AnimatedSection>

      {/* CONTACT */}
      <AnimatedSection id="contact">
      <ContactSection />
    </AnimatedSection>
    </div>
  );
}


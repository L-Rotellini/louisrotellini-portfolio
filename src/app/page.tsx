import SkillGrid from "@/components/SkillGrid";
import OfferSection from "@/components/OfferSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="py-16 space-y-24">
      {/* HERO */}
      <AnimatedSection immediate>
        <HeroSection />
      </AnimatedSection>

    {/* ABOUT */}
    {/* <AnimatedSection id="a-propos">
      <AboutSection />
    </AnimatedSection> */}

      {/* OFFRE */}
      <AnimatedSection id="offre">
         <OfferSection />
      </AnimatedSection>

      {/* PROJETS */}
    <AnimatedSection id="projets">
      <ProjectsCarousel />
    </AnimatedSection>

      {/* SKILLS */}
    <AnimatedSection id="skills">
      <SkillGrid />
    </AnimatedSection>


      {/* CONTACT */}
      <AnimatedSection id="contact">
      <ContactSection />
    </AnimatedSection>
    </div>
  );
}


// src/app/page.tsx  (SERVER COMPONENT)
import SkillGrid from "@/components/SkillGrid";
import OfferSection from "@/components/OfferSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AnimatedSection from "@/components/AnimatedSection";
import FadeIn from "@/components/FadeIn";
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

function SkillBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <FadeIn>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <li
            key={it}
            className="text-xs text-[--muted] border border-[--surface-border] rounded-full px-2 py-1"
          >
            {it}
          </li>
        ))}
      </ul>
    </FadeIn>
  );
}


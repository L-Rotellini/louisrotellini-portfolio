import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import LiveGate from "@/components/LiveGate";
import MachineSection from "@/components/MachineSection";
import Manifesto from "@/components/Manifesto";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { getDictionary } from "@/i18n/getDictionary";
import { getProducts } from "@/data/getProducts";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);
  const products = getProducts(locale);

  return (
    <>
      <Hero dict={dict.hero} />
      <WorkSection dict={dict.work} products={products} />
      <LiveGate dict={dict.live} />
      <MachineSection dict={dict.machine} products={products} />
      <Manifesto dict={dict.manifesto} />
      <ApproachSection dict={dict.approach} />
      <AboutSection dict={dict.about} />
      <ContactSection dict={dict.contact} />
    </>
  );
}

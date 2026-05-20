import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import ModulesSection from "@/components/ModulesSection";
import AudienceSection from "@/components/AudienceSection";
import Differentials from "@/components/Differentials";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <ModulesSection />
      <AudienceSection />
      <Differentials />
      <FAQ />
      <CTAFinal />
    </>
  );
}
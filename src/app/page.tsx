import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FounderStory } from "@/components/sections/FounderStory";
import { VideoSection } from "@/components/sections/VideoSection";
import { CTASection } from "@/components/sections/CTASection";
import { GuideCTA } from "@/components/sections/GuideCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Piece Work Pro — Track Piece Work, Run Payroll, Control Job Costs",
  },
  description:
    "Track your crew's piece work, run payroll in minutes, and know exactly what every job costs. Built by a contractor, for contractors.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <VideoSection />
      <HowItWorks />
      <FounderStory />
      <GuideCTA />
      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JobSiteCostEstimator } from "@/components/tools/JobSiteCostEstimator";
import { CTASection } from "@/components/sections/CTASection";
import { Landmark, Shield, DollarSign } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Job Site Cost Estimator for Contractors — Free Tool",
  description:
    "Estimate your total job site cost across every category — labor, materials, equipment, permits, subs, disposal, insurance, and contingency. A detailed pre-bid cost audit.",
};

const benefits = [
  {
    icon: Landmark,
    title: "Every Cost Category Covered",
    desc: "Most estimators only cover materials and labor. This tool includes permits, subcontractors, site prep, disposal fees, insurance, and bonds — the costs that kill your margins when you forget them.",
  },
  {
    icon: Shield,
    title: "Built-In Contingency",
    desc: "Set a contingency percentage (default 10%) to cover the unexpected — weather delays, material price changes, scope creep, or anything else that eats into your profit.",
  },
  {
    icon: DollarSign,
    title: "Know Where Your Money Goes",
    desc: "See a full breakdown showing what percentage of your job cost goes to each category. Find where your money is going and identify the biggest areas to negotiate or save.",
  },
];

export default function JobSiteCostEstimatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Job Site Cost Estimator", href: "/tools/job-site-cost-estimator" }]} />
      <HowToJsonLd
        name="How to Estimate Your Total Job Site Cost"
        description="Enter every cost category — labor, materials, equipment, permits, subs, disposal, insurance — and see your total estimated job cost with a full breakdown."
        steps={[
          { name: "Enter labor details", text: "Input your labor hours, hourly rate, and crew size to calculate your total labor cost for the job." },
          { name: "Fill in each cost category", text: "Add costs for materials, equipment rental, permits, subcontractors, site prep, disposal fees, and insurance or bonds — only fill in the categories that apply to your job." },
          { name: "Set your contingency percentage", text: "Choose a contingency percentage (default 10%) to create a buffer for unexpected costs like weather delays, material price changes, or scope creep." },
          { name: "Review the cost breakdown", text: "See your total estimated job cost with a visual breakdown showing what percentage goes to each category, plus a contingency buffer and cost per square foot." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Job Site Cost Estimator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              A detailed pre-bid cost audit. Enter every cost category &mdash; labor, materials, equipment, permits,
              subs, disposal, insurance &mdash; and see your total estimated job cost with a full breakdown.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Description */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimateIn delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              How This Calculator Works
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted md:text-lg">
              <p>
                Enter your labor details (hours, rate, crew size), then fill in each cost category that applies to your
                job &mdash; materials, equipment rental, permits, subcontractors, site prep, disposal fees, and
                insurance or bonds. Set your contingency percentage and optionally enter square footage.
              </p>
              <p>
                You&apos;ll get a total estimated job cost with a visual breakdown showing what percentage of your
                total goes to each category, plus a contingency buffer and cost per square foot if you entered one.
              </p>
              <p>
                Use this before you build your bid price. The Bid Calculator adds your markup and profit on top.
                This tool makes sure you haven&apos;t missed any costs underneath.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <JobSiteCostEstimator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Don&apos;t Leave Money on the Table
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              The #1 reason contractors lose money on jobs isn&apos;t bad work &mdash; it&apos;s missed costs in the
              estimate. This tool makes sure every dollar is accounted for.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {benefits.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8 shadow-sm">
                  <div className="rounded-xl bg-brand-blue/10 p-3 w-fit">
                    <item.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

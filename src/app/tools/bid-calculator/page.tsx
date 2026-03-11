import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BidCalculator } from "@/components/tools/BidCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { RelatedReading } from "@/components/sections/RelatedReading";
import { Target, DollarSign, TrendingUp } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Construction Bid & Estimate Calculator — Free Tool",
  description:
    "Build accurate construction bids. Enter materials, labor, equipment, overhead, and profit to get a recommended bid price with full cost breakdown.",
};

const benefits = [
  {
    icon: Target,
    title: "Never Underbid Again",
    desc: "Enter your actual costs and desired profit margin. The calculator builds your bid price from the bottom up so nothing gets missed.",
  },
  {
    icon: DollarSign,
    title: "Full Cost Breakdown",
    desc: "See exactly how your bid price breaks down — materials, labor, equipment, overhead, and profit — so you can justify every dollar to the customer.",
  },
  {
    icon: TrendingUp,
    title: "Protect Your Margins",
    desc: "Set your desired profit markup and see the resulting profit margin. Know the difference so you price for the profit you actually want.",
  },
];

export default function BidCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Construction Bid Calculator", href: "/tools/bid-calculator" }]} />
      <HowToJsonLd
        name="How to Build an Accurate Construction Bid"
        description="Build accurate construction bids by entering materials, labor, equipment, overhead, and profit to get a recommended bid price with full cost breakdown."
        steps={[
          { name: "Enter material costs", text: "Enter the total cost of materials needed for the job." },
          { name: "Enter labor details", text: "Enter the number of labor hours, hourly labor rate, and crew size for the job." },
          { name: "Enter equipment costs", text: "Enter any equipment rental or usage costs for the job." },
          { name: "Set overhead percentage", text: "Enter your overhead percentage to account for indirect costs like insurance, office expenses, and vehicle costs." },
          { name: "Set desired profit markup", text: "Enter your desired profit markup percentage to ensure the bid includes your target profit." },
          { name: "Review your bid breakdown", text: "See your recommended bid price with a full breakdown of materials, labor, equipment, overhead, and profit, plus your profit margin and markup percentages." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Construction Bid Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your materials, labor hours, crew size, equipment costs, overhead, and desired profit to get a
              recommended bid price &mdash; with a full breakdown showing exactly where every dollar goes.
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
                Enter your material costs, labor hours, hourly labor rate, crew size, equipment costs, overhead
                percentage, and desired profit markup. The calculator builds your bid from the ground up.
              </p>
              <p>
                You&apos;ll get a recommended bid price with a full breakdown showing materials, labor, equipment,
                overhead, and profit &mdash; plus your profit margin and markup percentages so you know exactly
                what you&apos;re making.
              </p>
              <p>
                Build bids from real numbers instead of gut feelings. This calculator makes sure every cost is
                accounted for and your profit margin is built in &mdash; not an afterthought.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <BidCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Bid With Confidence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Too many contractors price jobs from gut feeling. This calculator helps you build estimates based on real
              numbers so every bid includes your costs and your profit.
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

      <RelatedReading links={[
        { title: "Job Costing for Contractors: Get It Right", href: "/blog/job-costing-for-contractors", description: "Accurate job costing is the foundation of accurate bids. Learn how to get your numbers right." },
        { title: "Roofing Piece Rate Guide: Setting Rates That Work", href: "/blog/roofing-piece-rate-guide", description: "Your labor rates drive your bid price. Make sure your piece rates are dialed in." },
      ]} />

      <CTASection />
    </>
  );
}

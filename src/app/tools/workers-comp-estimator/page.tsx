import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { WorkersCompEstimator } from "@/components/tools/WorkersCompEstimator";
import { CTASection } from "@/components/sections/CTASection";
import { GuideCTA } from "@/components/sections/GuideCTA";
import { Shield, DollarSign, AlertTriangle } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Workers' Comp Rate Estimator by Trade — Free Tool",
  description:
    "Estimate your workers' compensation insurance premium by trade. Select your industry, enter payroll details, and see your estimated annual and monthly premium.",
};

const benefits = [
  {
    icon: Shield,
    title: "Rates by Trade",
    desc: "Workers' comp rates vary widely by trade — roofing can be 10x higher than office work. Select your trade to see rates specific to your industry.",
  },
  {
    icon: DollarSign,
    title: "See the Per-Hour Cost",
    desc: "Know exactly how much workers' comp adds to your hourly labor cost. This is critical for accurate job pricing and bid estimates.",
  },
  {
    icon: AlertTriangle,
    title: "Factor in Your EMR",
    desc: "Your Experience Modification Rate (EMR) directly impacts your premium. An EMR below 1.0 means you're safer than average and pay less. Above 1.0 means you pay more.",
  },
];

export default function WorkersCompEstimatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Workers' Comp Estimator", href: "/tools/workers-comp-estimator" }]} />
      <HowToJsonLd
        name="How to Estimate Workers' Compensation Insurance Costs"
        description="Estimate your workers' compensation insurance premium by trade. Select your industry, enter payroll details, and see your estimated annual and monthly premium."
        steps={[
          { name: "Select your trade", text: "Choose your trade classification from 15 industry categories. Workers' comp rates vary widely by trade based on risk level." },
          { name: "Enter number of employees", text: "Enter how many employees you need to cover under your workers' comp policy." },
          { name: "Enter average hourly rate", text: "Enter the average hourly wage you pay your employees." },
          { name: "Enter hours per week", text: "Enter the average number of hours each employee works per week." },
          { name: "Enter your Experience Modification Rate", text: "Enter your EMR (Experience Modification Rate). An EMR below 1.0 means a better safety record and lower premiums; above 1.0 means higher premiums." },
          { name: "Review your premium estimate", text: "See your estimated annual and monthly premium, cost per hour per employee, and cost per employee per year." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Workers&apos; Comp Estimator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Select your trade, enter your payroll details, and see an estimated workers&apos; comp premium
              &mdash; including annual cost, monthly cost, and cost per employee per hour.
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
                Select your trade from 15 classifications, then enter your number of employees, average hourly rate,
                hours per week, and Experience Modification Rate (EMR). The calculator estimates your premium
                instantly.
              </p>
              <p>
                You&apos;ll see your estimated annual and monthly premium, cost per hour per employee, and cost per
                employee per year &mdash; all adjusted for your trade&apos;s risk level and your safety record.
              </p>
              <p>
                Workers&apos; comp is one of your biggest costs, especially in high-risk trades like roofing. This
                estimator helps you budget accurately and see how improving your EMR can save you thousands.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <WorkersCompEstimator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Workers&apos; Comp Is a Major Cost
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              For contractors, workers&apos; comp insurance can be one of the largest line items on your P&amp;L. Know
              the number so you can price it into every job.
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

      <GuideCTA />
      <CTASection />
    </>
  );
}

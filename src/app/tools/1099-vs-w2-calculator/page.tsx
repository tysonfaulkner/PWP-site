import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { W2Vs1099Calculator } from "@/components/tools/W2Vs1099Calculator";
import { CTASection } from "@/components/sections/CTASection";
import { GuideCTA } from "@/components/sections/GuideCTA";
import { DollarSign, Shield, AlertTriangle } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "1099 vs W-2 Cost Calculator for Contractors",
  description:
    "Compare the true cost of a W-2 employee vs 1099 contractor. Includes payroll taxes, workers' comp, benefits, and more for contractors.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "See Hidden Employer Costs",
    desc: "W-2 employees cost way more than their hourly wage. This calculator adds Social Security, Medicare, FUTA, SUTA, workers' comp, and benefits to show the real number.",
  },
  {
    icon: Shield,
    title: "Make an Informed Decision",
    desc: "1099 contractors have a higher hourly rate but no employer taxes. W-2 employees have a lower rate but hidden costs. See which one actually costs you less.",
  },
  {
    icon: AlertTriangle,
    title: "Know the Risks",
    desc: "Misclassifying a W-2 employee as a 1099 contractor can result in back taxes, penalties, and lawsuits. Make sure you're classifying workers correctly.",
  },
];

export default function W2Vs1099CalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", href: "/tools" },
          { name: "1099 vs W-2 Cost Calculator", href: "/tools/1099-vs-w2-calculator" },
        ]}
      />
      <HowToJsonLd
        name="How to Compare 1099 vs W-2 Worker Costs"
        description="Compare the true cost of a W-2 employee vs a 1099 contractor including payroll taxes, workers' comp, and benefits."
        steps={[
          {
            name: "Enter W-2 employee details",
            text: "Enter the W-2 hourly rate, hours per week, weeks per year, workers' comp rate, and benefits percentage.",
          },
          {
            name: "Enter 1099 contractor rate",
            text: "Enter the 1099 contractor's hourly rate. This is the flat rate with no employer-side taxes or benefits.",
          },
          {
            name: "Review the fully loaded W-2 cost",
            text: "See the true W-2 cost including Social Security, Medicare, FUTA, SUTA, workers' comp, and benefits added on top of the base wage.",
          },
          {
            name: "Compare annual costs",
            text: "Review the side-by-side annual cost comparison to see your savings and which worker classification is cheaper for your business.",
          },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              1099 vs. W-2 Cost Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your W-2 hourly rate and 1099 contractor rate to see the true annual cost of each &mdash; including
              payroll taxes, workers&apos; comp, and benefits that most contractors forget to factor in.
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
                Enter the W-2 hourly rate, hours per week, weeks per year, workers&apos; comp rate, and benefits
                percentage. Then enter the 1099 contractor&apos;s hourly rate. The calculator compares them head to
                head.
              </p>
              <p>
                You&apos;ll see the fully loaded W-2 cost &mdash; including Social Security, Medicare, FUTA, SUTA,
                workers&apos; comp, and benefits &mdash; compared against the flat 1099 cost. The tool shows your
                annual savings and which classification is cheaper.
              </p>
              <p>
                A $25/hour W-2 employee doesn&apos;t cost $25/hour. This tool reveals the true cost of each option so
                you can make smarter hiring and worker classification decisions.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <W2Vs1099Calculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              The True Cost of a Worker
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              A $25/hr W-2 employee doesn&apos;t cost $25/hr. By the time you add employer taxes, insurance, and
              benefits, you&apos;re paying $30&ndash;$35/hr. Know the real number before you hire.
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

      {/* W-2 vs 1099 Explainer */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              W-2 vs. 1099: What Contractors Need to Know
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-6">
            <AnimateIn delay={0.05}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">W-2 Employees</h3>
                <p className="mt-2 text-sm text-text-body">
                  You control when, where, and how they work. You withhold taxes from their paycheck and pay
                  employer-side taxes (Social Security, Medicare, FUTA, SUTA). You&apos;re also responsible for workers&apos;
                  comp insurance and any benefits you offer.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">1099 Contractors</h3>
                <p className="mt-2 text-sm text-text-body">
                  They control how the work gets done. You pay them a flat rate with no tax withholding and no
                  employer-side taxes. They handle their own taxes, insurance, and benefits. But they typically charge
                  a higher rate to cover these costs.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-text-primary">Misclassification warning</p>
                    <p className="mt-1 text-sm text-text-body">
                      You can&apos;t just call someone a 1099 contractor to avoid paying taxes. The IRS uses a
                      behavioral, financial, and relationship test to determine classification. If you control when and
                      how they work, they&apos;re likely a W-2 employee regardless of what your paperwork says. Penalties
                      for misclassification include back taxes, penalties, and potential lawsuits.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Employer cost breakdown */}
          <AnimateIn delay={0.2} className="mt-12">
            <h3 className="font-heading text-2xl text-text-primary">What Employers Pay on W-2 Workers</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-border-default">
              <table className="w-full text-sm">
                <thead className="bg-bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-text-primary">Tax / Cost</th>
                    <th className="px-4 py-3 text-left font-bold text-text-primary">Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default bg-white">
                  {[
                    ["Social Security", "6.2% of wages"],
                    ["Medicare", "1.45% of wages"],
                    ["FUTA (Federal Unemployment)", "0.6% of first $7,000"],
                    ["SUTA (State Unemployment)", "2.7% of first $7,000 (varies by state)"],
                    ["Workers' Comp Insurance", "5–15% (varies by trade and state)"],
                    ["Benefits (health, PTO, etc.)", "0–15% (varies by what you offer)"],
                  ].map(([tax, rate]) => (
                    <tr key={tax} className="hover:bg-bg-subtle">
                      <td className="px-4 py-3 text-text-body">{tax}</td>
                      <td className="px-4 py-3 font-mono text-text-body">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      <GuideCTA />
      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PayrollCalculator } from "@/components/tools/PayrollCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { Users, Shield, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Crew Payroll Cost Calculator",
  description:
    "Calculate your true crew payroll costs including labor burden. See what your workers really cost per hour, week, month, and year — including taxes, insurance, and workers' comp.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "See the True Cost",
    desc: "Your workers cost more than their hourly wage. This calculator factors in taxes, insurance, workers' comp, and other costs employers pay.",
  },
  {
    icon: Users,
    title: "Plan Your Crew Size",
    desc: "See how adding or removing workers impacts your total payroll before you make hiring decisions.",
  },
  {
    icon: Shield,
    title: "Price Jobs Accurately",
    desc: "Use your true labor cost — not just base wages — when bidding jobs so you don't leave money on the table.",
  },
];

export default function PayrollCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">Crew Payroll Cost Calculator</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your crew size, hourly rate, and labor burden percentage to see your true payroll cost &mdash;
              including the hidden costs most contractors miss.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <PayrollCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
              Why Your Payroll Costs More Than You Think
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Most contractors only think about base wages when pricing jobs. But the true cost of an employee includes
              taxes, insurance, and benefits that add 25&ndash;40% on top.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {benefits.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8 shadow-sm">
                  <div className="rounded-xl bg-brand-blue/10 p-3 w-fit">
                    <item.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Labor Burden Explainer */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
              What&apos;s Included in Labor Burden?
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Labor burden is the additional cost of employing a worker beyond their base wage. Here&apos;s what&apos;s
              typically included:
            </p>
          </AnimateIn>

          <div className="mt-12 space-y-6">
            <AnimateIn delay={0.05}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-body text-base font-bold text-text-primary">Payroll Taxes (7&ndash;10%)</h3>
                <p className="mt-2 text-sm text-text-body">
                  Social Security (6.2%), Medicare (1.45%), Federal Unemployment (FUTA), and State Unemployment (SUTA)
                  taxes that employers are required to pay.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-body text-base font-bold text-text-primary">Workers&apos; Compensation (5&ndash;15%)</h3>
                <p className="mt-2 text-sm text-text-body">
                  Required insurance that covers medical costs and lost wages for on-the-job injuries. Rates vary by
                  trade &mdash; roofing and construction typically have higher rates.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-body text-base font-bold text-text-primary">General Liability Insurance (3&ndash;8%)</h3>
                <p className="mt-2 text-sm text-text-body">
                  Protects your business against third-party claims for bodily injury or property damage that occur
                  during operations.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-body text-base font-bold text-text-primary">Benefits &amp; Other Costs (5&ndash;15%)</h3>
                <p className="mt-2 text-sm text-text-body">
                  Health insurance, retirement contributions, paid time off, training, uniforms, and tools. These costs
                  vary widely depending on what you offer your crew.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.25} className="mt-8">
            <p className="text-sm text-text-muted">
              <strong className="text-text-primary">Typical total:</strong> 25&ndash;40% of base wages for most
              contractors. Use our calculator above with your actual burden rate to see the true cost of your crew.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { LaborBurdenCalculator } from "@/components/tools/LaborBurdenCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { DollarSign, Shield, TrendingUp } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Labor Burden Calculator for Contractors — Free Tool",
  description:
    "Calculate your true labor burden rate including payroll taxes, workers' comp, health insurance, retirement, PTO, and more. See what each employee really costs per hour.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Every Cost Itemized",
    desc: "See exactly where your money goes — Social Security, Medicare, FUTA, SUTA, workers' comp, health insurance, retirement match, PTO, and any other costs you have.",
  },
  {
    icon: TrendingUp,
    title: "True Hourly Rate",
    desc: "Turn your base hourly wage into the real cost per hour. Most contractors are surprised to find out their $28/hr worker actually costs $38–$42/hr.",
  },
  {
    icon: Shield,
    title: "Bid Jobs Accurately",
    desc: "When you know your true labor cost, you can price jobs right. No more losing money because you forgot to factor in workers' comp or taxes.",
  },
];

export default function LaborBurdenCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", href: "/tools" },
          { name: "Labor Burden Calculator", href: "/tools/labor-burden-calculator" },
        ]}
      />
      <HowToJsonLd
        name="How to Calculate Labor Burden for Contractors"
        description="Calculate your true labor burden rate including payroll taxes, workers' comp, health insurance, retirement, PTO, and more to see what each employee really costs per hour."
        steps={[
          {
            name: "Enter the employee's hourly rate and hours per week",
            text: "Enter the base hourly wage and the number of hours the employee works per week.",
          },
          {
            name: "Enter workers' comp rate",
            text: "Enter your workers' compensation insurance rate as a percentage of wages. This varies by trade and state.",
          },
          {
            name: "Enter health insurance and retirement costs",
            text: "Enter the monthly health insurance cost per employee and the retirement match percentage, if applicable.",
          },
          {
            name: "Enter PTO days and other costs",
            text: "Enter the number of paid time off days per year and any additional monthly costs like tools, uniforms, or training.",
          },
          {
            name: "Review your true labor cost",
            text: "See the true cost per hour, total annual cost, burden rate percentage, and a full line-item breakdown of every employer cost from payroll taxes to benefits.",
          },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Labor Burden Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your employee&apos;s hourly rate, workers&apos; comp rate, benefits, and other costs to see
              exactly what they cost you per hour, per month, and per year &mdash; with a full line-item breakdown.
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
                Enter the employee&apos;s hourly rate, hours per week, workers&apos; comp rate, health insurance cost,
                retirement match percentage, PTO days, and any other monthly costs. The calculator adds it all up.
              </p>
              <p>
                You&apos;ll see the true cost per hour, total annual cost, burden rate as a percentage, and a full
                line-item breakdown of every dollar of employer burden &mdash; from payroll taxes to benefits to PTO.
              </p>
              <p>
                Most contractors know their workers&apos; pay rate but not their true cost. This calculator shows you
                the full picture so you can price jobs accurately and stop leaving money on the table.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <LaborBurdenCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Know Your True Labor Cost
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Every dollar you don&apos;t account for in labor costs is a dollar that comes out of your profit. This
              calculator makes sure you catch every cost.
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

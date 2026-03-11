import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { MinWageComplianceChecker } from "@/components/tools/MinWageComplianceChecker";
import { CTASection } from "@/components/sections/CTASection";
import { Shield, AlertTriangle, Scale } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Piece Rate Minimum Wage Compliance Checker — Free Tool",
  description:
    "Check if your piece rate pay meets federal and state minimum wage requirements. Calculate effective hourly rates and identify shortfall amounts to stay FLSA compliant.",
};

const benefits = [
  {
    icon: Shield,
    title: "Stay FLSA Compliant",
    desc: "The Fair Labor Standards Act requires that piece rate workers earn at least minimum wage for all hours worked. This tool checks that for you instantly.",
  },
  {
    icon: AlertTriangle,
    title: "Avoid Costly Penalties",
    desc: "DOL wage violations can result in back pay, liquidated damages, and fines. Catch shortfalls before they become lawsuits.",
  },
  {
    icon: Scale,
    title: "State-by-State Rates",
    desc: "Minimum wage varies by state. This tool uses current rates for all 50 states plus D.C. so you're checking against the right number.",
  },
];

export default function MinWageCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", href: "/tools" },
          { name: "Minimum Wage Compliance Checker", href: "/tools/min-wage-calculator" },
        ]}
      />
      <HowToJsonLd
        name="How to Check Piece Rate Minimum Wage Compliance"
        description="Check if your piece rate pay meets federal and state minimum wage requirements and calculate any make-up pay owed."
        steps={[
          {
            name: "Select your state",
            text: "Choose your state from the dropdown to use the correct state minimum wage rate (or the federal rate, whichever is higher).",
          },
          {
            name: "Enter the piece rate",
            text: "Enter the dollar amount you pay per piece or unit of work completed.",
          },
          {
            name: "Enter units completed per day",
            text: "Enter the average number of pieces or units a worker completes in a single workday.",
          },
          {
            name: "Enter hours per day and days per week",
            text: "Enter the number of hours worked per day and days worked per week to calculate total weekly hours.",
          },
          {
            name: "Review compliance results",
            text: "See the worker's effective hourly rate, whether it meets minimum wage, and — if it falls short — the exact shortfall per hour and per week you owe in make-up pay.",
          },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Minimum Wage Compliance Checker
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your piece rate, daily output, and state to instantly check if your workers&apos; earnings meet
              minimum wage requirements &mdash; and see exactly how much make-up pay you owe if they don&apos;t.
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
                Select your state from the dropdown, then enter the piece rate, units completed per day, hours per
                day, and days per week. The tool checks compliance automatically.
              </p>
              <p>
                You&apos;ll see the worker&apos;s effective hourly rate, whether it meets your state&apos;s minimum
                wage, and &mdash; if it falls short &mdash; the exact shortfall per hour and per week you&apos;d owe
                in make-up pay.
              </p>
              <p>
                Piece rate workers must still earn at least minimum wage for every hour worked. This tool catches
                compliance gaps before they turn into DOL audits or wage claims.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <MinWageComplianceChecker />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Why Minimum Wage Compliance Matters
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Piece rate pay is legal and effective &mdash; but only if workers earn at least minimum wage for every
              hour worked. Here&apos;s why you need to check.
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

      {/* How It Works */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              How Piece Rate Minimum Wage Works
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Under the FLSA, employers who pay piece rates must ensure that workers earn at least the applicable
              minimum wage for every hour worked. Here&apos;s the math:
            </p>
          </AnimateIn>

          <div className="mt-12 space-y-6">
            <AnimateIn delay={0.05}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">Step 1: Calculate Total Piece Rate Earnings</h3>
                <p className="mt-2 text-sm text-text-body">
                  Add up all the pieces completed during the workweek and multiply by the piece rate. This gives you
                  the worker&apos;s total gross earnings for the week.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">Step 2: Divide by Total Hours Worked</h3>
                <p className="mt-2 text-sm text-text-body">
                  Take the total piece rate earnings and divide by the total hours worked that week. This gives you the
                  worker&apos;s effective hourly rate.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">Step 3: Compare to Minimum Wage</h3>
                <p className="mt-2 text-sm text-text-body">
                  If the effective hourly rate is below the applicable minimum wage (federal or state, whichever is
                  higher), you must pay the difference as &ldquo;make-up pay.&rdquo;
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-text-primary">Don&apos;t forget overtime</p>
                    <p className="mt-1 text-sm text-text-body">
                      If a piece rate worker works over 40 hours in a week, you also owe overtime using the FLSA
                      half-time premium method. Use our{" "}
                      <a href="/tools/overtime-calculator" className="text-brand-blue hover:text-brand-blue-dark underline">
                        Piece Rate Overtime Calculator
                      </a>{" "}
                      to get that number right.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

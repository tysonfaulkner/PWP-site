import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PieceRateVsHourlyCalculator } from "@/components/tools/PieceRateVsHourlyCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Piece Rate vs Hourly Pay Comparison Calculator — Free Tool",
  description:
    "Compare piece rate pay vs hourly pay side by side. See which pay method earns more per day, week, month, and year. Free calculator for contractors and workers.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "See the Real Difference",
    desc: "Stop guessing which pay method earns more. Enter your numbers and see a clear side-by-side comparison of piece rate vs. hourly earnings.",
  },
  {
    icon: Users,
    title: "Make Smarter Hiring Decisions",
    desc: "Deciding whether to pay your crew hourly or by the piece? See exactly how each method impacts your labor costs before you commit.",
  },
  {
    icon: DollarSign,
    title: "Know Your Effective Rate",
    desc: "Every piece rate translates to an effective hourly rate. This calculator shows you that number so you can compare apples to apples.",
  },
];

export default function PieceRateVsHourlyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", href: "/tools" },
          { name: "Piece Rate vs Hourly Pay Calculator", href: "/tools/piece-rate-vs-hourly" },
        ]}
      />
      <HowToJsonLd
        name="How to Compare Piece Rate vs Hourly Pay"
        description="Compare piece rate pay vs hourly pay side by side to see which pay method earns more per day, week, month, and year."
        steps={[
          {
            name: "Enter your piece rate details",
            text: "Enter the piece rate (dollar amount per unit) and the number of units completed per day.",
          },
          {
            name: "Enter your hourly rate details",
            text: "Enter the hourly rate and the number of hours worked per day.",
          },
          {
            name: "Set your work schedule",
            text: "Enter the number of days worked per week to calculate weekly, monthly, and yearly totals.",
          },
          {
            name: "Compare earnings side by side",
            text: "Review the side-by-side comparison of daily, weekly, monthly, and yearly earnings for both pay methods — plus the annual difference and a clear winner callout.",
          },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Piece Rate vs. Hourly Pay Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your piece rate and hourly rate to see a side-by-side comparison of daily, weekly, monthly, and
              yearly earnings &mdash; so you know which pay method puts more money in your pocket.
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
                Enter the piece rate and daily unit output on one side, and the hourly rate and hours per day on the
                other. Set your days per week and the calculator compares them instantly.
              </p>
              <p>
                You&apos;ll see daily, weekly, monthly, and yearly earnings for both pay methods side by side &mdash;
                plus the annual difference in dollars and percentage, with a clear winner callout.
              </p>
              <p>
                Deciding between paying your crew piece rate or hourly? This calculator shows exactly which method
                costs more (or earns more) so you can pick the right pay structure for every job.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <PieceRateVsHourlyCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Which Pay Method Is Better?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Both piece rate and hourly pay have their place. The right choice depends on the work, the worker, and
              the job.
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

      {/* Pros and Cons */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Piece Rate vs. Hourly: Pros &amp; Cons
            </h2>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <AnimateIn delay={0.05}>
              <div className="rounded-xl border-2 border-brand-blue bg-white p-6">
                <h3 className="font-heading text-2xl text-brand-blue">Piece Rate Pay</h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Pros</p>
                    <ul className="mt-2 space-y-1 text-sm text-text-body">
                      <li>&bull; Workers earn more when they produce more</li>
                      <li>&bull; Predictable labor costs for the employer</li>
                      <li>&bull; Attracts and retains top performers</li>
                      <li>&bull; Self-motivating &mdash; no need to micromanage</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Cons</p>
                    <ul className="mt-2 space-y-1 text-sm text-text-body">
                      <li>&bull; Must still meet minimum wage requirements</li>
                      <li>&bull; Overtime calculations are more complex</li>
                      <li>&bull; Not ideal for tasks that are hard to measure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-xl border-2 border-brand-orange bg-white p-6">
                <h3 className="font-heading text-2xl text-brand-orange">Hourly Pay</h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Pros</p>
                    <ul className="mt-2 space-y-1 text-sm text-text-body">
                      <li>&bull; Simple and familiar payroll process</li>
                      <li>&bull; Works for any type of task</li>
                      <li>&bull; Straightforward overtime calculations</li>
                      <li>&bull; Guaranteed income for workers</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Cons</p>
                    <ul className="mt-2 space-y-1 text-sm text-text-body">
                      <li>&bull; No incentive to work faster</li>
                      <li>&bull; Labor costs are unpredictable</li>
                      <li>&bull; Top performers earn the same as slow workers</li>
                    </ul>
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

import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JobProfitCalculator } from "@/components/tools/JobProfitCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { GuideCTA } from "@/components/sections/GuideCTA";
import { RelatedReading } from "@/components/sections/RelatedReading";
import { Target, BarChart3, AlertTriangle } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Free Job Profit Calculator for Contractors",
  description:
    "Calculate your job profitability instantly. Enter your contract price, materials, labor, and overhead to see your gross profit, profit margin, and markup percentage.",
};

const benefits = [
  {
    icon: Target,
    title: "Know Before You Bid",
    desc: "Run the numbers on a job before you submit your bid. Make sure every job you take on is worth your time.",
  },
  {
    icon: BarChart3,
    title: "Margin vs. Markup",
    desc: "Understand the difference between profit margin and markup so you don't accidentally underprice your work.",
  },
  {
    icon: AlertTriangle,
    title: "Catch Losing Jobs Early",
    desc: "If the numbers don't work, you'll know before you break ground — not after the invoice goes out.",
  },
];

export default function JobProfitCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Tools", href: "/tools" },
          { name: "Job Profit Calculator", href: "/tools/job-profit-calculator" },
        ]}
      />
      <HowToJsonLd
        name="How to Calculate Job Profit for Contractors"
        description="Calculate your job profitability by entering your contract price, materials, labor, and overhead to see gross profit, profit margin, and markup percentage."
        steps={[
          {
            name: "Enter the contract price",
            text: "Enter the total contract price — the amount the customer is paying for the job.",
          },
          {
            name: "Enter material costs",
            text: "Enter the total cost of materials needed for the job.",
          },
          {
            name: "Enter labor costs",
            text: "Enter the total labor cost for the job, including wages and labor burden.",
          },
          {
            name: "Enter equipment and overhead costs",
            text: "Enter any equipment rental costs and your overhead percentage to capture all job expenses.",
          },
          {
            name: "Review your job profitability",
            text: "Hit calculate to see your gross profit in dollars, profit margin percentage, markup percentage, and break-even revenue — color-coded to show if the job makes or loses money.",
          },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">Job Profit Calculator</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your contract price and job costs to instantly see your gross profit, profit margin, and markup
              &mdash; so you know if a job&apos;s worth taking before you start.
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
                Enter the contract price, then break out your costs: materials, labor, equipment, and overhead
                percentage. The calculator runs the numbers instantly.
              </p>
              <p>
                You&apos;ll see your gross profit in dollars, profit margin as a percentage, markup percentage, and
                break-even revenue &mdash; color-coded so you can instantly tell if the job makes or loses money.
              </p>
              <p>
                Know before you start whether a job is worth taking. Stop guessing on margins and start pricing with
                real numbers so every job you bid is one you can profit from.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <JobProfitCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Price Every Job for Profit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Too many contractors bid jobs based on gut feeling. This calculator helps you make data-driven decisions
              about which jobs are worth your time.
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

      {/* Margin vs Markup Deep Dive */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Margin vs. Markup: The #1 Pricing Mistake
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Confusing margin and markup is one of the most expensive mistakes a contractor can make. Here&apos;s the
              difference:
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <AnimateIn delay={0.05}>
              <div className="rounded-xl border-2 border-brand-blue bg-white p-6">
                <h3 className="font-heading text-2xl text-brand-blue">Profit Margin</h3>
                <p className="mt-1 text-sm text-text-muted">Profit &divide; Revenue</p>
                <div className="mt-4 rounded-lg bg-bg-subtle p-4">
                  <p className="font-mono text-sm text-text-body">
                    $25,000 job &minus; $20,000 costs = $5,000 profit
                  </p>
                  <p className="mt-1 font-mono text-sm font-bold text-brand-blue">
                    $5,000 &divide; $25,000 = 20% margin
                  </p>
                </div>
                <p className="mt-4 text-sm text-text-body">
                  Margin tells you what percentage of the customer&apos;s payment is actual profit.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-xl border-2 border-brand-orange bg-white p-6">
                <h3 className="font-heading text-2xl text-brand-orange">Markup</h3>
                <p className="mt-1 text-sm text-text-muted">Profit &divide; Costs</p>
                <div className="mt-4 rounded-lg bg-bg-subtle p-4">
                  <p className="font-mono text-sm text-text-body">
                    $25,000 job &minus; $20,000 costs = $5,000 profit
                  </p>
                  <p className="mt-1 font-mono text-sm font-bold text-brand-orange">
                    $5,000 &divide; $20,000 = 25% markup
                  </p>
                </div>
                <p className="mt-4 text-sm text-text-body">
                  Markup tells you how much you added on top of your costs to get the selling price.
                </p>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.15} className="mt-8">
            <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-text-primary">The costly mistake</p>
                  <p className="mt-1 text-sm text-text-body">
                    If you want a 25% profit margin but apply a 25% markup to your costs, you&apos;ll only end up with a 20%
                    margin. On a $100,000 job, that&apos;s a $5,000 difference. Multiply that across all your jobs and
                    it adds up fast.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Quick reference table */}
          <AnimateIn delay={0.2} className="mt-12">
            <h3 className="font-heading text-2xl text-text-primary">Quick Reference: Margin to Markup</h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-border-default">
              <table className="w-full text-sm">
                <thead className="bg-bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-text-primary">Desired Margin</th>
                    <th className="px-4 py-3 text-left font-bold text-text-primary">Required Markup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default bg-white">
                  {[
                    ["10%", "11.1%"],
                    ["15%", "17.6%"],
                    ["20%", "25.0%"],
                    ["25%", "33.3%"],
                    ["30%", "42.9%"],
                    ["35%", "53.8%"],
                    ["40%", "66.7%"],
                    ["50%", "100.0%"],
                  ].map(([margin, markup]) => (
                    <tr key={margin} className="hover:bg-bg-subtle">
                      <td className="px-4 py-3 font-mono text-text-body">{margin}</td>
                      <td className="px-4 py-3 font-mono text-text-body">{markup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      <RelatedReading links={[
        { title: "Job Costing for Contractors: Get It Right", href: "/blog/job-costing-for-contractors", description: "Most contractors don't know what their jobs actually cost until it's too late. Here's how to fix that." },
        { title: "Roofing Piece Rate Guide: Setting Rates That Work", href: "/blog/roofing-piece-rate-guide", description: "Setting the right piece rates directly impacts your job profit margins." },
      ]} />

      <GuideCTA />
      <CTASection />
    </>
  );
}

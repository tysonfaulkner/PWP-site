import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JobProfitCalculator } from "@/components/tools/JobProfitCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { Target, BarChart3, AlertTriangle } from "lucide-react";

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
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">Job Profit Calculator</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your contract price and job costs to instantly see your gross profit, profit margin, and markup
              &mdash; so you know if a job&apos;s worth taking before you start.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <JobProfitCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
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
                  <h3 className="mt-4 font-heading text-xl text-text-primary">{item.title}</h3>
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
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
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
                <h3 className="font-body text-lg font-bold text-brand-blue">Profit Margin</h3>
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
                <h3 className="font-body text-lg font-bold text-brand-orange">Markup</h3>
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
            <h3 className="font-heading text-xl text-text-primary">Quick Reference: Margin to Markup</h3>
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

      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { PieceRateCalculator } from "@/components/tools/PieceRateCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { DollarSign, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Piece Rate Pay Calculator",
  description:
    "Calculate your piece rate earnings instantly. Enter your pay per piece, daily output, and hours to see daily, weekly, monthly, and yearly earnings plus your effective hourly rate.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "See Your True Earnings",
    desc: "Convert piece rate pay into daily, weekly, monthly, and yearly totals so you know exactly what you're making.",
  },
  {
    icon: Clock,
    title: "Know Your Hourly Equivalent",
    desc: "Compare your piece rate earnings to an hourly wage to see which pay structure works better for you.",
  },
  {
    icon: TrendingUp,
    title: "Plan for Growth",
    desc: "See how increasing your daily output or negotiating a higher piece rate impacts your total earnings.",
  },
];

export default function PieceRateCalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">Piece Rate Pay Calculator</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your pay per piece and daily output to instantly calculate your daily, weekly, monthly, and yearly
              earnings &mdash; plus your effective hourly rate.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <PieceRateCalculator />

      {/* How It Works */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">How Piece Rate Pay Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Piece rate pay is simple: you earn a fixed amount for each unit of work you complete, instead of being paid
              by the hour. The more you produce, the more you earn.
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

      {/* FAQ / Content Section */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-10">
            <AnimateIn delay={0.05}>
              <div>
                <h3 className="font-heading text-xl text-text-primary">What is piece rate pay?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Piece rate pay (also called piecework pay) is a compensation method where workers are paid a set
                  amount for each unit of work completed. It&apos;s common in roofing, construction, manufacturing, and
                  agriculture. For example, a roofer might earn $0.75 per shingle installed, or a framer might earn
                  $2.50 per sheet hung.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div>
                <h3 className="font-heading text-xl text-text-primary">
                  How do I calculate my effective hourly rate from piece work?
                </h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Divide your total daily piece rate earnings by the number of hours you worked that day. For example,
                  if you completed 200 units at $0.50 each ($100 total) in an 8-hour day, your effective hourly rate is
                  $12.50/hour. Our calculator does this math for you automatically.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <h3 className="font-heading text-xl text-text-primary">
                  Do piece rate workers still get overtime?
                </h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Yes. Under the Fair Labor Standards Act (FLSA), piece rate workers are entitled to overtime pay for
                  hours worked over 40 in a workweek. The overtime premium is calculated using the regular rate of pay,
                  which is determined by dividing total piece rate earnings by total hours worked.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div>
                <h3 className="font-heading text-xl text-text-primary">
                  Is there a minimum wage guarantee with piece rate pay?
                </h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Yes. Employers must ensure that piece rate workers earn at least the applicable minimum wage for all
                  hours worked. If a worker&apos;s piece rate earnings fall below minimum wage, the employer must make up the
                  difference. Tracking this accurately is one of the biggest compliance challenges with piece work.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

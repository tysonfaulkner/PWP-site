import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { AverageJobCalculator } from "@/components/tools/AverageJobCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { GuideCTA } from "@/components/sections/GuideCTA";
import { BarChart3, Target, TrendingUp } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Average Job Size Calculator for Contractors — Free Tool",
  description:
    "Calculate your average revenue and gross profit per job. Enter your job count, total revenue, and gross profit to see the numbers that drive your business.",
};

const benefits = [
  {
    icon: BarChart3,
    title: "Know Your Average",
    desc: "Your average job size is one of the most important numbers in your business. It drives your revenue forecast, break-even point, and how many jobs you need per month to hit your goals.",
  },
  {
    icon: Target,
    title: "Track Your Margins",
    desc: "Knowing your gross profit per job tells you which jobs are worth chasing and which ones eat your margins. Use it to focus on the work that actually makes you money.",
  },
  {
    icon: TrendingUp,
    title: "Set Pricing Goals",
    desc: "Once you know your average, you can set goals to raise it. Even a small increase in average job size can mean thousands more per month without adding jobs.",
  },
];

export default function AverageJobCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Average Job Size Calculator", href: "/tools/average-job-calculator" }]} />
      <HowToJsonLd
        name="How to Calculate Your Average Job Size"
        description="Enter your job count, total revenue, and gross profit to instantly see your average revenue per job, gross profit per job, and gross margin."
        steps={[
          { name: "Enter your job numbers", text: "Select a time period and enter the number of jobs completed, total revenue earned, and total gross profit (optional)." },
          { name: "Review your results", text: "The calculator instantly displays your average revenue per job, gross profit per job, total gross profit, and gross margin percentage." },
          { name: "Use the insights to price smarter", text: "Use your average job size and margin to set pricing goals, forecast revenue, and decide which jobs are worth pursuing." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Average Job Size Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your job count, total revenue, and gross profit to instantly see your average revenue per job, profit
              per job, and gross margin &mdash; the numbers that drive your business.
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
                Select a time period, enter how many jobs you completed, and plug in your total revenue and gross profit.
                The calculator does the rest.
              </p>
              <p>
                You&apos;ll instantly see your average revenue per job, gross profit per job, and overall gross margin
                &mdash; all calculated automatically.
              </p>
              <p>
                Knowing your average job size is critical for forecasting revenue, setting your break-even point, and
                deciding whether to pursue smaller volume at higher prices or higher volume at lower prices.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <AverageJobCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Your Average Job Size Drives Everything
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Revenue targets, crew scheduling, marketing spend &mdash; it all starts with knowing how much your
              average job is worth.
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

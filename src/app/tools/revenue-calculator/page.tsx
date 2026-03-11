import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { RevenueCalculator } from "@/components/tools/RevenueCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { TrendingUp, BarChart3, Target } from "lucide-react";
import { FAQPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Free Contractor Revenue Calculator",
  description:
    "Project your contracting company's weekly, monthly, and annual revenue. Enter your average job price, jobs per week, and crew size to forecast your business growth.",
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Forecast Your Growth",
    desc: "See how adding one more crew or picking up one extra job per week impacts your annual revenue. Small changes compound fast.",
  },
  {
    icon: BarChart3,
    title: "Revenue per Worker",
    desc: "Know how much revenue each crew member generates. This tells you whether it's time to hire — or time to get more efficient.",
  },
  {
    icon: Target,
    title: "Hit Your Break-Even",
    desc: "See exactly how many jobs per month you need just to cover overhead — before you pay your crew or take home a dime.",
  },
];

const faqs = [
  {
    question: "How much revenue should a contracting company generate?",
    answer: "It varies hugely by trade, crew size, and market. A solo roofer might generate $200K–$400K/year. A roofing company with 2–3 crews can hit $1M–$3M. The key isn't just revenue — it's knowing your costs so you keep a healthy margin on every job.",
  },
  {
    question: "What's a good revenue-per-worker number?",
    answer: "In construction trades, $100K–$200K in revenue per field worker is a common benchmark. If you're below $100K per worker, you may be underpricing jobs or running inefficient crews. Above $200K typically means your crew is productive and your pricing is strong.",
  },
  {
    question: "How do I grow revenue without adding more crews?",
    answer: "Three levers: raise your prices, complete jobs faster (so you can take on more work), or reduce downtime between jobs. Tracking piece work helps with all three — you see exactly how productive each crew is and can identify where you're leaving money on the table.",
  },
  {
    question: "Revenue vs. profit — why does it matter?",
    answer: "Revenue is what comes in the door. Profit is what you keep after paying your crew, materials, and overhead. A company doing $2M in revenue with a 5% margin keeps $100K. A company doing $1M with a 20% margin keeps $200K. Always track both numbers.",
  },
];

export default function RevenueCalculatorPage() {
  return (
    <>
      <FAQPageJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Contractor Revenue Calculator", href: "/tools/revenue-calculator" }]} />
      <HowToJsonLd
        name="How to Calculate Contractor Revenue"
        description="Project your contracting company's weekly, monthly, and annual revenue based on job volume and pricing."
        steps={[
          { name: "Enter your average job price", text: "Enter what you typically charge per job." },
          { name: "Enter jobs per week", text: "Enter how many jobs your company completes per week." },
          { name: "Enter crew size and overhead", text: "Enter your total crew size and monthly overhead costs." },
          { name: "View revenue projections", text: "See weekly, monthly, and annual revenue plus revenue per worker and break-even jobs needed." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">Contractor Revenue Calculator</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your average job price and weekly volume to project your company&apos;s weekly, monthly, and annual
              revenue &mdash; plus revenue per worker and your break-even point.
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
                Enter your average job price, the number of jobs you complete per week, your crew size, and your
                monthly overhead. The calculator projects your revenue across every time period.
              </p>
              <p>
                You&apos;ll see your projected weekly, monthly, and annual revenue &mdash; plus revenue per worker and
                the number of jobs you need each month just to break even on your overhead.
              </p>
              <p>
                Get a clear picture of where your business stands financially. Use it to set targets, plan growth, or
                figure out how many more jobs you need to hit your income goal.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <RevenueCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Know Your Numbers Before You Scale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Most contractors know how much they charge per job but can&apos;t tell you their annual revenue off the top of
              their head. This calculator makes it simple.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {benefits.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8 shadow-sm">
                  <div className="w-fit rounded-xl bg-brand-blue/10 p-3">
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

      {/* FAQ */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-10">
            <AnimateIn delay={0.05}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">How much revenue should a contracting company generate?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  It varies hugely by trade, crew size, and market. A solo roofer might generate $200K&ndash;$400K/year. A
                  roofing company with 2&ndash;3 crews can hit $1M&ndash;$3M. The key isn&apos;t just revenue &mdash;
                  it&apos;s knowing your costs so you keep a healthy margin on every job.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">What&apos;s a good revenue-per-worker number?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  In construction trades, $100K&ndash;$200K in revenue per field worker is a common benchmark. If you&apos;re
                  below $100K per worker, you may be underpricing jobs or running inefficient crews. Above $200K typically means
                  your crew is productive and your pricing is strong.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">How do I grow revenue without adding more crews?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Three levers: raise your prices, complete jobs faster (so you can take on more work), or reduce downtime
                  between jobs. Tracking piece work helps with all three &mdash; you see exactly how productive each crew is
                  and can identify where you&apos;re leaving money on the table.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">Revenue vs. profit &mdash; why does it matter?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Revenue is what comes in the door. Profit is what you keep after paying your crew, materials, and overhead.
                  A company doing $2M in revenue with a 5% margin keeps $100K. A company doing $1M with a 20% margin keeps
                  $200K. Always track both numbers.
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

import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BreakEvenCalculator } from "@/components/tools/BreakEvenCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { Target, TrendingUp, DollarSign } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contractor Break-Even Calculator — Free Tool",
  description:
    "Find out how many jobs per month you need to cover overhead, owner's salary, and fixed costs. See your break-even point in jobs and revenue.",
};

const benefits = [
  {
    icon: Target,
    title: "Know Your Number",
    desc: "Every contractor has a break-even number — the minimum jobs per month to cover all fixed costs. Know yours and you'll always know where you stand.",
  },
  {
    icon: TrendingUp,
    title: "Plan for Growth",
    desc: "Want to hire another crew member or lease a new truck? See how those fixed costs change your break-even point before you commit.",
  },
  {
    icon: DollarSign,
    title: "Set Revenue Goals",
    desc: "Turn your break-even point into a monthly revenue target. Everything above it is profit you keep.",
  },
];

export default function BreakEvenCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Break-Even Calculator", href: "/tools/break-even-calculator" }]} />
      <HowToJsonLd
        name="How to Calculate Your Break-Even Point as a Contractor"
        description="Find out how many jobs per month you need to cover overhead, owner's salary, and fixed costs. See your break-even point in jobs and revenue."
        steps={[
          { name: "Enter monthly overhead", text: "Enter your total monthly overhead costs including rent, insurance, vehicle payments, and other fixed expenses." },
          { name: "Enter owner's salary", text: "Enter the monthly salary you pay yourself (if applicable) as a fixed cost that must be covered." },
          { name: "Enter average job revenue", text: "Enter the average revenue you receive per job." },
          { name: "Enter average job cost", text: "Enter the average variable cost per job including materials, labor, and direct expenses." },
          { name: "Enter current jobs per month", text: "Enter how many jobs you're currently completing per month to see if you're above or below break-even." },
          { name: "Review your break-even point", text: "See how many jobs per month you need to break even, the revenue required, your margin per job, and whether you're currently profitable." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Contractor Break-Even Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your monthly overhead, owner&apos;s salary, and average job details to find out exactly how many
              jobs you need per month to break even &mdash; and how much you&apos;re making (or losing) right now.
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
                Enter your monthly overhead, owner&apos;s salary (if applicable), average job revenue, average job
                cost, and how many jobs you&apos;re currently completing per month. The calculator finds your
                break-even point.
              </p>
              <p>
                You&apos;ll see exactly how many jobs you need per month to break even, the revenue required to cover
                your fixed costs, your margin per job in dollars and percent, and whether you&apos;re currently
                profitable or in the red.
              </p>
              <p>
                Every contractor has a number &mdash; the minimum jobs per month to keep the lights on. This tool
                finds that number so you can stop guessing and start planning with confidence.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <BreakEvenCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Stop Guessing, Start Planning
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Most contractors don&apos;t know their break-even point. They just hope there&apos;s money left over at
              the end of the month. This calculator gives you a real number to aim for.
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

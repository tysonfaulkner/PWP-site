import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CrewProductivityCalculator } from "@/components/tools/CrewProductivityCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { Users, TrendingUp, DollarSign } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Crew Productivity Calculator for Contractors — Free Tool",
  description:
    "Measure your crew's productivity in units per man-hour, revenue per man-hour, and labor cost per unit. Compare crews, track efficiency, and make data-driven decisions.",
};

const benefits = [
  {
    icon: Users,
    title: "Measure Output per Man-Hour",
    desc: "Units per man-hour is the most important productivity metric in construction. Know yours and you can compare crews, set realistic schedules, and bid jobs accurately.",
  },
  {
    icon: TrendingUp,
    title: "Compare Crew Performance",
    desc: "Run the numbers for different crews or different weeks to see who's producing more. Use data instead of gut feeling to allocate your best crews to your biggest jobs.",
  },
  {
    icon: DollarSign,
    title: "Know Your Labor Cost per Unit",
    desc: "See exactly what each unit of output costs in labor. Use this number when setting piece rates or pricing jobs to make sure you're not losing money.",
  },
];

export default function CrewProductivityCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Crew Productivity Calculator", href: "/tools/crew-productivity-calculator" }]} />
      <HowToJsonLd
        name="How to Measure Crew Productivity for Contractors"
        description="Measure your crew's productivity in units per man-hour, revenue per man-hour, and labor cost per unit. Compare crews, track efficiency, and make data-driven decisions."
        steps={[
          { name: "Enter crew size", text: "Enter the number of workers on the crew you want to measure." },
          { name: "Enter hours and schedule", text: "Enter the hours per day and days per week your crew works." },
          { name: "Enter daily output", text: "Enter the total units your crew completes per day (e.g., squares, linear feet, pieces)." },
          { name: "Enter revenue per unit (optional)", text: "Optionally enter the revenue you earn per unit to calculate revenue per man-hour." },
          { name: "Enter labor cost per hour (optional)", text: "Optionally enter your labor cost per hour to calculate labor cost per unit and labor efficiency." },
          { name: "Review productivity metrics", text: "See units per man-hour, weekly output, revenue per man-hour, labor cost per unit, and labor efficiency percentage." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Crew Productivity Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your crew size, hours, and daily output to calculate units per man-hour, revenue per man-hour,
              and labor cost per unit &mdash; the key metrics that separate profitable crews from unprofitable ones.
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
                Enter your crew size, hours per day, days per week, and total units completed per day. Optionally add
                revenue per unit and labor cost per hour for deeper insights.
              </p>
              <p>
                You&apos;ll see units per man-hour, weekly output, and &mdash; if you add the optional fields &mdash;
                revenue per man-hour, labor cost per unit, and labor efficiency percentage.
              </p>
              <p>
                What gets measured gets improved. Track your crew&apos;s actual productivity so you can compare teams,
                find bottlenecks, and reward your fastest workers with data to back it up.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <CrewProductivityCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              What Gets Measured Gets Improved
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Most contractors have no idea how productive their crews really are. This calculator gives you the numbers
              that matter.
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

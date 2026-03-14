import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { JobDurationEstimator } from "@/components/tools/JobDurationEstimator";
import { CTASection } from "@/components/sections/CTASection";
import { GuideCTA } from "@/components/sections/GuideCTA";
import { Clock, Users, Calendar } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Job Duration Estimator for Contractors — Free Tool",
  description:
    "Estimate how long a job will take based on total scope, crew productivity, and crew size. See work days, man-hours, work weeks, and calendar days.",
};

const benefits = [
  {
    icon: Clock,
    title: "Schedule With Confidence",
    desc: "Stop guessing how long jobs will take. Enter your scope, productivity rate, and crew size to get a realistic timeline based on actual numbers — not gut feeling.",
  },
  {
    icon: Users,
    title: "Right-Size Your Crew",
    desc: "See how adding or removing workers changes the timeline. Find the sweet spot between crew cost and project duration so you can schedule jobs back-to-back without gaps.",
  },
  {
    icon: Calendar,
    title: "Set Customer Expectations",
    desc: "Give your customers accurate completion dates. The calendar day estimate accounts for weekends so you can commit to a timeline you'll actually hit.",
  },
];

export default function JobDurationEstimatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Job Duration Estimator", href: "/tools/job-duration-estimator" }]} />
      <HowToJsonLd
        name="How to Estimate Job Duration for Your Crew"
        description="Enter your total scope, crew productivity rate, and crew size to estimate how long a job will take in work days, man-hours, work weeks, and calendar days."
        steps={[
          { name: "Enter the total scope of work", text: "Input the total units of work for the job — squares, sheets, linear feet, or whatever unit you measure." },
          { name: "Set your crew productivity rate", text: "Enter your crew's productivity rate in units per man-hour. Use historical data or your Crew Productivity Calculator results for the most accurate estimate." },
          { name: "Configure crew size and schedule", text: "Enter your crew size, hours per day, and days per week to reflect your actual working schedule." },
          { name: "Review the duration estimate", text: "See the total man-hours required, estimated work days, work weeks, and calendar days (including weekends) to plan your schedule and set customer expectations." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Job Duration Estimator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your total scope, crew productivity rate, and crew size to estimate how long a job will take
              &mdash; in work days, man-hours, work weeks, and calendar days.
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
                Enter the total units of work (squares, sheets, linear feet, or whatever unit you measure), your
                crew&apos;s productivity rate in units per man-hour, your crew size, hours per day, and days per week.
              </p>
              <p>
                You&apos;ll see the total man-hours required, estimated work days, work weeks, and calendar days
                (including weekends) &mdash; giving you a complete picture of how long the job will take.
              </p>
              <p>
                Use this to schedule jobs accurately, set customer expectations, and figure out whether you need to
                add crew members to hit a deadline. Pair it with the Crew Productivity Calculator to dial in your
                units-per-man-hour number.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <JobDurationEstimator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Stop Guessing, Start Scheduling
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Missed deadlines cost you money and credibility. This estimator turns your crew&apos;s real productivity
              into a timeline you can count on.
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

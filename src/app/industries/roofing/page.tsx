import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Clock, DollarSign, ClipboardCheck, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Piece Rate Pay for Roofing Companies",
  description:
    "Track squares, pay your roofing crew by piece rate, and know exactly what every roof costs. Piece Work Pro was built by a roofer for roofers.",
};

export default function RoofingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Roofing</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Piece Rate Pay for Roofing Companies
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Stop guessing what each roof costs you in labor. Track squares, pay your crew accurately, and run payroll
              in minutes — not hours. Built by a roofing contractor who lived this problem every week.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8">
              <Button href="https://app.pieceworkpro.com/signup" variant="orange" size="lg" external>
                Get Started Free <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What is Piece Rate Pay in Roofing? */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
                What's Piece Rate Pay in Roofing?
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-body">
                <p>
                  Piece rate pay means you pay your crew based on how much work they complete — not how many hours they
                  stand on the roof. In roofing, the standard unit of measurement is the{" "}
                  <strong className="text-text-primary">square</strong>. One square equals 100 square feet of roofing.
                </p>
                <p>
                  A typical piece rate might be <strong className="text-text-primary">$30 per square</strong> for tear-off
                  and install. If a crew tears off and installs 40 squares in a day, they earn $1,200 to split. Simple.
                  Fair. Everyone knows exactly where they stand.
                </p>
                <p>
                  The problem? Tracking it all. Paper tickets get lost. Text messages get buried. And every Friday you
                  spend hours trying to figure out who did what on which job. That&apos;s why we built{" "}
                  <Link href="/features/time-tracking" className="font-medium text-brand-blue hover:underline">time tracking</Link>{" "}
                  and{" "}
                  <Link href="/features/payroll" className="font-medium text-brand-blue hover:underline">automated payroll</Link>{" "}
                  into Piece Work Pro.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Why Roofers Love Piece Work Pro */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">Why Roofers Love Piece Work Pro</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              We built this for one reason: to make your life easier on payday.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Faster Payroll",
                desc: "Your crew logs their own squares when they clock out. Payroll is ready to review in minutes, not hours. No more chasing people down on Friday afternoon.",
              },
              {
                icon: DollarSign,
                title: "Accurate Job Costing",
                desc: "Know your exact labor cost per roof. See it broken down by project, by crew, by day. No more guessing whether a job made money or lost it.",
              },
              {
                icon: ClipboardCheck,
                title: "Crew Accountability",
                desc: "Every crew member logs their own production. You review and approve it. Everyone sees the same numbers. No more arguments about who did what.",
              },
            ].map((benefit, i) => (
              <AnimateIn key={benefit.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <benefit.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl text-text-primary">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{benefit.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Roofing Crews */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">How It Works for Roofing Crews</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Four steps. That's all it takes to go from job site to payroll.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Crew Clocks In",
                desc: "Your crew opens the app on their phone and clocks in. GPS confirms they're on site. Takes 10 seconds.",
              },
              {
                step: "2",
                title: "Pick the Project",
                desc: "They select which job they're working on. All your active projects are listed right there. One tap.",
              },
              {
                step: "3",
                title: "Log Squares at Clock-Out",
                desc: "When the day is done, they clock out and enter how many squares they completed. Tear-off, install, whatever you track.",
              },
              {
                step: "4",
                title: "Admin Reviews & Approves",
                desc: "You see every entry on your dashboard. Approve, edit, or flag anything that looks off. Then run payroll with one click.",
              },
            ].map((step, i) => (
              <AnimateIn key={step.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue font-heading text-2xl text-white">
                    {step.step}
                  </div>
                  <h3 className="mt-5 font-heading text-2xl text-text-primary">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Track Job Costs Down to the Penny */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                <BarChart3 className="h-6 w-6 text-brand-blue" aria-hidden="true" />
              </div>
              <h2 className="mt-6 font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
                Track Job Costs Down to the Penny
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-body">
                <p>
                  Every roofing contractor wants to know one thing:{" "}
                  <strong className="text-text-primary">did this job make money?</strong> With Piece Work Pro, you
                  finally get a clear answer.
                </p>
                <p>
                  See your total labor cost per roof — broken down by crew member, by day, by task. Compare your
                  estimated labor cost against what you actually paid out. If you bid a job at $3,500 in labor and your
                  crew logged $4,100, you'll know immediately — not 30 days later when you wonder where the margin
                  went.
                </p>
                <p>
                  Spot patterns too. Which crews are consistently over? Who is logging more squares than the job should
                  have? Piece Work Pro gives you the data to have those conversations with facts, not feelings.
                </p>
                <p>
                  No more spreadsheets. No more guesswork. Just clear, accurate numbers you can trust.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
              Free Roofing Calculators
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Run the numbers on your next roof with these free tools.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Roofing Labor Calculator", desc: "Calculate labor cost per square for any roof.", href: "/tools/roofing-labor-calculator" },
              { title: "Piece Rate Calculator", desc: "See daily, weekly, and yearly piece rate earnings.", href: "/tools/piece-rate-calculator" },
              { title: "CA Piece Rate (AB 1513)", desc: "California rest period and minimum wage compliance.", href: "/tools/california-piece-rate" },
            ].map((tool) => (
              <AnimateIn key={tool.title}>
                <Link
                  href={tool.href}
                  className="group block rounded-2xl border border-border-default bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-heading text-lg text-text-primary group-hover:text-brand-blue">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-muted">{tool.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-blue">
                    Try it free <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="mt-10 text-center">
            <p className="text-sm text-text-muted">
              Piece Work Pro also works for{" "}
              <Link href="/industries/construction" className="font-medium text-brand-blue hover:underline">construction trades</Link> and{" "}
              <Link href="/industries/manufacturing" className="font-medium text-brand-blue hover:underline">manufacturing</Link>.
              Explore our{" "}
              <Link href="/features/job-costing" className="font-medium text-brand-blue hover:underline">job costing</Link> features.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  DollarSign,
  Target,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Job Costing — Know What Every Job Costs",
  description:
    "See exactly what every job costs you in labor. Track piece work and hours by project so you know if you're making money or losing it — before it's too late.",
};

const benefits = [
  {
    icon: BarChart3,
    title: "Labor Costs by Project",
    description:
      "See exactly what you spent in labor on every single job. Broken down by crew member, by task, by day. No guessing.",
  },
  {
    icon: TrendingUp,
    title: "Know If You're Profitable",
    description:
      "Compare your bid to your actual labor cost. See the margin on every job. Catch problems while you can still fix them.",
  },
  {
    icon: DollarSign,
    title: "Bid Smarter Next Time",
    description:
      "Use real job cost data to write better estimates. Stop leaving money on the table because you guessed wrong on labor.",
  },
  {
    icon: Target,
    title: "Catch Overruns Early",
    description:
      "See when a job is going over budget while it's still in progress. Not two weeks later when the invoice doesn't add up.",
  },
];

const comparisonItems = [
  {
    without: "You guess what a job cost after it's done",
    with: "You see exact labor costs in real time",
  },
  {
    without: "You underbid because your estimates are based on gut feel",
    with: "You bid with confidence using real data from past jobs",
  },
  {
    without: "You find out you lost money after it's too late",
    with: "You catch overruns while you can still adjust",
  },
  {
    without: "You have no idea which crew members are most productive",
    with: "You see output per person, per task, per project",
  },
];

export default function JobCostingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Job Costing
            </span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Know If You're Profitable on Every Job
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Most contractors have no idea what a job actually cost them in
              labor until it's over. Piece Work Pro shows you exactly where your
              money is going — on every project, in real time.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="https://app.pieceworkpro.com/signup"
                variant="orange"
                size="lg"
                external
              >
                Get Started Free{" "}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                href="/pricing"
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                View Pricing
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Screenshot + Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn direction="right">
              <Image
                src="/images/screenshots/jobcost-screenshot.png"
                alt="Piece Work Pro job costing report showing labor costs broken down by project and crew member"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg"
              />
            </AnimateIn>

            <div className="space-y-8">
              {benefits.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.1} direction="left">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                      <item.icon
                        className="h-5 w-5 text-brand-blue"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Without vs With */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Stop Guessing. Start Knowing.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Here's the difference between running blind and running with real
              numbers.
            </p>
          </AnimateIn>

          <div className="mt-16 space-y-4">
            {comparisonItems.map((item, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-border-default bg-white p-5">
                    <AlertTriangle
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      aria-hidden="true"
                    />
                    <p className="text-sm text-text-muted">{item.without}</p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                      aria-hidden="true"
                    />
                    <p className="text-sm font-medium text-text-primary">
                      {item.with}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn direction="right">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
                  Job Costing That Happens Automatically
                </h2>
                <p className="text-lg leading-relaxed text-text-body">
                  You don't need to set up a complicated system. Your crew is
                  already{" "}
                  <Link href="/features/time-tracking" className="font-medium text-brand-blue hover:underline">clocking in and logging piece work</Link>.
                  Piece Work Pro takes that data and turns it into job cost
                  reports automatically. Pair it with{" "}
                  <Link href="/features/payroll" className="font-medium text-brand-blue hover:underline">automated payroll reports</Link>{" "}
                  and you save hours every week.
                </p>
                <ul className="space-y-3">
                  {[
                    "Every clock-in is tied to a project",
                    "Every piece logged gets a dollar amount",
                    "Labor costs roll up by project in real time",
                    "Pull job cost reports for any date range",
                    "Compare actual costs to your original bid",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-body"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.15}>
              <div className="rounded-2xl border border-border-default bg-white p-8 shadow-sm lg:p-10">
                <h3 className="font-heading text-2xl text-text-primary">
                  Real Numbers from a Real Contractor
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Before Piece Work Pro, most contractors estimate labor costs
                  after the job is done — if they track them at all. With real
                  job costing data, you can see your margins on every project and
                  adjust your bids with confidence. No more hoping you made money.
                  You'll know.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-bg-subtle p-4 text-center">
                    <span className="font-mono text-2xl font-bold text-brand-blue">
                      100%
                    </span>
                    <p className="mt-1 text-xs text-text-muted">
                      Labor visibility
                    </p>
                  </div>
                  <div className="rounded-xl bg-bg-subtle p-4 text-center">
                    <span className="font-mono text-2xl font-bold text-brand-blue">
                      Real-time
                    </span>
                    <p className="mt-1 text-xs text-text-muted">
                      Cost tracking
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
              Free Job Costing Tools
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Try these free calculators to dial in your job costs before the work starts.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Job Profit Calculator", desc: "Check your margin and markup on any job.", href: "/tools/job-profit-calculator" },
              { title: "Bid Calculator", desc: "Build an accurate bid with real cost data.", href: "/tools/bid-calculator" },
              { title: "Break-Even Calculator", desc: "Find how many jobs cover your overhead.", href: "/tools/break-even-calculator" },
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
              See how job costing works for{" "}
              <Link href="/industries/roofing" className="font-medium text-brand-blue hover:underline">roofing crews</Link>,{" "}
              <Link href="/industries/construction" className="font-medium text-brand-blue hover:underline">construction trades</Link>, and{" "}
              <Link href="/industries/manufacturing" className="font-medium text-brand-blue hover:underline">manufacturing teams</Link>.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

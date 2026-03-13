import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  ArrowRight,
  FileSpreadsheet,
  Clock,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Payroll Reports — Run Payroll in Minutes",
  description:
    "Stop spending hours on payroll every week. Piece Work Pro calculates piece work and hourly pay automatically. Pull reports, export, and pay your crew in minutes.",
};

const painPoints = [
  "Chasing your crew for time cards every Friday",
  "Manually calculating piece work pay in a spreadsheet",
  "Fixing math errors after you've already paid someone",
  "Spending 2-3 hours on payroll that should take 10 minutes",
];

const benefits = [
  {
    icon: Zap,
    title: "Payroll in Minutes, Not Hours",
    description:
      "Pick a date range, pull the report, export. That's it. What used to take you hours on Friday night now takes minutes.",
  },
  {
    icon: DollarSign,
    title: "Automatic Pay Calculations",
    description:
      "Set your piece rates and hourly rates once. Piece Work Pro does the math on every time card — no manual calculations, no formula errors.",
  },
  {
    icon: FileSpreadsheet,
    title: "Export-Ready Reports",
    description:
      "Pull reports broken down by person, by day, by project. Export to CSV and hand it straight to your bookkeeper or payroll service.",
  },
  {
    icon: Clock,
    title: "Every Minute Accounted For",
    description:
      "Clock-in times, clock-out times, piece counts, and pay amounts — all captured automatically. No more guessing or rounding.",
  },
];

export default function PayrollPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Payroll Reports
            </span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Never Spend Hours on Payroll Again
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Your crew logs their time and piece work. Piece Work Pro
              calculates pay automatically. You pull one report and payroll is
              done. Every week. In minutes.
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

      {/* The Problem */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn direction="right">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
                  Sound Familiar?
                </h2>
                <p className="text-lg leading-relaxed text-text-body">
                  Every Friday, it's the same story. You're sitting at your
                  kitchen table with a stack of time cards, a calculator, and a
                  spreadsheet that stopped making sense three weeks ago.
                </p>
                <ul className="space-y-3">
                  {painPoints.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-body"
                    >
                      <AlertTriangle
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-text-primary">
                  There's a better way.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.15}>
              <Image
                src="/images/screenshots/payroll-screenshot.png"
                alt="Piece Work Pro payroll report showing crew pay breakdown by person and project"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              How Piece Work Pro Makes Payroll Easy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Everything your crew logs flows straight into your payroll reports.
              No re-entering data. No copy-paste errors. Just accurate numbers
              you can trust.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {benefits.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border-default bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="inline-flex rounded-xl bg-brand-blue/10 p-3">
                    <item.icon
                      className="h-6 w-6 text-brand-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Summary */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn direction="right">
              <Image
                src="/images/screenshots/payroll-screenshot.png"
                alt="Piece Work Pro payroll export view with crew hours and piece work totals"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg"
              />
            </AnimateIn>

            <AnimateIn direction="left" delay={0.15}>
              <div className="space-y-6">
                <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
                  From Time Card to Paycheck in Three Steps
                </h2>
                <ol className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "Your crew logs time and piece work",
                      desc: "They clock in, do the work, clock out, and enter their pieces using our time tracking tools. It happens automatically throughout the week.",
                    },
                    {
                      num: "2",
                      title: "You review and approve",
                      desc: "Open the dashboard. See every time card. Make edits if needed. Approve with one click.",
                    },
                    {
                      num: "3",
                      title: "Pull the report and pay",
                      desc: "Select the date range. Export the payroll report. Hand it to your bookkeeper or enter it yourself. Done.",
                    },
                  ].map((item) => (
                    <li key={item.num} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-blue font-mono text-sm font-bold text-white">
                        {item.num}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg text-text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-muted">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
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
              Free Payroll Tools
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Run the numbers before payday with these free calculators.
            </p>
          </AnimateIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Payroll Cost Calculator", desc: "See the true cost of your crew including labor burden.", href: "/tools/payroll-calculator" },
              { title: "Overtime Calculator", desc: "Calculate FLSA-compliant overtime for piece rate workers.", href: "/tools/overtime-calculator" },
              { title: "1099 vs. W-2 Calculator", desc: "Compare the cost of employees vs. contractors.", href: "/tools/1099-vs-w2-calculator" },
              { title: "Labor Burden Calculator", desc: "See the full cost beyond base wages.", href: "/tools/labor-burden-calculator" },
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
              Payroll works hand-in-hand with{" "}
              <Link href="/features/time-tracking" className="font-medium text-brand-blue hover:underline">time tracking</Link> and{" "}
              <Link href="/features/job-costing" className="font-medium text-brand-blue hover:underline">job costing</Link>.
              See how it works for{" "}
              <Link href="/industries/roofing" className="font-medium text-brand-blue hover:underline">roofing</Link>,{" "}
              <Link href="/industries/construction" className="font-medium text-brand-blue hover:underline">construction</Link>, and{" "}
              <Link href="/industries/manufacturing" className="font-medium text-brand-blue hover:underline">manufacturing</Link>.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

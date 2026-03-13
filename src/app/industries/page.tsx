import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";
import { HardHat, Home, Factory, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries — Roofing, Construction & More",
  description:
    "Piece Work Pro helps roofing, construction, and manufacturing companies track piece work, run payroll, and control job costs. See how it works for your trade.",
};

const industries = [
  {
    title: "Roofing",
    href: "/industries/roofing",
    icon: Home,
    description:
      "Track squares, pay crews by the roof, and know exactly what every job costs. Built by a roofer who lived the problem.",
  },
  {
    title: "Construction",
    href: "/industries/construction",
    icon: HardHat,
    description:
      "From framing to finish work, track piece rates across every trade on your job site. One app for your entire crew.",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    icon: Factory,
    description:
      "Pay per unit produced. Track output in real time. Run payroll in minutes instead of hours. Built for the factory floor.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Industries</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Piece Work Tracking for Every Trade
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Whether you run a roofing crew, a construction company, or a manufacturing operation, Piece Work Pro gives
              you the tools to track production, pay your people accurately, and know your true job costs.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <AnimateIn key={industry.title} delay={i * 0.1}>
                <Link
                  href={industry.href}
                  className="group flex h-full flex-col rounded-2xl border border-border-default bg-white p-8 transition-all hover:border-brand-blue hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <industry.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h2 className="mt-6 font-heading text-3xl text-text-primary">{industry.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{industry.description}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-brand-blue group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Piece Work Tracking */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Why Piece Work Tracking Matters
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Every industry that pays by the piece faces the same core problems. Piece Work Pro solves all of them.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Accurate Pay, No Arguments",
                desc: "When every worker logs their own production and you review it before payroll runs, there is nothing to argue about on payday. The numbers are the numbers — logged by the worker, approved by you.",
              },
              {
                title: "Real Job Costing",
                desc: "Stop guessing what a project cost you in labor. When every piece is tied to a project, you know exactly what you spent — and whether the bid was right. Use that data to bid smarter next time.",
              },
              {
                title: "Faster Payroll",
                desc: "No more Friday night spreadsheet marathons. Your crew logs their work during the week. You pull one report and payroll is done in minutes — not hours. Every dollar accounted for.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8">
                  <h3 className="font-heading text-2xl text-text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.desc}</p>
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

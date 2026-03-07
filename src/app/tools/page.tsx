import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";
import { Calculator, Users, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Contractor Calculators & Tools",
  description:
    "Free calculators for contractors: piece rate pay calculator, crew payroll cost calculator, and job profit calculator. No signup required.",
};

const tools = [
  {
    icon: Calculator,
    title: "Piece Rate Pay Calculator",
    desc: "Calculate your piece rate earnings instantly. Enter your pay per piece and daily output to see daily, weekly, monthly, and yearly earnings plus your effective hourly rate.",
    href: "/tools/piece-rate-calculator",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: Users,
    title: "Crew Payroll Cost Calculator",
    desc: "See the true cost of your crew including labor burden. Enter your crew size, hourly rate, and burden percentage to see what your workers really cost per hour, week, month, and year.",
    href: "/tools/payroll-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: Target,
    title: "Job Profit Calculator",
    desc: "Know if a job is profitable before you start. Enter your contract price and costs to see your gross profit, profit margin, and markup percentage.",
    href: "/tools/job-profit-calculator",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
];

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tools</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">
              Contractor Calculators
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Free calculators built for contractors who do piece work. No signup required &mdash; just enter your
              numbers and get answers.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <AnimateIn key={tool.title} delay={index * 0.1}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-default bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-1 flex-col p-8">
                    <div className={`rounded-xl ${tool.color} p-3 w-fit`}>
                      <tool.icon className={`h-6 w-6 ${tool.iconColor}`} aria-hidden="true" />
                    </div>
                    <h2 className="mt-4 font-heading text-xl text-text-primary transition-colors group-hover:text-brand-blue">
                      <Link href={tool.href} className="after:absolute after:inset-0">
                        {tool.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{tool.desc}</p>
                    <div className="mt-6 flex items-center gap-1 text-sm font-bold text-brand-blue transition-colors group-hover:text-brand-blue-dark">
                      Use Calculator <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

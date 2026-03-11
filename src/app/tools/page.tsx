import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";
import { Calculator, Users, Target, TrendingUp, Clock, ArrowRight, Shield, DollarSign, FileText, Scale, BarChart3, Hammer, BookOpen, Wrench, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Contractor Calculators & Tools",
  description:
    "20 free calculators and tools for contractors: piece rate pay, payroll cost, job profit, bid estimates, labor burden, compliance, and more. No signup required.",
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
  {
    icon: TrendingUp,
    title: "Contractor Revenue Calculator",
    desc: "Project your company's weekly, monthly, and annual revenue. Enter your average job price and volume to forecast growth and find your break-even point.",
    href: "/tools/revenue-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: Clock,
    title: "Piece Rate Overtime Calculator",
    desc: "Calculate FLSA-compliant overtime for piece rate workers using the half-time premium method. Don't risk DOL audits — get the math right.",
    href: "/tools/overtime-calculator",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: Shield,
    title: "Min Wage Compliance Checker",
    desc: "Check if your piece rate pay meets federal and state minimum wage requirements. See your effective hourly rate and any shortfall amounts.",
    href: "/tools/min-wage-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: Scale,
    title: "Piece Rate vs. Hourly Calculator",
    desc: "Compare piece rate pay vs hourly pay side by side. See which pay method earns more per day, week, month, and year.",
    href: "/tools/piece-rate-vs-hourly",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: FileText,
    title: "1099 vs. W-2 Cost Calculator",
    desc: "Compare the true cost of a W-2 employee vs a 1099 contractor — including payroll taxes, workers' comp, and benefits.",
    href: "/tools/1099-vs-w2-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: DollarSign,
    title: "Labor Burden Calculator",
    desc: "See the full cost of an employee beyond their base wage. Includes taxes, workers' comp, health insurance, retirement, PTO, and more.",
    href: "/tools/labor-burden-calculator",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: BarChart3,
    title: "Break-Even Calculator",
    desc: "Find out how many jobs per month you need to cover overhead, owner's salary, and fixed costs. Know your break-even point.",
    href: "/tools/break-even-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: Wrench,
    title: "Construction Bid Calculator",
    desc: "Build accurate job estimates. Enter materials, labor, equipment, overhead, and profit to get a recommended bid price.",
    href: "/tools/bid-calculator",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: Hammer,
    title: "Roofing Labor Cost Calculator",
    desc: "Calculate roofing labor cost per square. Enter roof size, crew size, and piece rate to see total labor cost and per-worker earnings.",
    href: "/tools/roofing-labor-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: BookOpen,
    title: "Piece Rate Guide by Trade",
    desc: "Reference guide of typical piece rates across construction trades — roofing, framing, drywall, painting, flooring, siding, fencing, and concrete.",
    href: "/tools/piece-rate-guide",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: Users,
    title: "Crew Productivity Calculator",
    desc: "Measure your crew's output in units per man-hour, revenue per man-hour, and labor cost per unit. The metrics that matter.",
    href: "/tools/crew-productivity-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: Shield,
    title: "Workers' Comp Estimator",
    desc: "Estimate your workers' comp premium by trade. See annual cost, monthly cost, and cost per employee per hour.",
    href: "/tools/workers-comp-estimator",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: Scale,
    title: "CA Piece Rate Calculator (AB 1513)",
    desc: "Calculate AB 1513 rest period pay, recovery period pay, and minimum wage compliance for California piece rate workers.",
    href: "/tools/california-piece-rate",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: Target,
    title: "State Minimum Wage Guide",
    desc: "Current minimum wage rates for all 50 states plus D.C. Essential reference for contractors paying piece rate workers.",
    href: "/tools/state-minimum-wage",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: BarChart3,
    title: "Average Job Size Calculator",
    desc: "Enter your recent job prices to see your average, median, min, max, and total revenue. Know your numbers so you can price smarter.",
    href: "/tools/average-job-calculator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
  },
  {
    icon: Landmark,
    title: "Job Site Cost Estimator",
    desc: "A detailed pre-bid cost audit covering labor, materials, equipment, permits, subs, disposal, insurance, and contingency. Don't miss a single cost.",
    href: "/tools/job-site-cost-estimator",
    color: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: Clock,
    title: "Job Duration Estimator",
    desc: "Estimate how long a job will take based on scope, crew productivity, and crew size. See work days, man-hours, and calendar days.",
    href: "/tools/job-duration-estimator",
    color: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
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
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <AnimateIn key={tool.title} delay={index * 0.1}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-default bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex flex-1 flex-col p-8">
                    <div className={`rounded-xl ${tool.color} p-3 w-fit`}>
                      <tool.icon className={`h-6 w-6 ${tool.iconColor}`} aria-hidden="true" />
                    </div>
                    <h2 className="mt-4 font-heading text-2xl text-text-primary transition-colors group-hover:text-brand-blue">
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

import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  ArrowRight,
  Hammer,
  Wrench,
  Zap,
  Pipette,
  PaintBucket,
  TrendingUp,
  Shield,
  Users,
  Rocket,
  Settings,
  LayoutDashboard,
  FolderOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Piece Work Pay in Construction",
  description:
    "Track piece work pay across every construction trade — carpenters, masons, electricians, plumbers, and painters. Simplify payroll and control job costs.",
};

export default function ConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Construction</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Piece Work Pay Across Construction Trades
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Carpenters, masons, electricians, plumbers, painters — every trade has its own unit of work. Piece Work Pro
              tracks them all in one place so you can run payroll fast and know exactly what every project costs.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8">
              <Button href="https://app.pieceworkpro.com/signin" variant="orange" size="lg" external>
                Get Started Free <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How Piece Work Pay Works in Construction */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
                How Piece Work Pay Works in Construction
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-body">
                <p>
                  Piece work pay is simple: you pay your crew based on{" "}
                  <strong className="text-text-primary">what they produce</strong>, not how long they take. A framer
                  gets paid per wall framed. A mason gets paid per block laid. A painter gets paid per room finished.
                </p>
                <p>
                  It's the oldest pay structure in the trades — and for good reason. Workers earn more when they hustle.
                  You get predictable labor costs. Everyone wins.
                </p>
                <p>
                  The challenge is tracking it. When you have multiple trades on the same job site, each with different
                  piece rates, payroll gets complicated fast. That's where Piece Work Pro comes in. Your crew logs their
                  own production. You review and approve. Payroll runs itself.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Which Trades Use Piece Work? */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">Which Trades Use Piece Work?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Almost every construction trade can benefit from piece rate pay. Here are the most common.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Hammer,
                title: "Carpenters & Framers",
                desc: "Pay per wall framed, per linear foot of trim installed, or per unit of sheathing. Framers are one of the most common trades to use piece work because production is easy to measure.",
              },
              {
                icon: Wrench,
                title: "Masons & Bricklayers",
                desc: "Pay per block laid, per square foot of stone veneer, or per linear foot of retaining wall. Masonry piece rates have been standard in the trade for decades.",
              },
              {
                icon: Zap,
                title: "Electricians",
                desc: "Pay per outlet wired, per panel installed, or per fixture hung. Piece work in electrical is common for rough-in work on new construction with repeatable tasks.",
              },
              {
                icon: Pipette,
                title: "Plumbers",
                desc: "Pay per fixture set, per linear foot of pipe run, or per drain assembly. Plumbing piece rates work best on new builds where the scope is consistent and measurable.",
              },
              {
                icon: PaintBucket,
                title: "Painters",
                desc: "Pay per room, per square foot, or per exterior side. Painting is one of the easiest trades to pay by piece rate because the output is visible and hard to argue.",
              },
              {
                icon: Settings,
                title: "Other Trades",
                desc: "Drywall hangers, siding installers, flooring crews, insulation teams — if you can count it, you can pay piece rate on it. Piece Work Pro handles any unit of measurement.",
              },
            ].map((trade, i) => (
              <AnimateIn key={trade.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <trade.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl text-text-primary">{trade.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{trade.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Construction Businesses */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Benefits for Construction Businesses
            </h2>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {[
              {
                icon: TrendingUp,
                title: "Higher Productivity",
                desc: "When workers earn more for producing more, they move faster. Piece rate crews consistently outperform hourly crews by 20-40%. You finish jobs sooner and move on to the next one.",
              },
              {
                icon: Shield,
                title: "Predictable Costs",
                desc: "You know your labor cost before the job starts. If you set a rate of $0.50 per block and the wall is 2,000 blocks, your labor cost is $1,000. Period. No overtime surprises.",
              },
              {
                icon: Users,
                title: "Total Transparency",
                desc: "Your crew sees exactly how their pay is calculated. No questions on payday. No arguments about hours. The numbers are the numbers — logged by the worker and approved by you.",
              },
              {
                icon: Rocket,
                title: "Worker Motivation",
                desc: "Good workers love piece rate because they control their own paycheck. The harder they work, the more they earn. You attract and keep your best people by letting them earn what they deserve.",
              },
            ].map((benefit, i) => (
              <AnimateIn key={benefit.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border-default bg-white p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                    <benefit.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-text-primary">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{benefit.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started with Piece Work Pro */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
                Getting Started with Piece Work Pro
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-body">
                <p>
                  Setting up takes about 10 minutes. No training. No long onboarding calls. Just sign up, add your crew,
                  and start tracking.
                </p>
              </div>
            </AnimateIn>
            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Settings,
                  title: "Set Up in Minutes",
                  desc: "Create your account, add your crew members, and set your piece rates. You can have different rates for different trades, different projects, or different tasks. It's completely flexible.",
                },
                {
                  icon: LayoutDashboard,
                  title: "Customize Rates Per Trade",
                  desc: "Pay your framers $150 per wall, your electricians $12 per outlet, and your painters $200 per room — all in the same system. Each trade gets its own piece rate settings.",
                },
                {
                  icon: FolderOpen,
                  title: "Track Multiple Projects",
                  desc: "Running three job sites at once? No problem. Your crew selects which project they're working on when they clock in. You see all production across every project in one dashboard.",
                },
              ].map((step, i) => (
                <AnimateIn key={step.title} delay={i * 0.1}>
                  <div className="flex gap-5 rounded-2xl border border-border-default bg-white p-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                      <step.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-text-primary">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

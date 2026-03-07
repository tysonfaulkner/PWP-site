import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  ArrowRight,
  Package,
  TrendingUp,
  DollarSign,
  Users,
  ShieldAlert,
  Scale,
  Target,
  Gauge,
  FileBarChart,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Piece Work in Manufacturing",
  description:
    "Track piece work in manufacturing — pay per unit produced, monitor output in real time, and run payroll in minutes. Built for assembly, packaging, and fabrication.",
};

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Manufacturing</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">
              Piece Work Tracking for Manufacturing
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Pay per unit produced. Track output across shifts. Run payroll in minutes. Piece Work Pro gives
              manufacturers the tools to manage piece rate pay without the spreadsheet headaches.
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

      {/* Piece Work in Manufacturing */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">Piece Work in Manufacturing</h2>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-body">
                <p>
                  Piece work in manufacturing means paying workers for{" "}
                  <strong className="text-text-primary">each unit they produce</strong>. Assemble 200 widgets at $0.75
                  each? That's $150. Pack 500 boxes at $0.30 each? That's $150. The math is straightforward. The
                  incentive is clear.
                </p>
                <p>
                  This pay model is common in assembly lines, packaging operations, fabrication shops, and any
                  environment where output is countable and consistent. Workers who produce more, earn more. You get
                  predictable per-unit labor costs.
                </p>
                <p>
                  The hard part isn't the math — it's the tracking. When you have 30 workers across two shifts
                  producing different products at different rates, payroll turns into a nightmare. Piece Work Pro
                  eliminates that nightmare.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Benefits of Piece Rate Pay for Factories */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
              Benefits of Piece Rate Pay for Factories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Piece rate pay aligns your workers' goals with yours. Here's why it works.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Higher Output",
                desc: "Workers on piece rate consistently produce 15-30% more than hourly workers. When people control their own paycheck, they find ways to work smarter and faster.",
              },
              {
                icon: DollarSign,
                title: "Lower Per-Unit Costs",
                desc: "Your labor cost per unit stays fixed. If you pay $0.50 per unit, it costs $0.50 whether the worker makes 100 or 500 that day. Your margins stay predictable.",
              },
              {
                icon: Users,
                title: "Motivated Workers",
                desc: "Top performers love piece rate because they earn more than they would on hourly. You attract the best workers and keep them because they're rewarded for their effort.",
              },
            ].map((benefit, i) => (
              <AnimateIn key={benefit.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <benefit.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-body text-lg font-bold text-text-primary">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{benefit.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges and Solutions */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">Common Challenges and Solutions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Piece rate pay is powerful, but it comes with real challenges. Here's how to handle them.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldAlert,
                title: "Quality vs. Speed",
                desc: "The biggest concern: workers rush and quality drops. The fix? Set clear quality standards and tie piece rate approval to quality checks. Piece Work Pro lets you review and approve every entry before it hits payroll.",
              },
              {
                icon: Scale,
                title: "Fair Rate Setting",
                desc: "Set your rates too low and nobody wants the work. Set them too high and you lose margin. Start by timing experienced workers, calculate a fair hourly equivalent, then adjust based on real data. Piece Work Pro tracks it all so you can refine over time.",
              },
              {
                icon: Target,
                title: "Tracking Accuracy",
                desc: "Paper-based tracking is where errors happen. Workers forget to log units. Supervisors lose count. With Piece Work Pro, workers log production digitally as they go. No lost paperwork. No end-of-week guesswork.",
              },
            ].map((challenge, i) => (
              <AnimateIn key={challenge.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10">
                    <challenge.icon className="h-6 w-6 text-brand-orange" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-body text-lg font-bold text-text-primary">{challenge.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{challenge.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How Piece Work Pro Helps */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">How Piece Work Pro Helps</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">
              We built Piece Work Pro to take the pain out of piece rate management. Here's what you get.
            </p>
          </AnimateIn>
          <div className="mt-12 space-y-6">
            {[
              {
                icon: Gauge,
                title: "Automated Tracking",
                desc: "Workers log their output from their phone or a shared device on the floor. No paper forms. No supervisor counting. Every entry is timestamped and tied to a specific product and shift.",
              },
              {
                icon: FileBarChart,
                title: "Real-Time Reporting",
                desc: "See production numbers as they come in. Know how much your team has produced today, this week, or this month. Spot slowdowns before they become problems. Compare worker output side by side.",
              },
              {
                icon: Clock,
                title: "Payroll in Minutes",
                desc: "When payday comes, everything is already calculated. Review the entries, approve them, and export your payroll report. What used to take hours now takes minutes. No errors. No missed entries.",
              },
            ].map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-2xl border border-border-default bg-white p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                    <feature.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-body text-lg font-bold text-text-primary">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{feature.desc}</p>
                  </div>
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

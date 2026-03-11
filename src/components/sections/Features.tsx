"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Clock, DollarSign, BarChart3, Smartphone, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Piece Work Tracking",
    description:
      "Your crew logs piece work right from their phone when they clock out. No paper. No spreadsheets. Every piece counted and recorded automatically.",
  },
  {
    icon: DollarSign,
    title: "Instant Pay Calculation",
    description:
      "Wages calculate automatically based on your custom piece rates. No more manual math. No more errors. Just accurate pay, every time.",
  },
  {
    icon: BarChart3,
    title: "Job Cost Reports",
    description:
      "See exactly what you're spending on every job — by task, by crew member, by day. Know if you're over budget before it's too late.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Phone",
    description:
      "Your crew uses their own phone to clock in, pick the project, and log their work. No special hardware. No training headaches.",
  },
  {
    icon: Shield,
    title: "Approve & Lock Down",
    description:
      "Review time cards in one dashboard. Approve with a click. Once locked, nobody can change the numbers. Full audit trail.",
  },
  {
    icon: Zap,
    title: "Payroll in Minutes",
    description:
      "Pull payroll reports for any date range. See breakdowns by day and by person. Export and pay your team — the whole process takes minutes.",
  },
];

export function Features() {
  return (
    <section className="bg-bg-default">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <AnimateIn className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
            Everything you need
          </span>
          <h2 className="mt-3 font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
            Built for How Contractors Actually Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            No bloated features you'll never use. Just the tools that actually save you time and money on every job.
          </p>
        </AnimateIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimateIn key={feature.title} delay={index * 0.08}>
              <div className="group relative h-full rounded-2xl border border-border-default bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lg">
                <div className="inline-flex rounded-xl bg-brand-blue/10 p-3">
                  <feature.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-2xl text-text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{feature.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

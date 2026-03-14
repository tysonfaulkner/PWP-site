"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Check, ArrowRight } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Solo",
      price: "$0",
      period: "forever",
      description: "Free forever for 1 user",
      features: [
        "1 user account",
        "Unlimited projects",
        "Piece work tracking",
        "Time tracking",
        "Custom piece rate settings",
        "Track earnings per project",
        "Payroll/earnings reports",
      ],
      cta: "Start Free",
      ctaVariant: "secondary" as const,
      highlighted: false,
    },
    {
      name: "Team",
      price: "$10",
      period: "/user/mo",
      description: "Everything you need to get started",
      features: [
        "Everything in Solo, plus:",
        "Unlimited team members",
        "Easily edit/manage team time cards",
        "User roles and permissions",
        "Comprehensive job costing reports",
        "Track GPS of clocked-in team members",
        "Priority support",
      ],
      cta: "Start Free Trial",
      ctaVariant: "orange" as const,
      highlighted: true,
    },
  ],
  yearly: [
    {
      name: "Solo",
      price: "$0",
      period: "forever",
      description: "Free forever for 1 user",
      features: [
        "1 user account",
        "Unlimited projects",
        "Piece work tracking",
        "Time tracking",
        "Custom piece rate settings",
        "Track earnings per project",
        "Payroll/earnings reports",
      ],
      cta: "Start Free",
      ctaVariant: "secondary" as const,
      highlighted: false,
    },
    {
      name: "Team",
      price: "$8",
      period: "/user/mo",
      description: "Everything you need — save 20%",
      features: [
        "Everything in Solo, plus:",
        "Unlimited team members",
        "Easily edit/manage team time cards",
        "User roles and permissions",
        "Comprehensive job costing reports",
        "Track GPS of clocked-in team members",
        "Priority support",
      ],
      cta: "Start Free Trial",
      ctaVariant: "orange" as const,
      highlighted: true,
    },
  ],
};

export function PricingContent() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const currentPlans = plans[billing];

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Pricing</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Start free. Upgrade when your team grows. No hidden fees. No contracts.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          {/* Billing Toggle */}
          <AnimateIn className="flex items-center justify-center gap-4">
            <button
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                billing === "monthly"
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              aria-pressed={billing === "yearly"}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                billing === "yearly"
                  ? "bg-brand-blue text-white shadow-sm"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              Yearly{" "}
              <span className="ml-1 rounded-full bg-amber-400 px-2 py-0.5 text-xs font-bold text-gray-900">
                Save 20%
              </span>
            </button>
          </AnimateIn>

          {/* Cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {currentPlans.map((plan, index) => (
              <AnimateIn key={plan.name} delay={index * 0.1}>
                <div
                  className={`relative h-full rounded-2xl border-2 p-8 transition-shadow lg:p-10 ${
                    plan.highlighted
                      ? "border-brand-blue bg-white shadow-xl"
                      : "border-border-default bg-white shadow-sm"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-blue px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Recommended
                    </span>
                  )}
                  <h3 className="font-body text-xl font-bold text-text-primary">{plan.name}</h3>
                  <p className="mt-1 text-sm text-text-muted">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-mono text-5xl font-bold text-text-primary">{plan.price}</span>
                    <span className="text-sm text-text-muted">{plan.period}</span>
                  </div>
                  <Button
                    href="https://app.pieceworkpro.com/signup"
                    variant={plan.ctaVariant}
                    size="lg"
                    className="mt-8 w-full"
                    external
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <ul className="mt-8 space-y-3" role="list">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-text-body">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* FAQ teaser */}
          <AnimateIn delay={0.2} className="mt-16 text-center">
            <p className="text-text-muted">
              Questions?{" "}
              <Link href="/contact" className="font-medium text-brand-blue hover:text-brand-blue-dark">
                Contact us
              </Link>{" "}
              — we respond within 24 hours.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="text-center font-heading text-3xl text-text-primary sm:text-4xl">
              Common Questions
            </h2>
          </AnimateIn>
          <div className="mt-12 space-y-8">
            {[
              {
                q: "Is there really a free plan?",
                a: "Yes. The Solo plan is free forever for one user. You get unlimited projects, piece work tracking, time tracking, and payroll reports. No credit card required to start.",
              },
              {
                q: "What happens when I add team members?",
                a: "When you add your first team member, you move to the Team plan at $10 per user per month, or $8 per user per month on yearly billing. You are only charged for the users you add.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. No contracts. No cancellation fees. If you cancel, you keep access through the end of your billing period. Your data stays available if you decide to come back later.",
              },
              {
                q: "Do my crew members need to pay?",
                a: "No. You pay per user on your account. Your crew members download the app and log in with the accounts you create for them. They do not pay anything.",
              },
              {
                q: "Is there a free trial for the Team plan?",
                a: "Yes. You get a full free trial of the Team plan so you can try every feature with your crew before you are charged. Set up your team, track some piece work, and run a payroll report — all before paying a dime.",
              },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <div>
                  <h3 className="font-heading text-xl text-text-primary">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

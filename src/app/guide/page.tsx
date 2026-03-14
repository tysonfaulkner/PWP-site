import { Metadata } from "next";
import { CheckCircle2, FileText } from "lucide-react";
import { GuideForm } from "@/components/sections/GuideForm";

export const metadata: Metadata = {
  title: "Free Guide: How to Pay Your Crew 20% More and Double Your Profit",
  description:
    "Download the free guide for piece rate contractors. Learn the burdened rate formula, why paying more makes you more, and the compliance traps that can wipe out your profit.",
};

const benefits = [
  "The hidden cost buried in every paycheck that's eating 30% of your profit",
  "The one-line formula that tells you if a job will make money before you bid it",
  "How one contractor saved $1,818 per job by paying his crew more, not less",
  "The markup vs. gross profit trap that silently costs contractors $93K+ a year",
  "The payroll mistakes you don't know you're making — until a $200K lawsuit hits your desk",
];

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bg-dark">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-start lg:gap-16 lg:px-8 lg:py-28">
          {/* Left: Copy */}
          <div className="max-w-2xl lg:max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-sm font-medium text-brand-orange">
              <FileText className="h-4 w-4" />
              Free Guide
            </span>

            <h1 className="mt-6 font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              How to Pay Your Crew 20% More and{" "}
              <span className="text-brand-orange">
                Double Your Profit on Every Job
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-on-dark-muted">
              Most contractors are leaving money on the table because they
              don&apos;t know their real numbers. This free guide shows you
              exactly where the profit hides — and how to keep it.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-text-on-dark-muted"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-text-on-dark-muted/70">
              Written by Tyson Faulkner, owner of New Heights Roofing and
              founder of Piece Work Pro.
            </p>
          </div>

          {/* Right: Form */}
          <div className="mt-12 w-full max-w-md lg:mt-0">
            <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-2xl sm:p-8">
              <h2 className="text-center font-heading text-xl text-text-primary">
                Get Your Free Copy
              </h2>
              <p className="mt-1 text-center text-sm text-text-muted">
                Enter your email and we&apos;ll send it right over.
              </p>
              <div className="mt-6">
                <GuideForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof / what's inside */}
      <section className="bg-bg-surface py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="font-heading text-2xl text-text-primary sm:text-3xl">
            What&apos;s Inside the Guide
          </h2>
          <div className="mt-10 grid gap-8 text-left sm:grid-cols-2">
            <div>
              <h3 className="font-bold text-text-primary">
                Part 1: The Number That&apos;s Bleeding You Dry
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Your real labor cost is 20-30% higher than the check you write.
                Learn the burdened rate formula so you stop bidding blind.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-text-primary">
                Part 2: Why Paying More Makes You More
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                See exactly how a $20/square raise saved $1,818 in overhead and
                opened the door to $10K+ in extra revenue.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-text-primary">
                Part 3: Bidding With Your Eyes Open
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                The profitable bid formula, a real 40-square example, and the
                markup vs. gross profit mistake that costs contractors $93K+ a
                year.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-text-primary">
                Part 4: The Compliance Traps
              </h3>
              <p className="mt-2 text-sm text-text-muted">
                Overtime on piece rate, minimum wage makeup, state-specific
                landmines, and recordkeeping — the mistakes that turn a $2,000
                error into a $200,000 problem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

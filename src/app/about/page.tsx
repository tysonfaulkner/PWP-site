import { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About — Our Story",
  description:
    "Piece Work Pro was built by Tyson Faulkner, a roofer in Post Falls, Idaho, who was tired of chasing his crew for timesheets. Learn how it started.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Our Story</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Built on a Roof, Not in a Boardroom
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Piece Work Pro wasn't designed by a software company. It was built by a roofing contractor who lived the
              problem every single week.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn direction="right">
              <Image
                src="/images/team/NHRTeam-scaled.jpg"
                alt="Tyson Faulkner and the New Heights Roofing team standing with their trucks in Post Falls, Idaho"
                width={700}
                height={467}
                className="rounded-2xl shadow-lg"
              />
            </AnimateIn>
            <AnimateIn direction="left" delay={0.15}>
              <div className="space-y-6 text-lg leading-relaxed text-text-body">
                <p>
                  <strong className="text-text-primary">Tyson Faulkner</strong> is the owner of New Heights Roofing in
                  Post Falls, Idaho. For years, he struggled with the same problem every roofing contractor knows too
                  well — tracking piece work and running payroll was a weekly nightmare.
                </p>
                <p>
                  Paper time cards got lost. Excel spreadsheets got messy. And every Friday meant chasing his crew down
                  to figure out how much to pay them. Hours of work that should have taken minutes.
                </p>
                <p>
                  So Tyson built Piece Work Pro — software that does exactly what he needed. His crew clocks in from
                  their phones, logs piece work when they clock out, and payroll runs itself. Job costs tracked to the
                  penny. No spreadsheets. No guesswork.
                </p>
                <p>
                  Today, contractors across roofing, construction, and manufacturing use Piece Work Pro to
                  save time, reduce errors, and know exactly what every job costs.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">What We Believe</h2>
          </AnimateIn>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Built for the Job Site",
                desc: "We build software that works the way contractors actually work — from a phone on a roof, not from a desk in an office.",
              },
              {
                title: "Simple Beats Complicated",
                desc: "If your crew can't figure it out in 5 minutes, it's too complicated. We keep things dead simple on purpose.",
              },
              {
                title: "Your Money, Your Data",
                desc: "We never lock you in. Export your data anytime. Cancel anytime. We earn your business by being useful, not by being hard to leave.",
              },
            ].map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8">
                  <h3 className="font-heading text-2xl text-text-primary">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{value.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">Get in Touch</h2>
            <div className="mt-8 space-y-2 text-text-body">
              <p className="font-medium">Piece Work Pro LLC</p>
              <p>2785 W Seltice Way, Ste A</p>
              <p>Post Falls, ID 83854</p>
              <p className="mt-4">
                <a href="mailto:support@pieceworkpro.com" className="text-brand-blue hover:text-brand-blue-dark">
                  support@pieceworkpro.com
                </a>
              </p>
              <p>
                <a href="tel:18009562880" className="text-brand-blue hover:text-brand-blue-dark">
                  1-800-956-2880
                </a>
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-blue">
      {/* Decorative pattern */}
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

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
        <AnimateIn>
          <h2 className="font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
            Ready to Stop Wasting Time on Payroll?
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Track piece work, run payroll in minutes, and know exactly what every job costs. Free
            to start &mdash; no credit card required.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="https://app.pieceworkpro.com/signup" variant="orange" size="lg" external>
              Get Started Free <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button href="/pricing" variant="ghost" size="lg" className="text-white hover:bg-white/10 hover:text-white">
              View Pricing
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

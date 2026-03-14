"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { FileText, ArrowRight } from "lucide-react";

export function GuideCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
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

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400">
              <FileText className="h-4 w-4" />
              Free Guide
            </span>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="mt-4 font-heading text-2xl text-white sm:text-3xl lg:text-4xl">
              How to Pay Your Crew 20% More and{" "}
              <span className="text-brand-orange">Double Your Profit</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-text-on-dark-muted">
              The math most contractors never run — and the mistakes that cost
              them $93K+ a year. This free PDF breaks down the math in ten
              minutes. Plus, you&apos;ll understand the payroll traps that can
              wipe you out.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-8">
              <Button href="/guide" variant="green" size="lg">
                Get the Free Guide <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Quote } from "lucide-react";

export function FounderStory() {
  return (
    <section className="bg-bg-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <AnimateIn direction="right" className="lg:w-5/12">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/team/NHRTeam-scaled.jpg"
                alt="Tyson Faulkner and the New Heights Roofing team standing in front of their company trucks in Post Falls, Idaho"
                width={600}
                height={400}
                className="aspect-[3/2] object-cover"
              />
            </div>
          </AnimateIn>

          {/* Story */}
          <AnimateIn direction="left" delay={0.15} className="lg:w-7/12">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Our Story</span>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">
              Made by a Roofer, for Contractors
            </h2>
            <div className="mt-6 space-y-4 text-text-on-dark-muted">
              <p className="text-lg leading-relaxed">
                Piece Work Pro was created by Tyson Faulkner, owner of New Heights Roofing in Post Falls, Idaho.
                Frustrated with the constant struggle to track piece work for his crew, he built software to do the
                heavy lifting.
              </p>
              <div className="relative rounded-xl border border-white/10 bg-white/5 p-6">
                <Quote className="absolute -top-3 -left-3 h-8 w-8 text-brand-orange" aria-hidden="true" />
                <blockquote className="text-base italic leading-relaxed text-text-on-dark">
                  &ldquo;I tried everything &mdash; paper time cards, Excel spreadsheets, chasing guys down every week.
                  Payroll was a nightmare. After building Piece Work Pro, we can easily change piece rates, our guys
                  know exactly what they're making, and we can run reports to see what we're spending on each
                  job.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-medium text-brand-orange">
                  Tyson Faulkner
                  <span className="text-text-on-dark-muted"> &mdash; Founder, Piece Work Pro</span>
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

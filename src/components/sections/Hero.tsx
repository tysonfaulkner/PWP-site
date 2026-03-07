"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Track piece work & time from any device",
  "Run payroll in minutes, not hours",
  "See exactly what every job costs",
  "Free forever for solo users",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-roofing-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/95 to-bg-dark/70" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        {/* Left: Copy */}
        <div className="max-w-2xl lg:max-w-xl">
          <AnimateIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue-light">
              <span className="h-2 w-2 rounded-full bg-brand-orange" aria-hidden="true" />
              Over 500 contractors already use Piece Work Pro
            </span>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <h1 className="mt-6 font-heading text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stop Chasing Your Crew for{" "}
              <span className="text-brand-orange">Timesheets</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-text-on-dark-muted lg:text-xl">
              Piece Work Pro tracks your crew&apos;s piece work, calculates pay instantly, and gives you job cost reports
              down to the penny. Built by a roofer who was sick of spreadsheets.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="https://app.pieceworkpro.com/signin" size="lg" variant="orange" external>
                Get Started Free <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.4}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-text-on-dark-muted">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimateIn>
        </div>

        {/* Right: App preview */}
        <AnimateIn delay={0.3} direction="left" className="mt-16 lg:mt-0 lg:flex-1">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm">
              <Image
                src="/images/screenshots/timecards-screenshot.png"
                alt="Piece Work Pro dashboard showing crew time cards with piece work entries, daily earnings, and approval status"
                width={800}
                height={500}
                className="rounded-xl"
                priority
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-bg-dark-lighter/90 p-4 shadow-xl backdrop-blur-sm sm:-bottom-6 sm:-left-6">
              <p className="font-mono text-2xl font-bold text-brand-orange">5 min</p>
              <p className="text-xs text-text-on-dark-muted">Average payroll time</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

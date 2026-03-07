"use client";

import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";

const steps = [
  {
    number: "01",
    title: "Set Up Your Pay System",
    description:
      "Define your piece work rates — by task, by pitch, by trade. Fully customizable to match how your business actually works. Multiple versions let you pay different crews different ways.",
    image: "/images/screenshots/settings-screenshot.png",
    imageAlt: "Piece Work Pro settings screen showing customizable piece work rate configuration with tasks, rates, and pitch adjustments",
  },
  {
    number: "02",
    title: "Create Projects",
    description:
      "Add jobs with PO numbers, client names, and addresses. Your crew selects the project when they clock in, so every hour and piece of work is tracked to the right job automatically.",
    image: "/images/screenshots/projects-screenshot.png",
    imageAlt: "Piece Work Pro project settings showing a list of active construction projects with client names, addresses, and dates",
  },
  {
    number: "03",
    title: "Your Crew Clocks In",
    description:
      "Workers clock in from their phone, pick the project, and log their piece work when they clock out. No paper timesheets. No chasing people down. Everything recorded in real time.",
    image: "/images/screenshots/mobile-views.png",
    imageAlt: "Piece Work Pro mobile app showing the crew clock-in interface with project selection and piece work entry on a smartphone",
  },
  {
    number: "04",
    title: "Review & Approve",
    description:
      "Every time card lands in one dashboard. See daily summaries, edit if needed, and approve with one click. Approved cards lock down so nobody can change them after the fact.",
    image: "/images/screenshots/timecards-screenshot.png",
    imageAlt: "Piece Work Pro time card dashboard showing crew entries with earnings, status indicators, and approve/edit controls",
  },
  {
    number: "05",
    title: "Run Payroll in Minutes",
    description:
      "Pull a payroll report for any date range and see exactly what each person earned. Breakdowns by day, by card, by project. Spot discrepancies before they become problems.",
    image: "/images/screenshots/payroll-screenshot.png",
    imageAlt: "Piece Work Pro payroll report showing earnings breakdown by crew member with daily and period totals",
  },
  {
    number: "06",
    title: "Track Job Costs",
    description:
      "Run job cost reports to see labor costs per project, per task, per crew member. Know instantly whether you're over or under budget. Price your next bid with confidence.",
    image: "/images/screenshots/jobcost-screenshot.png",
    imageAlt: "Piece Work Pro job costing report showing labor costs broken down by task type, crew member, and total spend per project",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg-subtle">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <AnimateIn className="text-center">
          <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            From setup to payroll in six simple steps. Most contractors are up and running in under 15 minutes.
          </p>
        </AnimateIn>

        <div className="mt-16 space-y-24 lg:mt-20 lg:space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center gap-12 lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <AnimateIn
                direction={index % 2 === 0 ? "right" : "left"}
                className="lg:w-1/2"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-4xl font-bold text-brand-blue/20">{step.number}</span>
                  <div className="h-px flex-1 bg-border-default" />
                </div>
                <h3 className="mt-4 font-heading text-2xl text-text-primary sm:text-3xl">{step.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-text-body">{step.description}</p>
              </AnimateIn>

              {/* Screenshot */}
              <AnimateIn
                direction={index % 2 === 0 ? "left" : "right"}
                delay={0.15}
                className="lg:w-1/2"
              >
                <div className="overflow-hidden rounded-2xl border border-border-default bg-white p-2 shadow-lg transition-shadow hover:shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={700}
                    height={450}
                    className="rounded-xl"
                  />
                </div>
              </AnimateIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navigation = [
  {
    label: "Features",
    href: "/features",
    children: [
      { label: "Time Tracking", href: "/features/time-tracking", desc: "Track piece work and hours from any device" },
      { label: "Payroll Reports", href: "/features/payroll", desc: "Run payroll in minutes, not hours" },
      { label: "Job Costing", href: "/features/job-costing", desc: "Know exactly what every job costs" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Roofing", href: "/industries/roofing", desc: "Piece rate pay for roofing companies" },
      { label: "Construction", href: "/industries/construction", desc: "Piece work across construction trades" },
      { label: "Manufacturing", href: "/industries/manufacturing", desc: "Piece work in manufacturing & factories" },
    ],
  },
  {
    label: "Tools",
    href: "/tools",
    children: [
      { label: "Piece Rate Calculator", href: "/tools/piece-rate-calculator", desc: "Calculate your piece rate earnings" },
      { label: "Payroll Calculator", href: "/tools/payroll-calculator", desc: "See your true crew payroll costs" },
      { label: "Job Profit Calculator", href: "/tools/job-profit-calculator", desc: "Know if a job is profitable" },
      { label: "Revenue Calculator", href: "/tools/revenue-calculator", desc: "Project your company's revenue" },
      { label: "Overtime Calculator", href: "/tools/overtime-calculator", desc: "FLSA piece rate overtime pay" },
      { label: "Min Wage Checker", href: "/tools/min-wage-calculator", desc: "Check piece rate wage compliance" },
      { label: "Piece Rate vs Hourly", href: "/tools/piece-rate-vs-hourly", desc: "Compare pay methods side by side" },
      { label: "1099 vs W-2 Calculator", href: "/tools/1099-vs-w2-calculator", desc: "Compare true worker costs" },
      { label: "Labor Burden Calculator", href: "/tools/labor-burden-calculator", desc: "Full employer cost breakdown" },
      { label: "Break-Even Calculator", href: "/tools/break-even-calculator", desc: "Find your break-even point" },
      { label: "Bid Calculator", href: "/tools/bid-calculator", desc: "Build accurate job estimates" },
      { label: "Roofing Labor Calculator", href: "/tools/roofing-labor-calculator", desc: "Cost per square for roofing" },
      { label: "Piece Rate Guide", href: "/tools/piece-rate-guide", desc: "Common rates by trade" },
      { label: "Crew Productivity", href: "/tools/crew-productivity-calculator", desc: "Measure crew output metrics" },
      { label: "Workers' Comp Estimator", href: "/tools/workers-comp-estimator", desc: "Estimate your WC premium" },
      { label: "CA Piece Rate (AB 1513)", href: "/tools/california-piece-rate", desc: "California compliance checker" },
      { label: "State Min Wage Guide", href: "/tools/state-minimum-wage", desc: "Rates for all 50 states" },
      { label: "Avg Job Size Calculator", href: "/tools/average-job-calculator", desc: "Find your average job size" },
      { label: "Job Site Cost Estimator", href: "/tools/job-site-cost-estimator", desc: "Estimate total job site costs" },
      { label: "Job Duration Estimator", href: "/tools/job-duration-estimator", desc: "Estimate job completion time" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Primary">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label="Piece Work Pro home">
          <Image
            src="/images/Piece_Work_Pro_Logo_Text.jpg"
            alt="Piece Work Pro"
            width={200}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(item.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text-body transition-colors hover:bg-bg-muted hover:text-text-primary"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </Link>
                {openDropdown === item.label && (
                  <div className={`absolute left-0 top-full z-50 pt-2 ${item.children.length > 6 ? "w-[540px]" : "w-72"}`}>
                    <div className={`max-h-[70vh] overflow-y-auto rounded-xl border border-border-default bg-white p-2 shadow-lg ${item.children.length > 6 ? "grid grid-cols-2 gap-x-1" : ""}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 transition-colors hover:bg-bg-subtle"
                        >
                          <span className="block text-sm font-medium text-text-primary">{child.label}</span>
                          <span className="block text-xs text-text-muted">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-body transition-colors hover:bg-bg-muted hover:text-text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link
            href="https://app.pieceworkpro.com/signin"
            className="rounded-lg px-4 py-2 text-sm font-medium text-text-body transition-colors hover:text-text-primary"
          >
            Log In
          </Link>
          <Link
            href="https://app.pieceworkpro.com/signin"
            className="rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg p-2 text-text-body lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-border-default bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-text-body hover:bg-bg-subtle"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-sm text-text-muted hover:bg-bg-subtle hover:text-text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-border-default pt-4">
              <Link
                href="https://app.pieceworkpro.com/signin"
                className="block rounded-lg px-4 py-3 text-base font-medium text-text-body hover:bg-bg-subtle"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="https://app.pieceworkpro.com/signin"
                className="mt-2 block rounded-lg bg-brand-blue px-4 py-3 text-center text-base font-bold text-white hover:bg-brand-blue-dark"
                onClick={() => setMobileOpen(false)}
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

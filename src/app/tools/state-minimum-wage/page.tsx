import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "State Minimum Wage Guide for Contractors (2025) — Free Reference",
  description:
    "Current minimum wage rates for all 50 states plus D.C. Essential reference for contractors paying piece rate workers who must meet minimum wage requirements.",
};

const stateWages = [
  { state: "Alabama", abbr: "AL", wage: 7.25, note: "Federal rate (no state minimum)" },
  { state: "Alaska", abbr: "AK", wage: 11.73, note: "" },
  { state: "Arizona", abbr: "AZ", wage: 14.70, note: "" },
  { state: "Arkansas", abbr: "AR", wage: 11.00, note: "" },
  { state: "California", abbr: "CA", wage: 16.50, note: "Fast food: $20.00" },
  { state: "Colorado", abbr: "CO", wage: 14.81, note: "" },
  { state: "Connecticut", abbr: "CT", wage: 16.35, note: "" },
  { state: "Delaware", abbr: "DE", wage: 15.00, note: "" },
  { state: "D.C.", abbr: "DC", wage: 17.50, note: "" },
  { state: "Florida", abbr: "FL", wage: 14.00, note: "" },
  { state: "Georgia", abbr: "GA", wage: 7.25, note: "Federal rate applies" },
  { state: "Hawaii", abbr: "HI", wage: 14.00, note: "" },
  { state: "Idaho", abbr: "ID", wage: 7.25, note: "Federal rate" },
  { state: "Illinois", abbr: "IL", wage: 14.00, note: "" },
  { state: "Indiana", abbr: "IN", wage: 7.25, note: "Federal rate" },
  { state: "Iowa", abbr: "IA", wage: 7.25, note: "Federal rate" },
  { state: "Kansas", abbr: "KS", wage: 7.25, note: "Federal rate" },
  { state: "Kentucky", abbr: "KY", wage: 7.25, note: "Federal rate" },
  { state: "Louisiana", abbr: "LA", wage: 7.25, note: "Federal rate (no state minimum)" },
  { state: "Maine", abbr: "ME", wage: 14.65, note: "" },
  { state: "Maryland", abbr: "MD", wage: 15.00, note: "" },
  { state: "Massachusetts", abbr: "MA", wage: 15.00, note: "" },
  { state: "Michigan", abbr: "MI", wage: 10.56, note: "" },
  { state: "Minnesota", abbr: "MN", wage: 11.13, note: "" },
  { state: "Mississippi", abbr: "MS", wage: 7.25, note: "Federal rate (no state minimum)" },
  { state: "Missouri", abbr: "MO", wage: 13.75, note: "" },
  { state: "Montana", abbr: "MT", wage: 10.55, note: "" },
  { state: "Nebraska", abbr: "NE", wage: 13.50, note: "" },
  { state: "Nevada", abbr: "NV", wage: 12.00, note: "" },
  { state: "New Hampshire", abbr: "NH", wage: 7.25, note: "Federal rate" },
  { state: "New Jersey", abbr: "NJ", wage: 15.49, note: "" },
  { state: "New Mexico", abbr: "NM", wage: 12.00, note: "" },
  { state: "New York", abbr: "NY", wage: 15.00, note: "NYC: $16.00" },
  { state: "North Carolina", abbr: "NC", wage: 7.25, note: "Federal rate" },
  { state: "North Dakota", abbr: "ND", wage: 7.25, note: "Federal rate" },
  { state: "Ohio", abbr: "OH", wage: 10.70, note: "" },
  { state: "Oklahoma", abbr: "OK", wage: 7.25, note: "Federal rate" },
  { state: "Oregon", abbr: "OR", wage: 14.70, note: "Portland metro: $15.95" },
  { state: "Pennsylvania", abbr: "PA", wage: 7.25, note: "Federal rate" },
  { state: "Rhode Island", abbr: "RI", wage: 15.00, note: "" },
  { state: "South Carolina", abbr: "SC", wage: 7.25, note: "Federal rate (no state minimum)" },
  { state: "South Dakota", abbr: "SD", wage: 11.50, note: "" },
  { state: "Tennessee", abbr: "TN", wage: 7.25, note: "Federal rate (no state minimum)" },
  { state: "Texas", abbr: "TX", wage: 7.25, note: "Federal rate" },
  { state: "Utah", abbr: "UT", wage: 7.25, note: "Federal rate" },
  { state: "Vermont", abbr: "VT", wage: 14.01, note: "" },
  { state: "Virginia", abbr: "VA", wage: 12.41, note: "" },
  { state: "Washington", abbr: "WA", wage: 16.66, note: "Seattle: $20.76" },
  { state: "West Virginia", abbr: "WV", wage: 8.75, note: "" },
  { state: "Wisconsin", abbr: "WI", wage: 7.25, note: "Federal rate" },
  { state: "Wyoming", abbr: "WY", wage: 7.25, note: "Federal rate" },
];

export default function StateMinimumWagePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "State Minimum Wage Guide", href: "/tools/state-minimum-wage" }]} />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Reference Guide</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              State Minimum Wage Guide
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Current minimum wage rates for all 50 states plus D.C. If you pay piece rate, your workers must earn at
              least this amount per hour &mdash; or you owe the difference.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Wage Table */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <div className="overflow-hidden rounded-xl border border-border-default">
              <table className="w-full text-sm">
                <thead className="bg-bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-text-primary">State</th>
                    <th className="px-4 py-3 text-right font-bold text-text-primary">Minimum Wage</th>
                    <th className="hidden px-4 py-3 text-left font-bold text-text-primary sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default bg-white">
                  {stateWages.map((s) => (
                    <tr key={s.abbr} className="hover:bg-bg-subtle">
                      <td className="px-4 py-3 text-text-body">
                        {s.state} ({s.abbr})
                      </td>
                      <td className="px-4 py-3 text-right font-mono text-text-body">
                        ${s.wage.toFixed(2)}
                      </td>
                      <td className="hidden px-4 py-3 text-xs text-text-muted sm:table-cell">
                        {s.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.1} className="mt-8">
            <div className="rounded-xl border border-border-default bg-bg-subtle p-6">
              <p className="text-sm font-bold text-text-primary">Important for piece rate employers</p>
              <p className="mt-2 text-sm text-text-body">
                Under the FLSA, piece rate workers must earn at least the applicable minimum wage (federal or state,
                whichever is higher) for every hour worked. If their piece rate earnings divided by hours worked falls
                below minimum wage, you must pay the difference. Use our{" "}
                <a href="/tools/min-wage-calculator" className="text-brand-blue hover:text-brand-blue-dark underline">
                  Minimum Wage Compliance Checker
                </a>{" "}
                to verify your rates are compliant.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15} className="mt-8 text-center">
            <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="lg" external>
              Start Tracking Piece Work <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

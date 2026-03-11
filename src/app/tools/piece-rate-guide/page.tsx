import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Piece Rate Guide by Trade — Common Rates for Construction",
  description:
    "Reference guide of typical piece rates across construction trades. Find common piece rates for roofing, framing, drywall, painting, flooring, siding, fencing, and more.",
};

const trades = [
  {
    trade: "Roofing",
    rates: [
      { task: "Tear-off + Install (architectural)", unit: "per square", range: "$65–$100" },
      { task: "Tear-off only", unit: "per square", range: "$25–$40" },
      { task: "Install only (new construction)", unit: "per square", range: "$40–$65" },
      { task: "Ridge cap", unit: "per linear foot", range: "$1.50–$3.00" },
    ],
  },
  {
    trade: "Framing",
    rates: [
      { task: "Wall framing", unit: "per linear foot", range: "$4–$8" },
      { task: "Roof trusses", unit: "per truss", range: "$15–$30" },
      { task: "Floor sheathing", unit: "per sheet", range: "$4–$7" },
      { task: "Full house framing", unit: "per sq ft", range: "$4–$10" },
    ],
  },
  {
    trade: "Drywall",
    rates: [
      { task: "Hanging", unit: "per sheet", range: "$8–$15" },
      { task: "Taping & finishing", unit: "per sheet", range: "$10–$18" },
      { task: "Hang + finish", unit: "per sheet", range: "$18–$30" },
      { task: "Texture (spray)", unit: "per sq ft", range: "$0.25–$0.50" },
    ],
  },
  {
    trade: "Painting",
    rates: [
      { task: "Interior (walls + ceiling)", unit: "per room", range: "$100–$250" },
      { task: "Exterior siding", unit: "per sq ft", range: "$0.50–$1.50" },
      { task: "Trim / doors", unit: "per piece", range: "$15–$40" },
      { task: "Cabinet refinishing", unit: "per door/drawer", range: "$25–$50" },
    ],
  },
  {
    trade: "Flooring",
    rates: [
      { task: "Hardwood install", unit: "per sq ft", range: "$1.50–$3.50" },
      { task: "LVP / laminate install", unit: "per sq ft", range: "$0.75–$1.50" },
      { task: "Tile install", unit: "per sq ft", range: "$2.00–$5.00" },
      { task: "Carpet install", unit: "per sq yard", range: "$3.00–$6.00" },
    ],
  },
  {
    trade: "Siding",
    rates: [
      { task: "Vinyl siding install", unit: "per square", range: "$60–$100" },
      { task: "Fiber cement (HardiePlank)", unit: "per square", range: "$100–$175" },
      { task: "Tear-off old siding", unit: "per square", range: "$20–$40" },
    ],
  },
  {
    trade: "Fencing",
    rates: [
      { task: "Wood fence install", unit: "per linear foot", range: "$8–$18" },
      { task: "Chain link install", unit: "per linear foot", range: "$5–$12" },
      { task: "Vinyl fence install", unit: "per linear foot", range: "$10–$20" },
    ],
  },
  {
    trade: "Concrete",
    rates: [
      { task: "Flatwork (sidewalks, patios)", unit: "per sq ft", range: "$2–$5" },
      { task: "Foundation walls", unit: "per linear foot", range: "$15–$35" },
      { task: "Stamped / decorative", unit: "per sq ft", range: "$4–$10" },
    ],
  },
];

export default function PieceRateGuidePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Piece Rate Guide by Trade", href: "/tools/piece-rate-guide" }]} />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Reference Guide</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Piece Rate Guide by Trade
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Common piece rates across construction trades. Use these as a starting point when setting rates for your
              crew &mdash; then adjust based on your market and job complexity.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Rate Tables */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="space-y-12">
            {trades.map((trade, i) => (
              <AnimateIn key={trade.trade} delay={i * 0.05}>
                <div>
                  <h2 className="font-heading text-2xl text-text-primary sm:text-3xl">{trade.trade}</h2>
                  <div className="mt-4 overflow-hidden rounded-xl border border-border-default">
                    <table className="w-full text-sm">
                      <thead className="bg-bg-muted">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold text-text-primary">Task</th>
                          <th className="px-4 py-3 text-left font-bold text-text-primary">Unit</th>
                          <th className="px-4 py-3 text-left font-bold text-text-primary">Typical Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-default bg-white">
                        {trade.rates.map((rate) => (
                          <tr key={rate.task} className="hover:bg-bg-subtle">
                            <td className="px-4 py-3 text-text-body">{rate.task}</td>
                            <td className="px-4 py-3 text-text-muted">{rate.unit}</td>
                            <td className="px-4 py-3 font-mono text-text-body">{rate.range}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.1} className="mt-12">
            <div className="rounded-xl border border-border-default bg-bg-subtle p-6">
              <p className="text-sm font-bold text-text-primary">A note on these rates</p>
              <p className="mt-2 text-sm text-text-body">
                These are approximate ranges based on common market rates. Actual piece rates vary significantly
                based on your location, job complexity, material type, and worker experience. Use these as a
                starting point and adjust based on what works for your business and market.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15} className="mt-8 text-center">
            <p className="text-lg text-text-body">Ready to start tracking piece work for your crew?</p>
            <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="lg" className="mt-4" external>
              Get Started Free <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

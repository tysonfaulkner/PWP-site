import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { RoofingLaborCalculator } from "@/components/tools/RoofingLaborCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { DollarSign, Target, TrendingUp } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Roofing Labor Cost per Square Calculator — Free Tool",
  description:
    "Calculate your roofing labor cost per square (100 sq ft). Enter roof size, crew size, and piece rate to see total labor cost, per-worker earnings, and cost per square foot.",
};

const benefits = [
  {
    icon: DollarSign,
    title: "Price by the Square",
    desc: "Roofing is priced by the square (100 sq ft). Enter your rate per square and roof size to instantly see your total labor cost for the job.",
  },
  {
    icon: Target,
    title: "Know Per-Worker Cost",
    desc: "See how much each crew member earns on the job. Make sure your rates are competitive enough to attract and keep good roofers.",
  },
  {
    icon: TrendingUp,
    title: "Complete Job Cost",
    desc: "Add material costs and dump fees to see the full job cost — and what percentage goes to labor vs. materials.",
  },
];

export default function RoofingLaborCalculatorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Roofing Labor Cost Calculator", href: "/tools/roofing-labor-calculator" }]} />
      <HowToJsonLd
        name="How to Calculate Roofing Labor Cost per Square"
        description="Calculate your roofing labor cost per square (100 sq ft). Enter roof size, crew size, and piece rate to see total labor cost, per-worker earnings, and cost per square foot."
        steps={[
          { name: "Enter roof size", text: "Enter the total roof size in square feet. The calculator converts this to roofing squares (100 sq ft each)." },
          { name: "Enter labor rate per square", text: "Enter your labor rate per square (100 sq ft). This is the piece rate your crew charges for each square of roofing." },
          { name: "Enter crew size", text: "Enter the number of workers on the crew to calculate per-worker earnings." },
          { name: "Enter material cost per square", text: "Optionally enter your material cost per square to see the full job cost including materials." },
          { name: "Enter dump and disposal fees", text: "Optionally enter dump fees and disposal costs for tear-off debris." },
          { name: "Review your labor cost breakdown", text: "See total labor cost, per-worker earnings, total job cost, labor as a percentage of the total, and cost per square foot." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Roofing Labor Cost Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your roof size in square feet, labor rate per square, and crew size to calculate your total
              roofing labor cost &mdash; plus per-worker earnings and total job cost including materials.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Description */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimateIn delay={0.1}>
            <h2 className="font-heading text-2xl font-bold text-text-primary md:text-3xl">
              How This Calculator Works
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted md:text-lg">
              <p>
                Enter the roof size in square feet, your labor rate per square (100 sq ft), crew size, material cost
                per square, and dump/disposal fees. The calculator handles the conversion and math.
              </p>
              <p>
                You&apos;ll see the total labor cost, what each crew member earns on the job, total job cost including
                materials, labor as a percentage of the total, and your cost per square foot.
              </p>
              <p>
                Price roofing jobs with confidence. Know exactly what labor will cost before you quote, and make sure
                your crew&apos;s pay lines up with what the job can support.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <RoofingLaborCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Know Your Roofing Labor Costs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Labor is the biggest variable in roofing. Get the number right and your bids will be profitable. Get it
              wrong and you&apos;re working for free.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {benefits.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8 shadow-sm">
                  <div className="rounded-xl bg-brand-blue/10 p-3 w-fit">
                    <item.icon className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-2xl text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Rates */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Typical Roofing Labor Rates
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Rates vary by region, roof complexity, and material type. Here are common ranges.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.1} className="mt-8">
            <div className="overflow-hidden rounded-xl border border-border-default">
              <table className="w-full text-sm">
                <thead className="bg-bg-muted">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-text-primary">Roof Type</th>
                    <th className="px-4 py-3 text-left font-bold text-text-primary">Labor Rate/Square</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-default bg-white">
                  {[
                    ["3-Tab Shingles (tear-off + install)", "$50–$80"],
                    ["Architectural Shingles (tear-off + install)", "$65–$100"],
                    ["Metal Roofing (standing seam)", "$100–$175"],
                    ["Flat / Low-Slope (TPO, EPDM)", "$75–$120"],
                    ["Tile Roofing", "$125–$200"],
                    ["New Construction (no tear-off)", "$40–$65"],
                  ].map(([type, rate]) => (
                    <tr key={type} className="hover:bg-bg-subtle">
                      <td className="px-4 py-3 text-text-body">{type}</td>
                      <td className="px-4 py-3 font-mono text-text-body">{rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15} className="mt-6">
            <p className="text-sm text-text-muted">
              Rates are approximate and vary by market. Steep roofs, multiple layers, and difficult access can add
              $10&ndash;$30/square to labor costs.
            </p>
          </AnimateIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}

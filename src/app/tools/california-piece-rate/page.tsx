import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CaliforniaComplianceCalculator } from "@/components/tools/CaliforniaComplianceCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { Shield, AlertTriangle, Scale } from "lucide-react";
import { BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "CA Piece Rate Calculator (AB 1513)",
  description:
    "Calculate AB 1513 rest period pay, recovery period pay, and minimum wage compliance for California piece rate workers. Stay compliant with California's strict piece rate laws.",
};

const benefits = [
  {
    icon: Shield,
    title: "AB 1513 Compliance",
    desc: "California AB 1513 requires separate compensation for rest and recovery periods for piece rate workers. This calculator shows exactly what you owe.",
  },
  {
    icon: AlertTriangle,
    title: "Avoid Class Action Risk",
    desc: "AB 1513 violations have led to some of the largest class action lawsuits in California construction. Getting the math right isn't optional.",
  },
  {
    icon: Scale,
    title: "Rest + Recovery Pay",
    desc: "Piece rate workers in California must be paid separately for 10-minute rest breaks and 5-minute heat recovery periods at their effective piece rate.",
  },
];

export default function CaliforniaPieceRatePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "California Piece Rate Compliance Calculator", href: "/tools/california-piece-rate" }]} />
      <HowToJsonLd
        name="How to Calculate California AB 1513 Piece Rate Compliance"
        description="Calculate AB 1513 rest period pay, recovery period pay, and minimum wage compliance for California piece rate workers. Stay compliant with California's strict piece rate laws."
        steps={[
          { name: "Enter total piece rate earnings", text: "Enter the worker's total piece rate earnings for the pay period." },
          { name: "Enter total hours worked", text: "Enter the total number of hours the worker worked during the pay period." },
          { name: "Enter days worked", text: "Enter the number of days worked to calculate rest period entitlements (one 10-minute rest break per 4 hours)." },
          { name: "Enter shifts over 10 hours", text: "Enter how many shifts exceeded 10 hours, which entitle workers to additional rest periods." },
          { name: "Enter outdoor heat days", text: "Enter the number of days with outdoor work in high heat conditions to calculate recovery period pay." },
          { name: "Review compliance results", text: "See the worker's effective hourly rate, minimum wage compliance status, rest period pay owed, recovery period pay owed, and total additional compensation required under AB 1513." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              California Piece Rate Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter your piece rate worker&apos;s weekly earnings, hours, and rest period details to calculate AB 1513
              rest period pay, recovery period pay, and minimum wage compliance.
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
                Enter the worker&apos;s total piece rate earnings, total hours worked, days worked, number of shifts
                over 10 hours, and outdoor heat days. The calculator applies California&apos;s AB 1513 rules
                automatically.
              </p>
              <p>
                You&apos;ll see the worker&apos;s effective hourly rate, California minimum wage compliance status,
                and a full breakdown of additional pay owed &mdash; rest period pay, recovery period pay, and minimum
                wage make-up pay.
              </p>
              <p>
                California&apos;s AB 1513 requires separate pay for rest and recovery periods on top of piece rate
                earnings. This calculator tells you exactly what you owe so you stay compliant and avoid costly
                penalties.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <CaliforniaComplianceCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              California&apos;s Piece Rate Laws Are Strict
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              California has some of the strictest piece rate laws in the country. If you have crews working in
              California, you need to get this right.
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

      {/* What AB 1513 Requires */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              What AB 1513 Requires
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-6">
            <AnimateIn delay={0.05}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">Separate Rest Period Pay</h3>
                <p className="mt-2 text-sm text-text-body">
                  Piece rate workers must be paid separately for each 10-minute rest period. The rate is calculated by
                  dividing total piece rate earnings by total hours worked to get the effective hourly rate, then paying
                  10 minutes at that rate per rest break. Workers get one rest period per 4 hours of work.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">Recovery Period Pay</h3>
                <p className="mt-2 text-sm text-text-body">
                  For outdoor workers in high heat, California requires paid &ldquo;recovery periods&rdquo; (cool-down
                  breaks). These must also be separately compensated for piece rate workers at the effective hourly
                  rate.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-xl border border-border-default bg-white p-6">
                <h3 className="font-heading text-lg text-text-primary">Itemized Wage Statements</h3>
                <p className="mt-2 text-sm text-text-body">
                  California requires that piece rate worker pay stubs separately list: total hours worked, total
                  piece rate earnings, rest period pay, recovery period pay, and any other compensation. Failure to
                  itemize correctly is itself a violation.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-text-primary">This is not optional</p>
                    <p className="mt-1 text-sm text-text-body">
                      AB 1513 violations carry penalties of up to $250 per employee per pay period, plus exposure to
                      class action lawsuits for unpaid rest period wages. Several California construction companies have
                      faced multi-million dollar settlements over AB 1513 violations.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

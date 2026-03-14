import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { OvertimeCalculator } from "@/components/tools/OvertimeCalculator";
import { CTASection } from "@/components/sections/CTASection";
import { GuideCTA } from "@/components/sections/GuideCTA";
import { RelatedReading } from "@/components/sections/RelatedReading";
import { ShieldCheck, DollarSign, AlertTriangle } from "lucide-react";
import { FAQPageJsonLd, BreadcrumbJsonLd, HowToJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Free Piece Rate Overtime Calculator — FLSA Compliant",
  description:
    "Calculate FLSA-compliant overtime for piece rate workers. Enter weekly earnings and hours to see the regular rate, overtime premium, and total pay owed.",
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Stay FLSA Compliant",
    desc: "Piece rate overtime uses the half-time premium method — not standard time-and-a-half. Get it wrong and you're exposed to DOL audits and back-pay penalties.",
  },
  {
    icon: DollarSign,
    title: "Pay the Right Amount",
    desc: "The regular rate changes every week based on total earnings and hours. This calculator does the math so you don't overpay or underpay your crew.",
  },
  {
    icon: AlertTriangle,
    title: "Avoid Costly Mistakes",
    desc: "Misclassifying piece rate overtime is one of the most common FLSA violations in construction. Know exactly what you owe before payday.",
  },
];

const faqs = [
  {
    question: "Do piece rate workers get overtime pay?",
    answer: "Yes. Under the FLSA, piece rate workers are entitled to overtime pay for all hours worked over 40 in a workweek. The calculation method is different from hourly workers — you use the half-time premium method.",
  },
  {
    question: "Why is it half-time (0.5x) and not time-and-a-half (1.5x)?",
    answer: "Because the piece rate earnings already include straight-time compensation for all hours worked — including overtime hours. The worker has already been paid 1x for those extra hours through their piece work. You only owe the additional 0.5x premium to bring them up to the required 1.5x rate.",
  },
  {
    question: "What happens if I calculate overtime wrong?",
    answer: "The Department of Labor can order repayment of back wages (up to 3 years of underpayments) and impose civil penalties for repeated or willful violations. Class-action lawsuits from workers are also common. Getting this right is much cheaper than getting it wrong.",
  },
  {
    question: "Does my state have different overtime rules?",
    answer: "Some states (like California) have daily overtime thresholds in addition to the federal 40-hour weekly threshold. Always check your state's labor laws. This calculator uses the federal FLSA 40-hour weekly standard. Consult a payroll professional for state-specific requirements.",
  },
];

export default function OvertimeCalculatorPage() {
  return (
    <>
      <FAQPageJsonLd faqs={faqs} />
      <BreadcrumbJsonLd items={[{ name: "Tools", href: "/tools" }, { name: "Piece Rate Overtime Calculator", href: "/tools/overtime-calculator" }]} />
      <HowToJsonLd
        name="How to Calculate Piece Rate Overtime"
        description="Calculate FLSA-compliant overtime pay for piece rate workers using the half-time premium method."
        steps={[
          { name: "Enter weekly piece rate earnings", text: "Enter the worker's total piece rate earnings for the week." },
          { name: "Enter total hours worked", text: "Enter the total hours the worker worked during the week (must be over 40 for overtime)." },
          { name: "View overtime calculation", text: "See the regular rate, half-time premium, total overtime owed, and total weekly pay." },
        ]}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Free Tool</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Piece Rate Overtime Calculator
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Enter a worker&apos;s weekly piece rate earnings and total hours worked to calculate FLSA-compliant overtime pay
              using the half-time premium method.
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
                Enter a worker&apos;s total piece rate earnings for the week and the total hours they worked. The
                calculator handles the FLSA math automatically.
              </p>
              <p>
                You&apos;ll see the regular rate of pay, the half-time overtime premium, the total overtime owed, and
                the worker&apos;s full weekly pay &mdash; calculated the way the Department of Labor requires.
              </p>
              <p>
                Piece rate overtime isn&apos;t calculated the same as hourly overtime. This tool uses the correct
                half-time premium method so you stay compliant and avoid back-pay claims or DOL audits.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <OvertimeCalculator />

      {/* Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Overtime for Piece Rate Workers Is Different
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              You can&apos;t just multiply the hourly rate by 1.5. For piece rate employees, the FLSA requires a specific
              calculation method that most contractors get wrong.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {benefits.map((item, index) => (
              <AnimateIn key={item.title} delay={index * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8 shadow-sm">
                  <div className="w-fit rounded-xl bg-brand-blue/10 p-3">
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

      {/* How It Works / Deep Dive */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              How Piece Rate Overtime Works (Step by Step)
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-8">
            <AnimateIn delay={0.05}>
              <div className="rounded-2xl border border-border-default bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">1</span>
                  <h3 className="font-heading text-2xl text-text-primary">Calculate the Regular Rate</h3>
                </div>
                <p className="mt-3 pl-11 text-text-body leading-relaxed">
                  Divide the worker&apos;s total piece rate earnings for the week by the total number of hours worked. This
                  gives you the <strong>regular rate of pay</strong> for that specific week. It changes every week because
                  piece rate earnings fluctuate.
                </p>
                <div className="mt-3 ml-11 rounded-lg bg-bg-subtle p-3">
                  <p className="font-mono text-sm text-text-body">Regular Rate = Total Piece Earnings &divide; Total Hours</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="rounded-2xl border border-border-default bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">2</span>
                  <h3 className="font-heading text-2xl text-text-primary">Calculate the Half-Time Premium</h3>
                </div>
                <p className="mt-3 pl-11 text-text-body leading-relaxed">
                  Multiply the regular rate by <strong>0.5</strong> (not 1.5). Why? Because the piece rate earnings already
                  compensate the worker for straight time on all hours worked &mdash; including the overtime hours. You only
                  owe the extra half-time premium.
                </p>
                <div className="mt-3 ml-11 rounded-lg bg-bg-subtle p-3">
                  <p className="font-mono text-sm text-text-body">OT Premium = Regular Rate &times; 0.5</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div className="rounded-2xl border border-border-default bg-white p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">3</span>
                  <h3 className="font-heading text-2xl text-text-primary">Multiply by Overtime Hours</h3>
                </div>
                <p className="mt-3 pl-11 text-text-body leading-relaxed">
                  Multiply the half-time premium by the number of hours over 40 to get the total overtime pay owed. Add this
                  to the original piece rate earnings for the worker&apos;s total weekly pay.
                </p>
                <div className="mt-3 ml-11 rounded-lg bg-bg-subtle p-3">
                  <p className="font-mono text-sm text-text-body">Total Pay = Piece Earnings + (OT Premium &times; OT Hours)</p>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Example */}
          <AnimateIn delay={0.2}>
            <div className="mt-12 rounded-2xl border-2 border-brand-blue/20 bg-white p-6">
              <h3 className="font-heading text-2xl text-text-primary">Example: Roofer Working 50 Hours</h3>
              <p className="mt-3 text-text-body leading-relaxed">
                A roofer earns <strong>$1,200</strong> in piece work during a 50-hour week:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-text-body">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                  <span>Regular rate: $1,200 &divide; 50 = <strong>$24.00/hr</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                  <span>Half-time premium: $24.00 &times; 0.5 = <strong>$12.00/hr</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                  <span>Overtime owed: $12.00 &times; 10 OT hours = <strong>$120.00</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" aria-hidden="true" />
                  <span>Total weekly pay: $1,200 + $120 = <strong>$1,320.00</strong></span>
                </li>
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn>
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </AnimateIn>

          <div className="mt-12 space-y-10">
            <AnimateIn delay={0.05}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">Do piece rate workers get overtime pay?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Yes. Under the FLSA, piece rate workers are entitled to overtime pay for all hours worked over 40 in a
                  workweek. The calculation method is different from hourly workers &mdash; you use the half-time premium method
                  described above.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">Why is it half-time (0.5x) and not time-and-a-half (1.5x)?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Because the piece rate earnings already include straight-time compensation for all hours worked &mdash;
                  including overtime hours. The worker has already been paid 1x for those extra hours through their piece work.
                  You only owe the additional 0.5x premium to bring them up to the required 1.5x rate.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">What happens if I calculate overtime wrong?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  The Department of Labor can order repayment of back wages (up to 3 years of underpayments) and impose civil
                  penalties for repeated or willful violations. Class-action lawsuits from workers are also common. Getting this
                  right is much cheaper than getting it wrong.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div>
                <h3 className="font-heading text-2xl text-text-primary">Does my state have different overtime rules?</h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  Some states (like California) have daily overtime thresholds in addition to the federal 40-hour weekly
                  threshold. Always check your state&apos;s labor laws. This calculator uses the federal FLSA 40-hour weekly
                  standard. Consult a payroll professional for state-specific requirements.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <RelatedReading links={[
        { title: "What Is Piece Work Pay? A Complete Guide", href: "/blog/what-is-piece-work-pay", description: "Understand how piece rate pay works and the overtime rules that apply under the FLSA." },
        { title: "5 Construction Payroll Mistakes to Avoid", href: "/blog/construction-payroll-tips", description: "Overtime miscalculations are one of the most common payroll mistakes in construction." },
      ]} />

      <GuideCTA />
      <CTASection />
    </>
  );
}

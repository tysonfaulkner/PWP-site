"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, Users, FileText, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  w2TotalCost: number;
  w2BasePay: number;
  w2SocialSecurity: number;
  w2Medicare: number;
  w2Futa: number;
  w2Suta: number;
  w2WorkersComp: number;
  w2Benefits: number;
  w2EffectiveRate: number;
  contractor1099Pay: number;
  contractor1099EffectiveRate: number;
  savings: number;
  savingsPercent: number;
  w2Cheaper: boolean;
}

export function W2Vs1099Calculator() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("50");
  const [workersCompRate, setWorkersCompRate] = useState("8");
  const [benefitsPercent, setBenefitsPercent] = useState("5");
  const [contractor1099Rate, setContractor1099Rate] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const hourly = parseFloat(hourlyRate);
    const hpw = parseFloat(hoursPerWeek);
    const wpy = parseFloat(weeksPerYear);
    const wcRate = parseFloat(workersCompRate) / 100;
    const benefitsPct = parseFloat(benefitsPercent) / 100;
    const rate1099 = parseFloat(contractor1099Rate);

    if (isNaN(hourly) || isNaN(hpw) || isNaN(wpy) || isNaN(rate1099)) return;
    if (hourly <= 0 || hpw <= 0 || wpy <= 0 || rate1099 <= 0) return;

    const annualBase = hourly * hpw * wpy;
    const ss = annualBase * 0.062;
    const medicare = annualBase * 0.0145;
    const futa = Math.min(annualBase, 7000) * 0.006;
    const suta = Math.min(annualBase, 7000) * 0.027;
    const wc = annualBase * wcRate;
    const benefits = annualBase * benefitsPct;
    const w2Total = annualBase + ss + medicare + futa + suta + wc + benefits;
    const w2Effective = w2Total / (hpw * wpy);

    const annual1099 = rate1099 * hpw * wpy;
    const effective1099 = rate1099;

    const savings = Math.abs(w2Total - annual1099);
    const savingsPct = w2Total > 0 ? (savings / Math.max(w2Total, annual1099)) * 100 : 0;

    setResults({
      w2TotalCost: w2Total,
      w2BasePay: annualBase,
      w2SocialSecurity: ss,
      w2Medicare: medicare,
      w2Futa: futa,
      w2Suta: suta,
      w2WorkersComp: wc,
      w2Benefits: benefits,
      w2EffectiveRate: w2Effective,
      contractor1099Pay: annual1099,
      contractor1099EffectiveRate: effective1099,
      savings,
      savingsPercent: savingsPct,
      w2Cheaper: w2Total < annual1099,
    });
  }, [hourlyRate, hoursPerWeek, weeksPerYear, workersCompRate, benefitsPercent, contractor1099Rate]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

  return (
    <section className="bg-bg-subtle">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Calculator Form */}
          <AnimateIn>
            <div className="rounded-2xl border-2 border-border-default bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-brand-blue/10 p-3">
                  <Calculator className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-2xl text-text-primary">Enter Worker Details</h2>
              </div>

              <div className="space-y-5">
                <div className="rounded-lg bg-brand-blue-light p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">W-2 Employee</p>
                </div>

                <div>
                  <label htmlFor="w2-hourlyRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Base Hourly Rate ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">What you pay the W-2 employee per hour</p>
                  <input
                    id="w2-hourlyRate"
                    type="number"
                    min="0"
                    step="0.50"
                    placeholder="e.g., 25.00"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="w2-hoursPerWeek" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours/Week
                    </label>
                    <input
                      id="w2-hoursPerWeek"
                      type="number"
                      min="1"
                      max="80"
                      step="1"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="w2-weeksPerYear" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Weeks/Year
                    </label>
                    <input
                      id="w2-weeksPerYear"
                      type="number"
                      min="1"
                      max="52"
                      step="1"
                      value={weeksPerYear}
                      onChange={(e) => setWeeksPerYear(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="w2-wcRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Workers&apos; Comp (%)
                    </label>
                    <input
                      id="w2-wcRate"
                      type="number"
                      min="0"
                      max="30"
                      step="0.5"
                      value={workersCompRate}
                      onChange={(e) => setWorkersCompRate(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="w2-benefits" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Benefits (%)
                    </label>
                    <input
                      id="w2-benefits"
                      type="number"
                      min="0"
                      max="30"
                      step="0.5"
                      value={benefitsPercent}
                      onChange={(e) => setBenefitsPercent(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <div className="rounded-lg bg-brand-orange-light p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">1099 Contractor</p>
                </div>

                <div>
                  <label htmlFor="w2-1099Rate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    1099 Contractor Rate ($/hr)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">What you&apos;d pay a 1099 contractor for the same work</p>
                  <input
                    id="w2-1099Rate"
                    type="number"
                    min="0"
                    step="0.50"
                    placeholder="e.g., 35.00"
                    value={contractor1099Rate}
                    onChange={(e) => setContractor1099Rate(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Compare True Costs
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                {/* Primary result */}
                <div
                  className={`rounded-2xl border-2 bg-white p-8 shadow-lg ${
                    results.w2Cheaper ? "border-brand-blue" : "border-brand-orange"
                  }`}
                >
                  <p
                    className={`text-sm font-bold uppercase tracking-wider ${
                      results.w2Cheaper ? "text-brand-blue" : "text-brand-orange"
                    }`}
                  >
                    {results.w2Cheaper ? "W-2 Employee Costs Less" : "1099 Contractor Costs Less"}
                  </p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.savings)}/yr
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {results.savingsPercent.toFixed(1)}% savings with{" "}
                    {results.w2Cheaper ? "W-2" : "1099"} classification
                  </p>
                </div>

                {/* Side by side comparison */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border-2 border-brand-blue/40 bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">W-2 Total</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.w2TotalCost)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">{formatCurrency(results.w2EffectiveRate)}/hr effective</p>
                  </div>
                  <div className="rounded-xl border-2 border-brand-orange/40 bg-white p-5">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">1099 Total</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.contractor1099Pay)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">{formatCurrency(results.contractor1099EffectiveRate)}/hr flat</p>
                  </div>
                </div>

                {/* W-2 Cost Breakdown */}
                <div className="rounded-xl border border-border-default bg-white p-5">
                  <p className="text-sm font-bold text-text-primary">W-2 Employer Cost Breakdown</p>
                  <div className="mt-3 space-y-2">
                    {[
                      { label: "Base Pay", value: results.w2BasePay },
                      { label: "Social Security (6.2%)", value: results.w2SocialSecurity },
                      { label: "Medicare (1.45%)", value: results.w2Medicare },
                      { label: "FUTA", value: results.w2Futa },
                      { label: "SUTA", value: results.w2Suta },
                      { label: "Workers' Comp", value: results.w2WorkersComp },
                      { label: "Benefits", value: results.w2Benefits },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between text-sm">
                        <span className="text-text-muted">{item.label}</span>
                        <span className="font-mono text-text-body">{formatCurrency(item.value)}</span>
                      </div>
                    ))}
                    <div className="border-t border-border-default pt-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-text-primary">Total W-2 Cost</span>
                        <span className="font-mono text-text-primary">{formatCurrency(results.w2TotalCost)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track costs for W-2 and piece rate workers</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Whether you have W-2 employees or piece rate workers, Piece Work Pro tracks production and calculates
                    payroll &mdash; so you always know your true labor costs.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <DollarSign className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your comparison will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter W-2 and 1099 rates to compare the true cost of each worker classification.
                  </p>
                </div>
              </div>
            )}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

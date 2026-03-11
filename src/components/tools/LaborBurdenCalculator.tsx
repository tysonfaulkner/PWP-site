"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  basePay: number;
  socialSecurity: number;
  medicare: number;
  futa: number;
  suta: number;
  workersComp: number;
  healthInsurance: number;
  retirement: number;
  pto: number;
  otherCosts: number;
  totalBurden: number;
  totalCost: number;
  burdenPercent: number;
  effectiveRate: number;
}

export function LaborBurdenCalculator() {
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [wcRate, setWcRate] = useState("8");
  const [healthMonthly, setHealthMonthly] = useState("500");
  const [retirementPercent, setRetirementPercent] = useState("3");
  const [ptoDays, setPtoDays] = useState("10");
  const [otherMonthly, setOtherMonthly] = useState("0");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const hourly = parseFloat(hourlyRate);
    const hpw = parseFloat(hoursPerWeek);
    const wc = parseFloat(wcRate) / 100;
    const health = parseFloat(healthMonthly) || 0;
    const retirement = parseFloat(retirementPercent) / 100;
    const pto = parseFloat(ptoDays) || 0;
    const other = parseFloat(otherMonthly) || 0;

    if (isNaN(hourly) || hourly <= 0 || isNaN(hpw) || hpw <= 0) return;

    const annualBase = hourly * hpw * 52;
    const ss = annualBase * 0.062;
    const med = annualBase * 0.0145;
    const futa = Math.min(annualBase, 7000) * 0.006;
    const suta = Math.min(annualBase, 7000) * 0.027;
    const wcCost = annualBase * wc;
    const healthAnnual = health * 12;
    const retirementCost = annualBase * retirement;
    const ptoCost = hourly * hpw / 5 * pto; // daily rate * PTO days
    const otherAnnual = other * 12;

    const totalBurden = ss + med + futa + suta + wcCost + healthAnnual + retirementCost + ptoCost + otherAnnual;
    const totalCost = annualBase + totalBurden;
    const burdenPct = (totalBurden / annualBase) * 100;
    const effectiveRate = totalCost / (hpw * 52);

    setResults({
      basePay: annualBase,
      socialSecurity: ss,
      medicare: med,
      futa,
      suta,
      workersComp: wcCost,
      healthInsurance: healthAnnual,
      retirement: retirementCost,
      pto: ptoCost,
      otherCosts: otherAnnual,
      totalBurden,
      totalCost,
      burdenPercent: burdenPct,
      effectiveRate,
    });
  }, [hourlyRate, hoursPerWeek, wcRate, healthMonthly, retirementPercent, ptoDays, otherMonthly]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Employee Details</h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lb-hourlyRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hourly Rate ($)
                    </label>
                    <input
                      id="lb-hourlyRate"
                      type="number"
                      min="0"
                      step="0.50"
                      placeholder="e.g., 28.00"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lb-hoursPerWeek" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours/Week
                    </label>
                    <input
                      id="lb-hoursPerWeek"
                      type="number"
                      min="1"
                      max="80"
                      step="1"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lb-wcRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Workers&apos; Comp Rate (%)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Typically 5&ndash;15% for construction trades</p>
                  <input
                    id="lb-wcRate"
                    type="number"
                    min="0"
                    max="30"
                    step="0.5"
                    value={wcRate}
                    onChange={(e) => setWcRate(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="lb-health" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Health Insurance ($/month)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Employer portion of health insurance premiums</p>
                  <input
                    id="lb-health"
                    type="number"
                    min="0"
                    step="50"
                    value={healthMonthly}
                    onChange={(e) => setHealthMonthly(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="lb-retirement" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Retirement Match (%)
                    </label>
                    <input
                      id="lb-retirement"
                      type="number"
                      min="0"
                      max="15"
                      step="0.5"
                      value={retirementPercent}
                      onChange={(e) => setRetirementPercent(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="lb-pto" className="mb-1.5 block text-sm font-medium text-text-primary">
                      PTO Days/Year
                    </label>
                    <input
                      id="lb-pto"
                      type="number"
                      min="0"
                      max="30"
                      step="1"
                      value={ptoDays}
                      onChange={(e) => setPtoDays(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lb-other" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Other Costs ($/month)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Uniforms, training, tools, phone, etc.</p>
                  <input
                    id="lb-other"
                    type="number"
                    min="0"
                    step="25"
                    value={otherMonthly}
                    onChange={(e) => setOtherMonthly(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Labor Burden
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                {/* Primary result */}
                <div className="rounded-2xl border-2 border-brand-blue bg-white p-8 shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">True Cost per Hour</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.effectiveRate)}/hr
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    Base rate {formatCurrency(parseFloat(hourlyRate))}/hr + {results.burdenPercent.toFixed(1)}% burden
                  </p>
                </div>

                {/* Annual totals */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Annual Total</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.totalCost)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Burden Rate</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-brand-orange">
                      {results.burdenPercent.toFixed(1)}%
                    </p>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="rounded-xl border border-border-default bg-white p-5">
                  <p className="text-sm font-bold text-text-primary">Annual Cost Breakdown</p>
                  <div className="mt-3 space-y-2">
                    {[
                      { label: "Base Pay", value: results.basePay },
                      { label: "Social Security (6.2%)", value: results.socialSecurity },
                      { label: "Medicare (1.45%)", value: results.medicare },
                      { label: "FUTA", value: results.futa },
                      { label: "SUTA", value: results.suta },
                      { label: "Workers' Comp", value: results.workersComp },
                      { label: "Health Insurance", value: results.healthInsurance },
                      { label: "Retirement Match", value: results.retirement },
                      { label: "Paid Time Off", value: results.pto },
                      { label: "Other Costs", value: results.otherCosts },
                    ]
                      .filter((item) => item.value > 0)
                      .map((item) => (
                        <div key={item.label} className="flex justify-between text-sm">
                          <span className="text-text-muted">{item.label}</span>
                          <span className="font-mono text-text-body">{formatCurrency(item.value)}</span>
                        </div>
                      ))}
                    <div className="border-t border-border-default pt-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-text-primary">Total Annual Cost</span>
                        <span className="font-mono text-text-primary">{formatCurrency(results.totalCost)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Use your true labor cost when bidding jobs</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro calculates labor burden automatically, so every job estimate reflects your real
                    costs &mdash; not just base wages.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Calculator className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter employee details to see the full labor burden breakdown.
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

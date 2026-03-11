"use client";

import { useState, useCallback } from "react";
import { Calculator, Users, DollarSign, TrendingUp, ArrowRight, AlertTriangle } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  weeklyBasePay: number;
  weeklyBurdenCost: number;
  weeklyTotalCost: number;
  monthlyTotalCost: number;
  yearlyTotalCost: number;
  costPerEmployee: number;
  burdenPerEmployee: number;
  trueHourlyRate: number;
  burdenPercentDisplay: string;
}

export function PayrollCalculator() {
  const [numWorkers, setNumWorkers] = useState("");
  const [avgHourlyRate, setAvgHourlyRate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [burdenPercent, setBurdenPercent] = useState("30");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const workers = parseFloat(numWorkers);
    const rate = parseFloat(avgHourlyRate);
    const hours = parseFloat(hoursPerWeek);
    const burden = parseFloat(burdenPercent);

    if (isNaN(workers) || isNaN(rate) || isNaN(hours) || isNaN(burden)) return;
    if (workers <= 0 || rate <= 0 || hours <= 0 || burden < 0) return;

    const weeklyBase = workers * rate * hours;
    const weeklyBurden = weeklyBase * (burden / 100);
    const weeklyTotal = weeklyBase + weeklyBurden;
    const monthlyTotal = weeklyTotal * 4.33;
    const yearlyTotal = weeklyTotal * 52;
    const perEmployee = weeklyTotal / workers;
    const burdenPerEmp = weeklyBurden / workers;
    const trueHourly = rate * (1 + burden / 100);

    setResults({
      weeklyBasePay: weeklyBase,
      weeklyBurdenCost: weeklyBurden,
      weeklyTotalCost: weeklyTotal,
      monthlyTotalCost: monthlyTotal,
      yearlyTotalCost: yearlyTotal,
      costPerEmployee: perEmployee,
      burdenPerEmployee: burdenPerEmp,
      trueHourlyRate: trueHourly,
      burdenPercentDisplay: burden.toFixed(0),
    });
  }, [numWorkers, avgHourlyRate, hoursPerWeek, burdenPercent]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Your Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="numWorkers" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Number of Workers
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Total crew members on payroll</p>
                  <input
                    id="numWorkers"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g., 10"
                    value={numWorkers}
                    onChange={(e) => setNumWorkers(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="avgHourlyRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Average Hourly Rate ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Average base wage across your crew</p>
                  <input
                    id="avgHourlyRate"
                    type="number"
                    min="0"
                    step="0.50"
                    placeholder="e.g., 25.00"
                    value={avgHourlyRate}
                    onChange={(e) => setAvgHourlyRate(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="hoursPerWeek" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Hours per Week (per worker)
                  </label>
                  <input
                    id="hoursPerWeek"
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
                  <label htmlFor="burdenPercent" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Labor Burden Rate (%)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">
                    Taxes, insurance, workers&apos; comp, benefits. Typically 25&ndash;40% for contractors.
                  </p>
                  <input
                    id="burdenPercent"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={burdenPercent}
                    onChange={(e) => setBurdenPercent(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Payroll Cost
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">True Weekly Payroll Cost</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.weeklyTotalCost)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatCurrency(results.weeklyBasePay)} base + {formatCurrency(results.weeklyBurdenCost)} burden
                    ({results.burdenPercentDisplay}%)
                  </p>
                </div>

                {/* Secondary results */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Monthly</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.monthlyTotalCost)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Yearly</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.yearlyTotalCost)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Per Worker/Wk</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.costPerEmployee)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">True Hourly</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.trueHourlyRate)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      vs {formatCurrency(parseFloat(avgHourlyRate))} base
                    </p>
                  </div>
                </div>

                {/* Insight callout */}
                <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">Hidden labor burden</p>
                      <p className="mt-1 text-sm text-text-body">
                        Your crew&apos;s labor burden adds {formatCurrency(results.burdenPerEmployee)}/worker/week
                        beyond base wages. That&apos;s {formatCurrency(results.weeklyBurdenCost * 52)}/year you need to
                        account for in every job estimate.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Automate your payroll calculations</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks every hour and piece, calculates pay automatically, and gives you payroll
                    reports you can run in minutes.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Users className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter your crew details to see your total payroll cost including labor burden.
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

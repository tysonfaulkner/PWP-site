"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, Shield, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  annualPayroll: number;
  annualPremium: number;
  monthlyPremium: number;
  costPerHour: number;
  costPerEmployee: number;
}

const TRADE_RATES: Record<string, { label: string; rate: number }> = {
  roofing: { label: "Roofing", rate: 18.5 },
  framing: { label: "Framing / Carpentry", rate: 14.0 },
  concrete: { label: "Concrete / Masonry", rate: 10.0 },
  electrical: { label: "Electrical", rate: 5.5 },
  plumbing: { label: "Plumbing", rate: 5.0 },
  painting: { label: "Painting", rate: 8.0 },
  drywall: { label: "Drywall", rate: 9.0 },
  flooring: { label: "Flooring", rate: 7.0 },
  siding: { label: "Siding / Exterior", rate: 12.0 },
  general: { label: "General Construction", rate: 10.0 },
  landscaping: { label: "Landscaping", rate: 6.5 },
  hvac: { label: "HVAC", rate: 5.5 },
  demolition: { label: "Demolition", rate: 13.0 },
  manufacturing: { label: "Manufacturing", rate: 4.0 },
  office: { label: "Office / Admin", rate: 0.5 },
};

export function WorkersCompEstimator() {
  const [trade, setTrade] = useState("roofing");
  const [numEmployees, setNumEmployees] = useState("5");
  const [avgHourlyRate, setAvgHourlyRate] = useState("28");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [expMod, setExpMod] = useState("1.0");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const employees = parseFloat(numEmployees);
    const hourly = parseFloat(avgHourlyRate);
    const hpw = parseFloat(hoursPerWeek);
    const mod = parseFloat(expMod);

    if (isNaN(employees) || isNaN(hourly) || isNaN(hpw) || isNaN(mod)) return;
    if (employees <= 0 || hourly <= 0 || hpw <= 0 || mod <= 0) return;

    const tradeRate = TRADE_RATES[trade]?.rate || 10;
    const annualPayroll = employees * hourly * hpw * 52;
    const annualPremium = (annualPayroll / 100) * tradeRate * mod;
    const monthlyPremium = annualPremium / 12;
    const totalHours = employees * hpw * 52;
    const costPerHour = annualPremium / totalHours;
    const costPerEmployee = annualPremium / employees;

    setResults({
      annualPayroll,
      annualPremium,
      monthlyPremium,
      costPerHour,
      costPerEmployee,
    });
  }, [trade, numEmployees, avgHourlyRate, hoursPerWeek, expMod]);

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
                <h2 className="font-heading text-2xl text-text-primary">Estimate Your Premium</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="wc-trade" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Trade / Classification
                  </label>
                  <select
                    id="wc-trade"
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    {Object.entries(TRADE_RATES).map(([key, { label, rate }]) => (
                      <option key={key} value={key}>
                        {label} (${rate.toFixed(1)} per $100 payroll)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wc-employees" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Number of Employees
                    </label>
                    <input
                      id="wc-employees"
                      type="number"
                      min="1"
                      max="500"
                      step="1"
                      value={numEmployees}
                      onChange={(e) => setNumEmployees(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="wc-hourly" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Avg. Hourly Rate ($)
                    </label>
                    <input
                      id="wc-hourly"
                      type="number"
                      min="0"
                      step="1"
                      value={avgHourlyRate}
                      onChange={(e) => setAvgHourlyRate(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="wc-hours" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours/Week per Employee
                    </label>
                    <input
                      id="wc-hours"
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
                    <label htmlFor="wc-mod" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Experience Mod (EMR)
                    </label>
                    <p className="mb-2 text-xs text-text-muted">1.0 = average. Lower is better.</p>
                    <input
                      id="wc-mod"
                      type="number"
                      min="0.5"
                      max="2.0"
                      step="0.05"
                      value={expMod}
                      onChange={(e) => setExpMod(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Estimate Premium
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-brand-blue bg-white p-8 shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Estimated Annual Premium</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.annualPremium)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatCurrency(results.monthlyPremium)}/month
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Cost/Hour</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.costPerHour)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">per employee per hour</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Cost/Employee</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.costPerEmployee)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">per employee per year</p>
                  </div>
                </div>

                <div className="rounded-xl border border-border-default bg-white p-5">
                  <p className="text-sm font-bold text-text-primary">How this was calculated</p>
                  <p className="mt-2 text-sm text-text-body">
                    Annual payroll ({formatCurrency(results.annualPayroll)}) &divide; 100 &times;{" "}
                    {TRADE_RATES[trade]?.rate} rate &times; {expMod} EMR = {formatCurrency(results.annualPremium)}
                  </p>
                </div>

                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Factor this into every bid</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Workers&apos; comp is one of the biggest hidden costs in construction. Piece Work Pro includes it in
                    your labor burden calculations so your job costs are always accurate.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Shield className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your estimate will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Select your trade and enter payroll details to estimate your workers&apos; comp premium.
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

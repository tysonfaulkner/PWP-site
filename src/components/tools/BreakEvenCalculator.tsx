"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, Target, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  breakEvenRevenue: number;
  breakEvenJobs: number;
  monthlyFixedCosts: number;
  contributionMargin: number;
  contributionMarginPercent: number;
  currentProfit: number;
  isProfitable: boolean;
}

export function BreakEvenCalculator() {
  const [monthlyOverhead, setMonthlyOverhead] = useState("");
  const [avgJobRevenue, setAvgJobRevenue] = useState("");
  const [avgJobCost, setAvgJobCost] = useState("");
  const [ownerSalary, setOwnerSalary] = useState("");
  const [currentMonthlyJobs, setCurrentMonthlyJobs] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const overhead = parseFloat(monthlyOverhead) || 0;
    const jobRev = parseFloat(avgJobRevenue);
    const jobCost = parseFloat(avgJobCost);
    const salary = parseFloat(ownerSalary) || 0;
    const currentJobs = parseFloat(currentMonthlyJobs) || 0;

    if (isNaN(jobRev) || isNaN(jobCost) || jobRev <= 0) return;

    const monthlyFixed = overhead + salary;
    const contributionMargin = jobRev - jobCost;
    const contributionMarginPct = (contributionMargin / jobRev) * 100;

    if (contributionMargin <= 0) return;

    const breakEvenJobs = Math.ceil(monthlyFixed / contributionMargin);
    const breakEvenRevenue = breakEvenJobs * jobRev;
    const currentProfit = (currentJobs * contributionMargin) - monthlyFixed;

    setResults({
      breakEvenRevenue,
      breakEvenJobs,
      monthlyFixedCosts: monthlyFixed,
      contributionMargin,
      contributionMarginPercent: contributionMarginPct,
      currentProfit,
      isProfitable: currentProfit > 0,
    });
  }, [monthlyOverhead, avgJobRevenue, avgJobCost, ownerSalary, currentMonthlyJobs]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Your Numbers</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="be-overhead" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Monthly Overhead ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Rent, insurance, trucks, office, tools, admin</p>
                  <input
                    id="be-overhead"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 8000"
                    value={monthlyOverhead}
                    onChange={(e) => setMonthlyOverhead(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="be-salary" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Owner&apos;s Monthly Salary ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">What you need to pay yourself each month</p>
                  <input
                    id="be-salary"
                    type="number"
                    min="0"
                    step="500"
                    placeholder="e.g., 6000"
                    value={ownerSalary}
                    onChange={(e) => setOwnerSalary(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="be-jobRevenue" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Average Job Revenue ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">What you charge the customer per job on average</p>
                  <input
                    id="be-jobRevenue"
                    type="number"
                    min="0"
                    step="500"
                    placeholder="e.g., 12000"
                    value={avgJobRevenue}
                    onChange={(e) => setAvgJobRevenue(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="be-jobCost" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Average Job Cost ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Materials + labor + equipment per job</p>
                  <input
                    id="be-jobCost"
                    type="number"
                    min="0"
                    step="500"
                    placeholder="e.g., 8000"
                    value={avgJobCost}
                    onChange={(e) => setAvgJobCost(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="be-currentJobs" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Current Jobs per Month
                  </label>
                  <p className="mb-2 text-xs text-text-muted">How many jobs you&apos;re completing right now</p>
                  <input
                    id="be-currentJobs"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 6"
                    value={currentMonthlyJobs}
                    onChange={(e) => setCurrentMonthlyJobs(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Break-Even
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Break-Even Point</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {results.breakEvenJobs} jobs/month
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatCurrency(results.breakEvenRevenue)} in monthly revenue to cover all fixed costs
                  </p>
                </div>

                {/* Current status */}
                <div
                  className={`rounded-xl border-2 p-5 ${
                    results.isProfitable
                      ? "border-brand-blue/40 bg-brand-blue-light"
                      : "border-brand-orange/40 bg-brand-orange-light"
                  }`}
                >
                  <p className="text-sm font-bold text-text-primary">
                    {results.isProfitable ? "You're above break-even" : "You're below break-even"}
                  </p>
                  <p className="mt-1 text-sm text-text-body">
                    At {currentMonthlyJobs} jobs/month, you&apos;re{" "}
                    {results.isProfitable ? "profiting" : "losing"}{" "}
                    {formatCurrency(Math.abs(results.currentProfit))}/month{" "}
                    {results.isProfitable ? "above" : "below"} break-even.
                  </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Fixed Costs</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.monthlyFixedCosts)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">/month</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Margin/Job</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.contributionMargin)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {results.contributionMarginPercent.toFixed(1)}% margin
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track your job costs in real time</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro shows you exactly what every job costs as it happens &mdash; so you always know
                    where you stand against your break-even point.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Target className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter your overhead and job details to find your break-even point.
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

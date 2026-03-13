"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  numberOfJobs: number;
  totalRevenue: number;
  totalGrossProfit: number;
  revenuePerJob: number;
  grossProfitPerJob: number;
  grossMargin: number;
}

const inputClass =
  "w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";

export function AverageJobCalculator() {
  const [numberOfJobs, setNumberOfJobs] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  const [totalGrossProfit, setTotalGrossProfit] = useState("");
  const [timePeriod, setTimePeriod] = useState("month");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const jobs = parseFloat(numberOfJobs);
    const revenue = parseFloat(totalRevenue);
    const grossProfit = parseFloat(totalGrossProfit);

    if (!jobs || jobs <= 0 || !revenue || revenue < 0) return;

    const revenuePerJob = revenue / jobs;
    const profit = !isNaN(grossProfit) && grossProfit >= 0 ? grossProfit : 0;
    const grossProfitPerJob = jobs > 0 ? profit / jobs : 0;
    const grossMargin = revenue > 0 ? (profit / revenue) * 100 : 0;

    setResults({
      numberOfJobs: jobs,
      totalRevenue: revenue,
      totalGrossProfit: profit,
      revenuePerJob,
      grossProfitPerJob,
      grossMargin,
    });
  }, [numberOfJobs, totalRevenue, totalGrossProfit]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Your Job Numbers</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="ajs-period" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Time Period
                  </label>
                  <select
                    id="ajs-period"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    className={inputClass}
                  >
                    <option value="week">Last Week</option>
                    <option value="month">Last Month</option>
                    <option value="quarter">Last Quarter</option>
                    <option value="year">Last Year</option>
                    <option value="custom">Custom Period</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ajs-jobs" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Number of Jobs Completed
                  </label>
                  <input
                    id="ajs-jobs"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g., 12"
                    value={numberOfJobs}
                    onChange={(e) => setNumberOfJobs(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="ajs-revenue" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Revenue from Those Jobs ($)
                  </label>
                  <input
                    id="ajs-revenue"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 85000"
                    value={totalRevenue}
                    onChange={(e) => setTotalRevenue(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="ajs-profit" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Gross Profit from Those Jobs ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">
                    Revenue minus materials, labor, and direct job costs. Leave blank if unsure.
                  </p>
                  <input
                    id="ajs-profit"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 34000"
                    value={totalGrossProfit}
                    onChange={(e) => setTotalGrossProfit(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Average Job Size
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Average Revenue per Job</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.revenuePerJob)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    Based on {results.numberOfJobs} job{results.numberOfJobs !== 1 ? "s" : ""} over the{" "}
                    {timePeriod === "custom" ? "selected period" : `last ${timePeriod}`}
                  </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Total Revenue</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.totalRevenue)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">{results.numberOfJobs} jobs</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Gross Profit / Job</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.grossProfitPerJob)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {results.grossMargin > 0 ? `${results.grossMargin.toFixed(1)}% margin` : "No profit entered"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Total Gross Profit</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.totalGrossProfit)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {results.grossMargin > 0 ? `${results.grossMargin.toFixed(1)}% of revenue` : "Not provided"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Gross Margin</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {results.grossMargin > 0 ? `${results.grossMargin.toFixed(1)}%` : "—"}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {results.grossMargin > 0 ? "Profit ÷ revenue" : "Enter gross profit"}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track every job automatically</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks your jobs in real time &mdash; so you always know your average job size, revenue
                    trends, and which jobs are worth taking.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <BarChart3 className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter your job count and revenue to see your average revenue and profit per job.
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

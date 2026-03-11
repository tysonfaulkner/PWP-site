"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, Users, BarChart3, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  weeklyRevenue: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
  jobsPerYear: number;
  revenuePerWorker: number;
  breakEvenJobs: number;
}

export function RevenueCalculator() {
  const [avgJobPrice, setAvgJobPrice] = useState("");
  const [jobsPerWeek, setJobsPerWeek] = useState("");
  const [crewSize, setCrewSize] = useState("");
  const [monthlyOverhead, setMonthlyOverhead] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const jobPrice = parseFloat(avgJobPrice);
    const jobs = parseFloat(jobsPerWeek);
    const crew = parseFloat(crewSize);
    const overhead = parseFloat(monthlyOverhead) || 0;

    if (isNaN(jobPrice) || isNaN(jobs) || isNaN(crew)) return;
    if (jobPrice <= 0 || jobs <= 0 || crew <= 0) return;

    const weekly = jobPrice * jobs;
    const monthly = weekly * 4.33;
    const yearly = weekly * 52;
    const jobsYear = jobs * 52;
    const perWorker = yearly / crew;
    const breakEven = overhead > 0 ? Math.ceil(overhead / jobPrice) : 0;

    setResults({
      weeklyRevenue: weekly,
      monthlyRevenue: monthly,
      yearlyRevenue: yearly,
      jobsPerYear: jobsYear,
      revenuePerWorker: perWorker,
      breakEvenJobs: breakEven,
    });
  }, [avgJobPrice, jobsPerWeek, crewSize, monthlyOverhead]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Your Business Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="avgJobPrice" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Average Job Price ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">What you typically charge per job or project</p>
                  <input
                    id="avgJobPrice"
                    type="number"
                    min="0"
                    step="500"
                    placeholder="e.g., 8000"
                    value={avgJobPrice}
                    onChange={(e) => setAvgJobPrice(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="jobsPerWeek" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Jobs Completed per Week
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Average number of jobs your company finishes each week</p>
                  <input
                    id="jobsPerWeek"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="e.g., 3"
                    value={jobsPerWeek}
                    onChange={(e) => setJobsPerWeek(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="crewSize" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Crew Size
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Number of workers across all your crews</p>
                  <input
                    id="crewSize"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g., 12"
                    value={crewSize}
                    onChange={(e) => setCrewSize(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="monthlyOverhead" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Monthly Overhead ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">
                    Rent, insurance, trucks, office — your fixed monthly costs (optional)
                  </p>
                  <input
                    id="monthlyOverhead"
                    type="number"
                    min="0"
                    step="500"
                    placeholder="e.g., 15000"
                    value={monthlyOverhead}
                    onChange={(e) => setMonthlyOverhead(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Revenue
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Annual Revenue</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.yearlyRevenue)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatNumber(results.jobsPerYear)} jobs/year at {formatCurrency(parseFloat(avgJobPrice))}/job
                  </p>
                </div>

                {/* Secondary results */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Weekly</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.weeklyRevenue)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Monthly</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.monthlyRevenue)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Rev / Worker</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.revenuePerWorker)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">per year</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Jobs / Year</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatNumber(results.jobsPerYear)}
                    </p>
                  </div>
                </div>

                {/* Break-even insight */}
                {results.breakEvenJobs > 0 && (
                  <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-5">
                    <p className="text-sm font-bold text-text-primary">Break-even point</p>
                    <p className="mt-1 text-sm text-text-body">
                      You need to complete at least <strong>{results.breakEvenJobs} jobs/month</strong> just to cover your
                      {" "}{formatCurrency(parseFloat(monthlyOverhead))}/month overhead — before paying your crew or taking home
                      any profit.
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Know your numbers on every job</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks labor costs in real time so you can see exactly how much of that revenue turns into
                    profit — job by job.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="sm" className="mt-4" external>
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
                    Enter your job volume and pricing to project your company&apos;s revenue.
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

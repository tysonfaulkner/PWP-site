"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, BarChart3, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  average: number;
  median: number;
  min: number;
  max: number;
  count: number;
  totalRevenue: number;
}

export function AverageJobCalculator() {
  const [jobPrices, setJobPrices] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const prices = jobPrices
      .split(/[,\n]+/)
      .map((s) => s.trim())
      .filter((s) => s !== "")
      .map((s) => parseFloat(s))
      .filter((n) => !isNaN(n) && n > 0);

    if (prices.length === 0) return;

    const sorted = [...prices].sort((a, b) => a - b);
    const count = sorted.length;
    const totalRevenue = sorted.reduce((sum, p) => sum + p, 0);
    const average = totalRevenue / count;
    const min = sorted[0];
    const max = sorted[count - 1];

    let median: number;
    if (count % 2 === 0) {
      median = (sorted[count / 2 - 1] + sorted[count / 2]) / 2;
    } else {
      median = sorted[Math.floor(count / 2)];
    }

    setResults({ average, median, min, max, count, totalRevenue });
  }, [jobPrices]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Your Job Prices</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="ajs-prices" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Job Prices ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">
                    Enter job prices separated by commas or one per line
                  </p>
                  <textarea
                    id="ajs-prices"
                    rows={6}
                    placeholder={"e.g.,\n8000, 12000, 6500, 15000, 9200\n\nor one per line:\n8000\n12000\n6500"}
                    value={jobPrices}
                    onChange={(e) => setJobPrices(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Average Job Size</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.average)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    Based on {results.count} job{results.count !== 1 ? "s" : ""} totaling{" "}
                    {formatCurrency(results.totalRevenue)}
                  </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Median</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.median)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">Middle value</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Total Revenue</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.totalRevenue)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">{results.count} jobs</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Highest</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.max)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">Largest job</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Lowest</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.min)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">Smallest job</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track every job automatically</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks your jobs in real time &mdash; so you always know your average job size, revenue
                    trends, and which jobs are worth taking.
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
                    Enter your job prices to see your average, median, and range.
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

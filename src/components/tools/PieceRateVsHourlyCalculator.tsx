"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  pieceRateDaily: number;
  pieceRateWeekly: number;
  pieceRateMonthly: number;
  pieceRateYearly: number;
  pieceRateHourly: number;
  hourlyDaily: number;
  hourlyWeekly: number;
  hourlyMonthly: number;
  hourlyYearly: number;
  difference: number;
  differencePercent: number;
  pieceRateWins: boolean;
}

export function PieceRateVsHourlyCalculator() {
  const [pieceRate, setPieceRate] = useState("");
  const [unitsPerDay, setUnitsPerDay] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("8");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const piece = parseFloat(pieceRate);
    const units = parseFloat(unitsPerDay);
    const hourly = parseFloat(hourlyRate);
    const hours = parseFloat(hoursPerDay);
    const days = parseFloat(daysPerWeek);

    if (isNaN(piece) || isNaN(units) || isNaN(hourly) || isNaN(hours) || isNaN(days)) return;
    if (piece <= 0 || units <= 0 || hourly <= 0 || hours <= 0 || days <= 0) return;

    const prDaily = piece * units;
    const prWeekly = prDaily * days;
    const prMonthly = prWeekly * 4.33;
    const prYearly = prWeekly * 52;
    const prHourly = prDaily / hours;

    const hDaily = hourly * hours;
    const hWeekly = hDaily * days;
    const hMonthly = hWeekly * 4.33;
    const hYearly = hWeekly * 52;

    const diff = prYearly - hYearly;
    const diffPct = hYearly > 0 ? (diff / hYearly) * 100 : 0;

    setResults({
      pieceRateDaily: prDaily,
      pieceRateWeekly: prWeekly,
      pieceRateMonthly: prMonthly,
      pieceRateYearly: prYearly,
      pieceRateHourly: prHourly,
      hourlyDaily: hDaily,
      hourlyWeekly: hWeekly,
      hourlyMonthly: hMonthly,
      hourlyYearly: hYearly,
      difference: diff,
      differencePercent: diffPct,
      pieceRateWins: diff > 0,
    });
  }, [pieceRate, unitsPerDay, hourlyRate, hoursPerDay, daysPerWeek]);

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
                <h2 className="font-heading text-2xl text-text-primary">Compare Pay Methods</h2>
              </div>

              <div className="space-y-5">
                <div className="rounded-lg bg-brand-blue-light p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-blue">Piece Rate Pay</p>
                </div>

                <div>
                  <label htmlFor="pvh-pieceRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Pay per Piece ($)
                  </label>
                  <input
                    id="pvh-pieceRate"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g., 3.00"
                    value={pieceRate}
                    onChange={(e) => setPieceRate(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="pvh-unitsPerDay" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Units Completed per Day
                  </label>
                  <input
                    id="pvh-unitsPerDay"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 40"
                    value={unitsPerDay}
                    onChange={(e) => setUnitsPerDay(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div className="rounded-lg bg-brand-orange-light p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">Hourly Pay</p>
                </div>

                <div>
                  <label htmlFor="pvh-hourlyRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Hourly Rate ($)
                  </label>
                  <input
                    id="pvh-hourlyRate"
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
                    <label htmlFor="pvh-hoursPerDay" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours per Day
                    </label>
                    <input
                      id="pvh-hoursPerDay"
                      type="number"
                      min="1"
                      max="24"
                      step="0.5"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="pvh-daysPerWeek" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Days per Week
                    </label>
                    <input
                      id="pvh-daysPerWeek"
                      type="number"
                      min="1"
                      max="7"
                      step="1"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Compare Earnings
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                {/* Winner callout */}
                <div
                  className={`rounded-2xl border-2 bg-white p-8 shadow-lg ${
                    results.pieceRateWins ? "border-brand-blue" : "border-brand-orange"
                  }`}
                >
                  <p
                    className={`text-sm font-bold uppercase tracking-wider ${
                      results.pieceRateWins ? "text-brand-blue" : "text-brand-orange"
                    }`}
                  >
                    {results.pieceRateWins ? "Piece Rate Earns More" : "Hourly Earns More"}
                  </p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(Math.abs(results.difference))}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {Math.abs(results.differencePercent).toFixed(1)}% more per year with{" "}
                    {results.pieceRateWins ? "piece rate" : "hourly"} pay
                  </p>
                </div>

                {/* Comparison table */}
                <div className="overflow-hidden rounded-xl border border-border-default">
                  <table className="w-full text-sm">
                    <thead className="bg-bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left font-bold text-text-primary">Period</th>
                        <th className="px-4 py-3 text-right font-bold text-brand-blue">Piece Rate</th>
                        <th className="px-4 py-3 text-right font-bold text-brand-orange">Hourly</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-default bg-white">
                      <tr className="hover:bg-bg-subtle">
                        <td className="px-4 py-3 text-text-body">Daily</td>
                        <td className="px-4 py-3 text-right font-mono text-text-body">{formatCurrency(results.pieceRateDaily)}</td>
                        <td className="px-4 py-3 text-right font-mono text-text-body">{formatCurrency(results.hourlyDaily)}</td>
                      </tr>
                      <tr className="hover:bg-bg-subtle">
                        <td className="px-4 py-3 text-text-body">Weekly</td>
                        <td className="px-4 py-3 text-right font-mono text-text-body">{formatCurrency(results.pieceRateWeekly)}</td>
                        <td className="px-4 py-3 text-right font-mono text-text-body">{formatCurrency(results.hourlyWeekly)}</td>
                      </tr>
                      <tr className="hover:bg-bg-subtle">
                        <td className="px-4 py-3 text-text-body">Monthly</td>
                        <td className="px-4 py-3 text-right font-mono text-text-body">{formatCurrency(results.pieceRateMonthly)}</td>
                        <td className="px-4 py-3 text-right font-mono text-text-body">{formatCurrency(results.hourlyMonthly)}</td>
                      </tr>
                      <tr className="hover:bg-bg-subtle font-bold">
                        <td className="px-4 py-3 text-text-primary">Yearly</td>
                        <td className="px-4 py-3 text-right font-mono text-brand-blue">{formatCurrency(results.pieceRateYearly)}</td>
                        <td className="px-4 py-3 text-right font-mono text-brand-orange">{formatCurrency(results.hourlyYearly)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Effective hourly rate callout */}
                <div className="rounded-xl border-2 border-brand-blue/40 bg-brand-blue-light p-5">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                    <p className="text-sm font-bold text-text-primary">Effective Hourly Rate</p>
                  </div>
                  <p className="mt-1 text-sm text-text-body">
                    At this piece rate, the worker earns an effective {formatCurrency(results.pieceRateHourly)}/hr &mdash;{" "}
                    {results.pieceRateHourly > parseFloat(hourlyRate)
                      ? `${formatCurrency(results.pieceRateHourly - parseFloat(hourlyRate))}/hr more than hourly.`
                      : `${formatCurrency(parseFloat(hourlyRate) - results.pieceRateHourly)}/hr less than hourly.`}
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track piece rate and hourly pay in one system</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro handles both pay types. Workers log piece work and hours &mdash; you see everything in one
                    dashboard.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <TrendingUp className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your comparison will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter piece rate and hourly details to see which pay method earns more.
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

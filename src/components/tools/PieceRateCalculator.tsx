"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  dailyEarnings: number;
  weeklyEarnings: number;
  monthlyEarnings: number;
  yearlyEarnings: number;
  effectiveHourlyRate: number;
  totalUnitsPerWeek: number;
  totalUnitsPerMonth: number;
}

export function PieceRateCalculator() {
  const [pieceRate, setPieceRate] = useState("");
  const [unitsPerDay, setUnitsPerDay] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [hoursPerDay, setHoursPerDay] = useState("8");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const rate = parseFloat(pieceRate);
    const units = parseFloat(unitsPerDay);
    const days = parseFloat(daysPerWeek);
    const hours = parseFloat(hoursPerDay);

    if (isNaN(rate) || isNaN(units) || isNaN(days) || isNaN(hours)) return;
    if (rate <= 0 || units <= 0 || days <= 0 || hours <= 0) return;

    const daily = rate * units;
    const weekly = daily * days;
    const monthly = weekly * 4.33;
    const yearly = weekly * 52;
    const hourlyEquivalent = daily / hours;

    setResults({
      dailyEarnings: daily,
      weeklyEarnings: weekly,
      monthlyEarnings: monthly,
      yearlyEarnings: yearly,
      effectiveHourlyRate: hourlyEquivalent,
      totalUnitsPerWeek: units * days,
      totalUnitsPerMonth: units * days * 4.33,
    });
  }, [pieceRate, unitsPerDay, daysPerWeek, hoursPerDay]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Your Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="pieceRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Pay per Piece ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">How much you earn for each unit completed</p>
                  <input
                    id="pieceRate"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="e.g., 2.50"
                    value={pieceRate}
                    onChange={(e) => setPieceRate(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="unitsPerDay" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Units Completed per Day
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Average pieces/units you finish in a day</p>
                  <input
                    id="unitsPerDay"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 50"
                    value={unitsPerDay}
                    onChange={(e) => setUnitsPerDay(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="daysPerWeek" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Days per Week
                    </label>
                    <input
                      id="daysPerWeek"
                      type="number"
                      min="1"
                      max="7"
                      step="1"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="hoursPerDay" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours per Day
                    </label>
                    <input
                      id="hoursPerDay"
                      type="number"
                      min="1"
                      max="24"
                      step="0.5"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Earnings
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                {/* Primary result — Weekly Earnings */}
                <div className="rounded-2xl border-2 border-brand-blue bg-white p-8 shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Worker&apos;s Weekly Earnings</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.weeklyEarnings)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatNumber(results.totalUnitsPerWeek)} units &times; {formatCurrency(parseFloat(pieceRate))}/unit &times; {daysPerWeek} days
                  </p>
                </div>

                {/* Daily breakdown callout */}
                <div className="rounded-xl border-2 border-brand-orange/40 bg-brand-orange-light p-5">
                  <p className="text-sm font-bold text-text-primary">Daily take-home: {formatCurrency(results.dailyEarnings)}/day</p>
                  <p className="mt-1 text-sm text-text-body">
                    That&apos;s an effective rate of {formatCurrency(results.effectiveHourlyRate)}/hour based on a {hoursPerDay}-hour day.
                  </p>
                </div>

                {/* Secondary results grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Monthly</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.monthlyEarnings)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Yearly</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.yearlyEarnings)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Hourly Equiv.</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.effectiveHourlyRate)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Units/Month</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatNumber(results.totalUnitsPerMonth)}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track your piece work automatically</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Stop doing this math by hand. Piece Work Pro calculates earnings for your whole crew in real time.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
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
                    Enter your piece rate and daily output to see your earning potential.
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

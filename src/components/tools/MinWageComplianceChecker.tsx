"use client";

import { useState, useCallback } from "react";
import { Calculator, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  effectiveHourlyRate: number;
  meetsMinWage: boolean;
  shortfall: number;
  shortfallPerWeek: number;
  minWage: number;
}

const STATE_MIN_WAGES: Record<string, number> = {
  AL: 7.25, AK: 11.73, AZ: 14.70, AR: 11.00, CA: 16.50,
  CO: 14.81, CT: 16.35, DE: 15.00, FL: 14.00, GA: 7.25,
  HI: 14.00, ID: 7.25, IL: 14.00, IN: 7.25, IA: 7.25,
  KS: 7.25, KY: 7.25, LA: 7.25, ME: 14.65, MD: 15.00,
  MA: 15.00, MI: 10.56, MN: 11.13, MS: 7.25, MO: 13.75,
  MT: 10.55, NE: 13.50, NV: 12.00, NH: 7.25, NJ: 15.49,
  NM: 12.00, NY: 15.00, NC: 7.25, ND: 7.25, OH: 10.70,
  OK: 7.25, OR: 14.70, PA: 7.25, RI: 15.00, SC: 7.25,
  SD: 11.50, TN: 7.25, TX: 7.25, UT: 7.25, VT: 14.01,
  VA: 12.41, WA: 16.66, WV: 8.75, WI: 7.25, WY: 7.25,
  DC: 17.50,
};

const STATES = Object.entries(STATE_MIN_WAGES)
  .map(([abbr, wage]) => ({ abbr, wage }))
  .sort((a, b) => a.abbr.localeCompare(b.abbr));

export function MinWageComplianceChecker() {
  const [state, setState] = useState("TX");
  const [pieceRate, setPieceRate] = useState("");
  const [unitsPerDay, setUnitsPerDay] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("8");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const rate = parseFloat(pieceRate);
    const units = parseFloat(unitsPerDay);
    const hours = parseFloat(hoursPerDay);
    const days = parseFloat(daysPerWeek);

    if (isNaN(rate) || isNaN(units) || isNaN(hours) || isNaN(days)) return;
    if (rate <= 0 || units <= 0 || hours <= 0 || days <= 0) return;

    const dailyEarnings = rate * units;
    const effectiveHourly = dailyEarnings / hours;
    const minWage = STATE_MIN_WAGES[state] || 7.25;
    const meetsMinWage = effectiveHourly >= minWage;
    const shortfall = meetsMinWage ? 0 : minWage - effectiveHourly;
    const weeklyHours = hours * days;
    const shortfallPerWeek = shortfall * weeklyHours;

    setResults({
      effectiveHourlyRate: effectiveHourly,
      meetsMinWage,
      shortfall,
      shortfallPerWeek,
      minWage,
    });
  }, [state, pieceRate, unitsPerDay, hoursPerDay, daysPerWeek]);

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
                <h2 className="font-heading text-2xl text-text-primary">Check Compliance</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-text-primary">
                    State
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Select the state where work is performed</p>
                  <select
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  >
                    {STATES.map((s) => (
                      <option key={s.abbr} value={s.abbr}>
                        {s.abbr} &mdash; {formatCurrency(s.wage)}/hr minimum
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mw-pieceRate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Pay per Piece ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Amount earned per unit completed</p>
                  <input
                    id="mw-pieceRate"
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
                  <label htmlFor="mw-unitsPerDay" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Units Completed per Day
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Average pieces completed in a workday</p>
                  <input
                    id="mw-unitsPerDay"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 30"
                    value={unitsPerDay}
                    onChange={(e) => setUnitsPerDay(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mw-hoursPerDay" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours per Day
                    </label>
                    <input
                      id="mw-hoursPerDay"
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
                    <label htmlFor="mw-daysPerWeek" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Days per Week
                    </label>
                    <input
                      id="mw-daysPerWeek"
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
                  Check Compliance
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
                    results.meetsMinWage ? "border-brand-blue" : "border-brand-orange"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {results.meetsMinWage ? (
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                    ) : (
                      <XCircle className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                    )}
                    <p
                      className={`text-sm font-bold uppercase tracking-wider ${
                        results.meetsMinWage ? "text-brand-blue" : "text-brand-orange"
                      }`}
                    >
                      {results.meetsMinWage ? "Compliant" : "Below Minimum Wage"}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.effectiveHourlyRate)}/hr
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    Effective hourly rate vs. {formatCurrency(results.minWage)}/hr {state} minimum
                  </p>
                </div>

                {!results.meetsMinWage && (
                  <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-text-primary">Make-up pay required</p>
                        <p className="mt-1 text-sm text-text-body">
                          You&apos;re {formatCurrency(results.shortfall)}/hr below minimum wage. That&apos;s{" "}
                          {formatCurrency(results.shortfallPerWeek)}/week in make-up pay you owe per worker. Under the FLSA,
                          you must pay the difference when piece rate earnings fall below minimum wage.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {results.meetsMinWage && (
                  <div className="rounded-xl border border-brand-blue/30 bg-brand-blue-light p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-text-primary">You&apos;re in the clear</p>
                        <p className="mt-1 text-sm text-text-body">
                          Your piece rate earnings exceed the {state} minimum wage by{" "}
                          {formatCurrency(results.effectiveHourlyRate - results.minWage)}/hr. Keep in mind that slower days
                          might bring this down &mdash; track production daily to stay compliant.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Automate compliance tracking</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro automatically calculates effective hourly rates for every worker and flags when piece rate
                    earnings fall below minimum wage &mdash; so you never get caught off guard.
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
                    Enter your piece rate details to check if you meet minimum wage requirements.
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

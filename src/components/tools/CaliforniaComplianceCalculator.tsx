"use client";

import { useState, useCallback } from "react";
import { Calculator, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  totalPieceEarnings: number;
  totalHoursWorked: number;
  effectiveHourlyRate: number;
  meetsMinWage: boolean;
  caMinWage: number;
  restPeriodPay: number;
  recoveryPeriodPay: number;
  totalRestPay: number;
  totalOwe: number;
  makeUpPay: number;
}

export function CaliforniaComplianceCalculator() {
  const [totalPieceEarnings, setTotalPieceEarnings] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [daysWorked, setDaysWorked] = useState("5");
  const [shiftsOver10, setShiftsOver10] = useState("0");
  const [outdoorHeatDays, setOutdoorHeatDays] = useState("0");
  const [results, setResults] = useState<Results | null>(null);

  const CA_MIN_WAGE = 16.50;

  const calculate = useCallback(() => {
    const earnings = parseFloat(totalPieceEarnings);
    const hours = parseFloat(totalHours);
    const days = parseFloat(daysWorked);
    const over10 = parseFloat(shiftsOver10) || 0;
    const heatDays = parseFloat(outdoorHeatDays) || 0;

    if (isNaN(earnings) || isNaN(hours) || isNaN(days)) return;
    if (earnings <= 0 || hours <= 0 || days <= 0) return;

    const effectiveRate = earnings / hours;
    const meetsMin = effectiveRate >= CA_MIN_WAGE;
    const makeUp = meetsMin ? 0 : (CA_MIN_WAGE - effectiveRate) * hours;

    // AB 1513: Rest period pay = total pieces earned / total hours worked * 10 min per rest period
    // Workers get one 10-min rest per 4 hours. An 8-hour shift = 2 rest periods.
    // Shifts over 10 hours = 3 rest periods.
    const restPeriodsPerDay = 2;
    const extraRestPeriods = over10; // 1 additional per shift over 10 hrs
    const totalRestPeriods = (days * restPeriodsPerDay) + extraRestPeriods;
    const restPeriodRate = earnings / hours; // effective hourly
    const restPay = totalRestPeriods * (restPeriodRate * (10 / 60));

    // Recovery periods for outdoor heat days
    const recoveryPay = heatDays * (restPeriodRate * (5 / 60));

    const totalRest = restPay + recoveryPay;
    const totalOwe = makeUp + totalRest;

    setResults({
      totalPieceEarnings: earnings,
      totalHoursWorked: hours,
      effectiveHourlyRate: effectiveRate,
      meetsMinWage: meetsMin,
      caMinWage: CA_MIN_WAGE,
      restPeriodPay: restPay,
      recoveryPeriodPay: recoveryPay,
      totalRestPay: totalRest,
      totalOwe: totalOwe,
      makeUpPay: makeUp,
    });
  }, [totalPieceEarnings, totalHours, daysWorked, shiftsOver10, outdoorHeatDays]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Weekly Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="ca-earnings" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Piece Rate Earnings ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Worker&apos;s total piece rate pay for the week</p>
                  <input
                    id="ca-earnings"
                    type="number"
                    min="0"
                    step="10"
                    placeholder="e.g., 950"
                    value={totalPieceEarnings}
                    onChange={(e) => setTotalPieceEarnings(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="ca-hours" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Hours Worked
                  </label>
                  <p className="mb-2 text-xs text-text-muted">All hours in the workweek (not counting rest periods)</p>
                  <input
                    id="ca-hours"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="e.g., 45"
                    value={totalHours}
                    onChange={(e) => setTotalHours(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="ca-days" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Days Worked This Week
                  </label>
                  <input
                    id="ca-days"
                    type="number"
                    min="1"
                    max="7"
                    step="1"
                    value={daysWorked}
                    onChange={(e) => setDaysWorked(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="ca-over10" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Shifts Over 10 Hours
                  </label>
                  <p className="mb-2 text-xs text-text-muted">How many days exceeded 10 hours (extra rest period)</p>
                  <input
                    id="ca-over10"
                    type="number"
                    min="0"
                    max="7"
                    step="1"
                    value={shiftsOver10}
                    onChange={(e) => setShiftsOver10(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="ca-heat" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Outdoor Heat Days
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Days with outdoor work in high heat (recovery periods apply)</p>
                  <input
                    id="ca-heat"
                    type="number"
                    min="0"
                    max="7"
                    step="1"
                    value={outdoorHeatDays}
                    onChange={(e) => setOutdoorHeatDays(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Check CA Compliance
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                {/* Effective rate check */}
                <div
                  className={`rounded-2xl border-2 bg-white p-8 shadow-lg ${
                    results.meetsMinWage ? "border-brand-blue" : "border-brand-orange"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {results.meetsMinWage ? (
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                    )}
                    <p
                      className={`text-sm font-bold uppercase tracking-wider ${
                        results.meetsMinWage ? "text-brand-blue" : "text-brand-orange"
                      }`}
                    >
                      {results.meetsMinWage ? "Meets CA Minimum Wage" : "Below CA Minimum Wage"}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.effectiveHourlyRate)}/hr
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    vs. CA minimum wage of {formatCurrency(results.caMinWage)}/hr
                  </p>
                </div>

                {/* AB 1513 Rest period pay */}
                <div className="rounded-xl border border-border-default bg-white p-5">
                  <p className="text-sm font-bold text-text-primary">AB 1513 Rest Period Pay</p>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Rest period pay (10-min breaks)</span>
                      <span className="font-mono text-text-body">{formatCurrency(results.restPeriodPay)}</span>
                    </div>
                    {results.recoveryPeriodPay > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Heat recovery period pay</span>
                        <span className="font-mono text-text-body">{formatCurrency(results.recoveryPeriodPay)}</span>
                      </div>
                    )}
                    {results.makeUpPay > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Minimum wage make-up pay</span>
                        <span className="font-mono text-text-body">{formatCurrency(results.makeUpPay)}</span>
                      </div>
                    )}
                    <div className="border-t border-border-default pt-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-text-primary">Total Additional Pay Owed</span>
                        <span className="font-mono text-text-primary">{formatCurrency(results.totalOwe)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-text-primary">California AB 1513 requirement</p>
                      <p className="mt-1 text-sm text-text-body">
                        In California, piece rate workers must be separately compensated for rest periods and
                        recovery periods at their effective piece rate. This pay is in addition to their piece rate
                        earnings and is required by law.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Automate California piece rate compliance</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro automatically calculates rest period pay, recovery period pay, and minimum wage
                    make-up pay for California piece rate workers &mdash; so you stay compliant without doing the math.
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
                    Enter weekly details to check AB 1513 compliance and calculate additional pay owed.
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

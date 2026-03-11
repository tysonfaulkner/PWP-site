"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, Clock, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  regularRate: number;
  overtimeHours: number;
  overtimePremium: number;
  totalOvertimePay: number;
  totalWeeklyPay: number;
  straightTimeHourly: number;
}

export function OvertimeCalculator() {
  const [weeklyPieceEarnings, setWeeklyPieceEarnings] = useState("");
  const [totalHoursWorked, setTotalHoursWorked] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const earnings = parseFloat(weeklyPieceEarnings);
    const hours = parseFloat(totalHoursWorked);

    if (isNaN(earnings) || isNaN(hours)) return;
    if (earnings <= 0 || hours <= 0) return;

    const regularRate = earnings / hours;
    const otHours = Math.max(0, hours - 40);
    const halfTimePremium = regularRate * 0.5;
    const totalOT = halfTimePremium * otHours;
    const totalPay = earnings + totalOT;

    setResults({
      regularRate,
      overtimeHours: otHours,
      overtimePremium: halfTimePremium,
      totalOvertimePay: totalOT,
      totalWeeklyPay: totalPay,
      straightTimeHourly: regularRate,
    });
  }, [weeklyPieceEarnings, totalHoursWorked]);

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
                  <label htmlFor="weeklyPieceEarnings" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Piece Rate Earnings ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">
                    Worker&apos;s total piece work earnings for the week (before overtime)
                  </p>
                  <input
                    id="weeklyPieceEarnings"
                    type="number"
                    min="0"
                    step="50"
                    placeholder="e.g., 1200"
                    value={weeklyPieceEarnings}
                    onChange={(e) => setWeeklyPieceEarnings(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="totalHoursWorked" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Hours Worked This Week
                  </label>
                  <p className="mb-2 text-xs text-text-muted">
                    All hours worked, including overtime (must be over 40 for OT to apply)
                  </p>
                  <input
                    id="totalHoursWorked"
                    type="number"
                    min="0"
                    step="0.5"
                    placeholder="e.g., 50"
                    value={totalHoursWorked}
                    onChange={(e) => setTotalHoursWorked(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                {/* FLSA method explanation */}
                <div className="rounded-lg border border-brand-blue/20 bg-brand-blue/5 p-4">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" aria-hidden="true" />
                    <p className="text-xs text-text-body">
                      <strong>FLSA half-time method:</strong> Piece rate earnings already cover straight time for all hours.
                      Only the half-time premium (0.5&times; the regular rate) is owed per overtime hour.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Overtime Pay
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Total Weekly Pay</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.totalWeeklyPay)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatCurrency(parseFloat(weeklyPieceEarnings))} piece earnings + {formatCurrency(results.totalOvertimePay)} overtime premium
                  </p>
                </div>

                {/* Step-by-step breakdown */}
                <div className="space-y-3">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">1</span>
                        <p className="text-sm font-medium text-text-primary">Regular Rate</p>
                      </div>
                      <p className="font-mono text-lg font-bold text-text-primary">{formatCurrency(results.regularRate)}/hr</p>
                    </div>
                    <p className="mt-1 pl-8 text-xs text-text-muted">
                      {formatCurrency(parseFloat(weeklyPieceEarnings))} &divide; {totalHoursWorked} hours
                    </p>
                  </div>

                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue/10 text-xs font-bold text-brand-blue">2</span>
                        <p className="text-sm font-medium text-text-primary">OT Premium (half-time)</p>
                      </div>
                      <p className="font-mono text-lg font-bold text-text-primary">{formatCurrency(results.overtimePremium)}/hr</p>
                    </div>
                    <p className="mt-1 pl-8 text-xs text-text-muted">
                      {formatCurrency(results.regularRate)} &times; 0.5
                    </p>
                  </div>

                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange/10 text-xs font-bold text-brand-orange">3</span>
                        <p className="text-sm font-medium text-text-primary">Total OT Owed</p>
                      </div>
                      <p className="font-mono text-lg font-bold text-brand-orange">{formatCurrency(results.totalOvertimePay)}</p>
                    </div>
                    <p className="mt-1 pl-8 text-xs text-text-muted">
                      {formatCurrency(results.overtimePremium)} &times; {results.overtimeHours} OT hours
                    </p>
                  </div>
                </div>

                {/* Warning */}
                {results.overtimeHours > 0 && (
                  <div className="rounded-xl border border-brand-orange/30 bg-brand-orange-light p-5">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-text-primary">Don&apos;t skip the overtime premium</p>
                        <p className="mt-1 text-sm text-text-body">
                          Even though this worker is paid by the piece, the FLSA requires you to pay the {formatCurrency(results.overtimePremium)}/hr
                          half-time premium for all {results.overtimeHours} hours over 40. Skipping this can trigger DOL audits and back-pay penalties.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {results.overtimeHours === 0 && (
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-text-primary">No overtime this week</p>
                        <p className="mt-1 text-sm text-text-body">
                          This worker logged {totalHoursWorked} hours — under the 40-hour threshold. No overtime premium is owed.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Automate overtime compliance</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks hours and piece work together, so overtime calculations happen automatically — keeping
                    you FLSA-compliant without the spreadsheet headaches.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Clock className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter a worker&apos;s weekly piece rate earnings and hours to calculate overtime pay.
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

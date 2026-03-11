"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, Users, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  unitsPerManHour: number;
  revenuePerManHour: number;
  costPerUnit: number;
  dailyOutput: number;
  weeklyOutput: number;
  dailyRevenue: number;
  weeklyRevenue: number;
  laborEfficiency: number;
}

export function CrewProductivityCalculator() {
  const [crewSize, setCrewSize] = useState("4");
  const [hoursPerDay, setHoursPerDay] = useState("8");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [unitsPerDay, setUnitsPerDay] = useState("");
  const [revenuePerUnit, setRevenuePerUnit] = useState("");
  const [laborCostPerHour, setLaborCostPerHour] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const crew = parseFloat(crewSize);
    const hours = parseFloat(hoursPerDay);
    const days = parseFloat(daysPerWeek);
    const units = parseFloat(unitsPerDay);
    const revPerUnit = parseFloat(revenuePerUnit) || 0;
    const laborCost = parseFloat(laborCostPerHour) || 0;

    if (isNaN(crew) || isNaN(hours) || isNaN(units)) return;
    if (crew <= 0 || hours <= 0 || units <= 0) return;

    const manHoursPerDay = crew * hours;
    const unitsPerMH = units / manHoursPerDay;
    const revPerMH = (units * revPerUnit) / manHoursPerDay;
    const costPerU = laborCost > 0 ? (laborCost * manHoursPerDay) / units : 0;
    const weeklyUnits = units * days;
    const dailyRev = units * revPerUnit;
    const weeklyRev = dailyRev * days;
    const laborEff = revPerMH > 0 && laborCost > 0 ? (revPerMH / laborCost) * 100 : 0;

    setResults({
      unitsPerManHour: unitsPerMH,
      revenuePerManHour: revPerMH,
      costPerUnit: costPerU,
      dailyOutput: units,
      weeklyOutput: weeklyUnits,
      dailyRevenue: dailyRev,
      weeklyRevenue: weeklyRev,
      laborEfficiency: laborEff,
    });
  }, [crewSize, hoursPerDay, daysPerWeek, unitsPerDay, revenuePerUnit, laborCostPerHour]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Crew Details</h2>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="cp-crew" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Crew Size
                    </label>
                    <input
                      id="cp-crew"
                      type="number"
                      min="1"
                      max="50"
                      step="1"
                      value={crewSize}
                      onChange={(e) => setCrewSize(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-hours" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours/Day
                    </label>
                    <input
                      id="cp-hours"
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
                    <label htmlFor="cp-days" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Days/Week
                    </label>
                    <input
                      id="cp-days"
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

                <div>
                  <label htmlFor="cp-units" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Units Completed per Day
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Squares, rooms, fixtures, feet &mdash; any unit of output</p>
                  <input
                    id="cp-units"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 24"
                    value={unitsPerDay}
                    onChange={(e) => setUnitsPerDay(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="cp-revenue" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Revenue per Unit ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">What you charge the customer per unit (optional)</p>
                  <input
                    id="cp-revenue"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 200"
                    value={revenuePerUnit}
                    onChange={(e) => setRevenuePerUnit(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="cp-laborCost" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Avg. Labor Cost per Hour ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Including burden (optional)</p>
                  <input
                    id="cp-laborCost"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 35"
                    value={laborCostPerHour}
                    onChange={(e) => setLaborCostPerHour(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Productivity
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-brand-blue bg-white p-8 shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Units per Man-Hour</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {results.unitsPerManHour.toFixed(2)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {results.dailyOutput} units/day &divide; {crewSize} workers &times; {hoursPerDay} hrs
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Weekly Output</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {results.weeklyOutput.toFixed(0)} units
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Rev/Man-Hour</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.revenuePerManHour)}
                    </p>
                  </div>
                  {results.costPerUnit > 0 && (
                    <div className="rounded-xl border border-border-default bg-white p-5">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                        <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Labor/Unit</p>
                      </div>
                      <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                        {formatCurrency(results.costPerUnit)}
                      </p>
                    </div>
                  )}
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Weekly Rev</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.weeklyRevenue)}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track crew productivity in real time</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks units completed per worker, per job, per day &mdash; so you always know who&apos;s
                    producing and which crews are most efficient.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Users className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter crew size and output to measure productivity.
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

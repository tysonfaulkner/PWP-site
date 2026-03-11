"use client";

import { useState, useCallback } from "react";
import { Calculator, Clock, Users, Calendar, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  totalManHours: number;
  workDays: number;
  workWeeks: number;
  calendarDays: number;
}

export function JobDurationEstimator() {
  const [totalUnits, setTotalUnits] = useState("");
  const [unitsPerManHour, setUnitsPerManHour] = useState("");
  const [crewSize, setCrewSize] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("8");
  const [daysPerWeek, setDaysPerWeek] = useState("5");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const units = parseFloat(totalUnits);
    const rate = parseFloat(unitsPerManHour);
    const crew = parseFloat(crewSize);
    const hpd = parseFloat(hoursPerDay) || 8;
    const dpw = parseFloat(daysPerWeek) || 5;

    if (isNaN(units) || isNaN(rate) || isNaN(crew) || units <= 0 || rate <= 0 || crew <= 0) return;

    const totalManHours = units / rate;
    const crewHoursPerDay = crew * hpd;
    const workDays = totalManHours / crewHoursPerDay;
    const workWeeks = workDays / dpw;
    // Calendar days: add weekends proportionally
    const calendarDays = workDays * (7 / dpw);

    setResults({
      totalManHours: Math.round(totalManHours * 10) / 10,
      workDays: Math.ceil(workDays * 10) / 10,
      workWeeks: Math.round(workWeeks * 10) / 10,
      calendarDays: Math.ceil(calendarDays),
    });
  }, [totalUnits, unitsPerManHour, crewSize, hoursPerDay, daysPerWeek]);

  const inputClass =
    "w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20";

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Job Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="jd-units" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Total Units / Scope
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Total units of work (squares, sheets, linear ft, etc.)</p>
                  <input
                    id="jd-units"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="e.g., 200"
                    value={totalUnits}
                    onChange={(e) => setTotalUnits(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="jd-rate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Units per Man-Hour
                  </label>
                  <p className="mb-2 text-xs text-text-muted">How many units one worker completes per hour</p>
                  <input
                    id="jd-rate"
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="e.g., 2.5"
                    value={unitsPerManHour}
                    onChange={(e) => setUnitsPerManHour(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="jd-crew" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Crew Size
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Number of workers on the job</p>
                  <input
                    id="jd-crew"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="e.g., 4"
                    value={crewSize}
                    onChange={(e) => setCrewSize(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="jd-hpd" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours / Day
                    </label>
                    <input
                      id="jd-hpd"
                      type="number"
                      min="1"
                      max="24"
                      step="0.5"
                      placeholder="8"
                      value={hoursPerDay}
                      onChange={(e) => setHoursPerDay(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="jd-dpw" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Days / Week
                    </label>
                    <input
                      id="jd-dpw"
                      type="number"
                      min="1"
                      max="7"
                      step="1"
                      placeholder="5"
                      value={daysPerWeek}
                      onChange={(e) => setDaysPerWeek(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Estimate Duration
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Estimated Duration</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {results.workDays} work days
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    ~{results.calendarDays} calendar days ({results.workWeeks} weeks)
                  </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Man-Hours</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {results.totalManHours.toLocaleString()}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">Total labor hours</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Work Weeks</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">{results.workWeeks}</p>
                    <p className="mt-1 text-xs text-text-muted">At {daysPerWeek} days/week</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Crew Size</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">{crewSize}</p>
                    <p className="mt-1 text-xs text-text-muted">Workers on job</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Calendar Days</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">{results.calendarDays}</p>
                    <p className="mt-1 text-xs text-text-muted">Including weekends</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track real-time job progress</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks your crew&apos;s output daily &mdash; so you always know if a job is on schedule
                    or falling behind.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
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
                    Enter your job scope and crew details to estimate duration.
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

"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  totalSquares: number;
  laborCostPerSquare: number;
  totalLaborCost: number;
  laborCostPerWorker: number;
  totalJobCost: number;
  laborPercent: number;
  costPerSqFt: number;
}

export function RoofingLaborCalculator() {
  const [roofSqFt, setRoofSqFt] = useState("");
  const [ratePerSquare, setRatePerSquare] = useState("");
  const [crewSize, setCrewSize] = useState("4");
  const [materialPerSquare, setMaterialPerSquare] = useState("100");
  const [dumpFees, setDumpFees] = useState("500");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const sqft = parseFloat(roofSqFt);
    const rate = parseFloat(ratePerSquare);
    const crew = parseFloat(crewSize);
    const matCost = parseFloat(materialPerSquare) || 0;
    const dump = parseFloat(dumpFees) || 0;

    if (isNaN(sqft) || isNaN(rate) || isNaN(crew)) return;
    if (sqft <= 0 || rate <= 0 || crew <= 0) return;

    const squares = sqft / 100;
    const totalLabor = squares * rate;
    const laborPerWorker = totalLabor / crew;
    const totalMaterials = squares * matCost;
    const totalJob = totalLabor + totalMaterials + dump;
    const laborPct = totalJob > 0 ? (totalLabor / totalJob) * 100 : 0;
    const perSqFt = totalJob / sqft;

    setResults({
      totalSquares: squares,
      laborCostPerSquare: rate,
      totalLaborCost: totalLabor,
      laborCostPerWorker: laborPerWorker,
      totalJobCost: totalJob,
      laborPercent: laborPct,
      costPerSqFt: perSqFt,
    });
  }, [roofSqFt, ratePerSquare, crewSize, materialPerSquare, dumpFees]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Roof Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="roof-sqft" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Roof Size (sq ft)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Total roof area to be installed or replaced</p>
                  <input
                    id="roof-sqft"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 2500"
                    value={roofSqFt}
                    onChange={(e) => setRoofSqFt(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="roof-rate" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Labor Rate per Square ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">1 square = 100 sq ft. Typically $50&ndash;$150/square</p>
                  <input
                    id="roof-rate"
                    type="number"
                    min="0"
                    step="5"
                    placeholder="e.g., 75"
                    value={ratePerSquare}
                    onChange={(e) => setRatePerSquare(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="roof-crew" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Crew Size
                  </label>
                  <input
                    id="roof-crew"
                    type="number"
                    min="1"
                    max="20"
                    step="1"
                    value={crewSize}
                    onChange={(e) => setCrewSize(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="roof-material" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Material Cost per Square ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Shingles, underlayment, flashing, nails, etc.</p>
                  <input
                    id="roof-material"
                    type="number"
                    min="0"
                    step="10"
                    value={materialPerSquare}
                    onChange={(e) => setMaterialPerSquare(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="roof-dump" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Dump / Disposal Fees ($)
                  </label>
                  <input
                    id="roof-dump"
                    type="number"
                    min="0"
                    step="50"
                    value={dumpFees}
                    onChange={(e) => setDumpFees(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Labor Cost
                </button>
              </div>
            </div>
          </AnimateIn>

          {/* Results */}
          <AnimateIn delay={0.1}>
            {results ? (
              <div className="space-y-6">
                <div className="rounded-2xl border-2 border-brand-blue bg-white p-8 shadow-lg">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Total Labor Cost</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.totalLaborCost)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {results.totalSquares.toFixed(1)} squares &times; {formatCurrency(results.laborCostPerSquare)}/square
                  </p>
                </div>

                <div className="rounded-xl border-2 border-brand-orange/40 bg-brand-orange-light p-5">
                  <p className="text-sm font-bold text-text-primary">
                    Per worker: {formatCurrency(results.laborCostPerWorker)}
                  </p>
                  <p className="mt-1 text-sm text-text-body">
                    Split between {crewSize} crew members on this job
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Total Job Cost</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.totalJobCost)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Labor %</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {results.laborPercent.toFixed(1)}%
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-border-default bg-white p-5">
                  <p className="text-sm font-bold text-text-primary">Cost per Square Foot</p>
                  <p className="mt-1 text-sm text-text-body">
                    Total job cost of {formatCurrency(results.costPerSqFt)}/sq ft (materials + labor + disposal)
                  </p>
                </div>

                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track roofing labor costs automatically</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Your crew logs squares completed from their phone. Piece Work Pro calculates the pay
                    automatically &mdash; no spreadsheets, no guesswork.
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
                    Enter your roof size and labor rate to see your costs per square.
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

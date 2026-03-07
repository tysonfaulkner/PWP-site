"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, Target, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  totalCosts: number;
  grossProfit: number;
  profitMargin: number;
  markupPercent: number;
  isProfitable: boolean;
  breakEvenRevenue: number;
}

export function JobProfitCalculator() {
  const [revenue, setRevenue] = useState("");
  const [materialCost, setMaterialCost] = useState("");
  const [laborCost, setLaborCost] = useState("");
  const [equipmentCost, setEquipmentCost] = useState("");
  const [overheadPercent, setOverheadPercent] = useState("10");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const rev = parseFloat(revenue);
    const materials = parseFloat(materialCost) || 0;
    const labor = parseFloat(laborCost) || 0;
    const equipment = parseFloat(equipmentCost) || 0;
    const overhead = parseFloat(overheadPercent) || 0;

    if (isNaN(rev) || rev <= 0) return;

    const directCosts = materials + labor + equipment;
    const overheadCost = directCosts * (overhead / 100);
    const totalCosts = directCosts + overheadCost;
    const grossProfit = rev - totalCosts;
    const profitMargin = (grossProfit / rev) * 100;
    const markupPercent = totalCosts > 0 ? (grossProfit / totalCosts) * 100 : 0;
    setResults({
      totalCosts,
      grossProfit,
      profitMargin,
      markupPercent,
      isProfitable: grossProfit > 0,
      breakEvenRevenue: totalCosts,
    });
  }, [revenue, materialCost, laborCost, equipmentCost, overheadPercent]);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Job Details</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="revenue" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Contract / Bid Price ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Total amount the customer is paying for the job</p>
                  <input
                    id="revenue"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 25000"
                    value={revenue}
                    onChange={(e) => setRevenue(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="materialCost" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Material Costs ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Lumber, shingles, concrete, supplies, etc.</p>
                  <input
                    id="materialCost"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 8000"
                    value={materialCost}
                    onChange={(e) => setMaterialCost(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="laborCost" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Labor Costs ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Total crew wages for this job (including burden)</p>
                  <input
                    id="laborCost"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 10000"
                    value={laborCost}
                    onChange={(e) => setLaborCost(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="equipmentCost" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Equipment / Other Costs ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Rentals, dump fees, subcontractors, permits</p>
                  <input
                    id="equipmentCost"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 2000"
                    value={equipmentCost}
                    onChange={(e) => setEquipmentCost(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div>
                  <label htmlFor="overheadPercent" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Overhead (%)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">
                    Office rent, insurance, trucks, admin. Typically 8&ndash;15% of direct costs.
                  </p>
                  <input
                    id="overheadPercent"
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={overheadPercent}
                    onChange={(e) => setOverheadPercent(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Profit
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
                    results.isProfitable ? "border-brand-blue" : "border-brand-orange"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {results.isProfitable ? (
                      <CheckCircle2 className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                    ) : (
                      <XCircle className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                    )}
                    <p
                      className={`text-sm font-bold uppercase tracking-wider ${
                        results.isProfitable ? "text-brand-blue" : "text-brand-orange"
                      }`}
                    >
                      {results.isProfitable ? "Gross Profit" : "Loss on This Job"}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(Math.abs(results.grossProfit))}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatCurrency(parseFloat(revenue))} revenue &minus; {formatCurrency(results.totalCosts)} total
                    costs
                  </p>
                </div>

                {/* Secondary results */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Profit Margin</p>
                    </div>
                    <p
                      className={`mt-2 font-mono text-2xl font-bold ${
                        results.profitMargin >= 20
                          ? "text-brand-blue"
                          : results.profitMargin >= 0
                            ? "text-brand-orange"
                            : "text-red-600"
                      }`}
                    >
                      {results.profitMargin.toFixed(1)}%
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Markup</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {results.markupPercent.toFixed(1)}%
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Total Costs</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.totalCosts)}
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Break-Even</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.breakEvenRevenue)}
                    </p>
                  </div>
                </div>

                {/* Margin vs Markup explainer */}
                <div className="rounded-xl border border-border-default bg-white p-5">
                  <p className="text-sm font-bold text-text-primary">Margin vs. Markup &mdash; What&apos;s the Difference?</p>
                  <p className="mt-2 text-sm text-text-body">
                    <strong>Profit margin</strong> is your profit as a percentage of revenue (what the customer pays).{" "}
                    <strong>Markup</strong> is your profit as a percentage of costs (what you spend). A 20% margin
                    equals a 25% markup. Many contractors confuse the two and underprice jobs.
                  </p>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Know your job costs before it&apos;s too late</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks labor costs in real time so you can see if a job is profitable while it&apos;s
                    still in progress &mdash; not after the invoice goes out.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signin" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Target className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter your job revenue and costs to see your profit margin and markup.
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

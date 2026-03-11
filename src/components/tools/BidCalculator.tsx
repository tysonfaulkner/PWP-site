"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, Target, TrendingUp, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface Results {
  materialTotal: number;
  laborTotal: number;
  equipmentTotal: number;
  directCosts: number;
  overheadAmount: number;
  profitAmount: number;
  bidPrice: number;
  profitMargin: number;
  markup: number;
}

export function BidCalculator() {
  const [materialCost, setMaterialCost] = useState("");
  const [laborHours, setLaborHours] = useState("");
  const [laborRate, setLaborRate] = useState("");
  const [crewSize, setCrewSize] = useState("3");
  const [equipmentCost, setEquipmentCost] = useState("");
  const [overheadPercent, setOverheadPercent] = useState("10");
  const [profitPercent, setProfitPercent] = useState("20");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const materials = parseFloat(materialCost) || 0;
    const hours = parseFloat(laborHours) || 0;
    const rate = parseFloat(laborRate) || 0;
    const crew = parseFloat(crewSize) || 1;
    const equipment = parseFloat(equipmentCost) || 0;
    const overhead = parseFloat(overheadPercent) || 0;
    const profit = parseFloat(profitPercent) || 0;

    const laborTotal = hours * rate * crew;
    const directCosts = materials + laborTotal + equipment;
    const overheadAmount = directCosts * (overhead / 100);
    const totalCosts = directCosts + overheadAmount;
    const profitAmount = totalCosts * (profit / 100);
    const bidPrice = totalCosts + profitAmount;
    const profitMargin = bidPrice > 0 ? (profitAmount / bidPrice) * 100 : 0;
    const markupPct = totalCosts > 0 ? (profitAmount / totalCosts) * 100 : 0;

    setResults({
      materialTotal: materials,
      laborTotal,
      equipmentTotal: equipment,
      directCosts,
      overheadAmount,
      profitAmount,
      bidPrice,
      profitMargin,
      markup: markupPct,
    });
  }, [materialCost, laborHours, laborRate, crewSize, equipmentCost, overheadPercent, profitPercent]);

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
                <h2 className="font-heading text-2xl text-text-primary">Build Your Estimate</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="bid-materials" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Material Costs ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Total materials for the job</p>
                  <input
                    id="bid-materials"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 5000"
                    value={materialCost}
                    onChange={(e) => setMaterialCost(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="bid-hours" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Labor Hours
                    </label>
                    <input
                      id="bid-hours"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="e.g., 40"
                      value={laborHours}
                      onChange={(e) => setLaborHours(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="bid-rate" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Rate ($/hr)
                    </label>
                    <input
                      id="bid-rate"
                      type="number"
                      min="0"
                      step="1"
                      placeholder="e.g., 35"
                      value={laborRate}
                      onChange={(e) => setLaborRate(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="bid-crew" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Crew Size
                    </label>
                    <input
                      id="bid-crew"
                      type="number"
                      min="1"
                      max="50"
                      step="1"
                      value={crewSize}
                      onChange={(e) => setCrewSize(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="bid-equipment" className="mb-1.5 block text-sm font-medium text-text-primary">
                    Equipment / Other ($)
                  </label>
                  <p className="mb-2 text-xs text-text-muted">Rentals, permits, dump fees, subs</p>
                  <input
                    id="bid-equipment"
                    type="number"
                    min="0"
                    step="100"
                    placeholder="e.g., 1500"
                    value={equipmentCost}
                    onChange={(e) => setEquipmentCost(e.target.value)}
                    className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bid-overhead" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Overhead (%)
                    </label>
                    <p className="mb-2 text-xs text-text-muted">8&ndash;15% typical</p>
                    <input
                      id="bid-overhead"
                      type="number"
                      min="0"
                      max="50"
                      step="1"
                      value={overheadPercent}
                      onChange={(e) => setOverheadPercent(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="bid-profit" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Profit Markup (%)
                    </label>
                    <p className="mb-2 text-xs text-text-muted">15&ndash;30% typical</p>
                    <input
                      id="bid-profit"
                      type="number"
                      min="0"
                      max="100"
                      step="1"
                      value={profitPercent}
                      onChange={(e) => setProfitPercent(e.target.value)}
                      className="w-full rounded-lg border border-border-default px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Calculate Bid Price
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Recommended Bid Price</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.bidPrice)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatCurrency(results.profitAmount)} profit at {results.profitMargin.toFixed(1)}% margin
                  </p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Margin</p>
                    </div>
                    <p className="mt-2 font-mono text-xl font-bold text-text-primary">
                      {results.profitMargin.toFixed(1)}%
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Markup</p>
                    </div>
                    <p className="mt-2 font-mono text-xl font-bold text-text-primary">
                      {results.markup.toFixed(1)}%
                    </p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Profit</p>
                    </div>
                    <p className="mt-2 font-mono text-xl font-bold text-text-primary">
                      {formatCurrency(results.profitAmount)}
                    </p>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="rounded-xl border border-border-default bg-white p-5">
                  <p className="text-sm font-bold text-text-primary">Bid Breakdown</p>
                  <div className="mt-3 space-y-2">
                    {[
                      { label: "Materials", value: results.materialTotal },
                      { label: "Labor", value: results.laborTotal },
                      { label: "Equipment / Other", value: results.equipmentTotal },
                      { label: "Overhead", value: results.overheadAmount },
                      { label: "Profit", value: results.profitAmount },
                    ]
                      .filter((item) => item.value > 0)
                      .map((item) => (
                        <div key={item.label} className="flex justify-between text-sm">
                          <span className="text-text-muted">{item.label}</span>
                          <span className="font-mono text-text-body">{formatCurrency(item.value)}</span>
                        </div>
                      ))}
                    <div className="border-t border-border-default pt-2">
                      <div className="flex justify-between text-sm font-bold">
                        <span className="text-text-primary">Bid Price</span>
                        <span className="font-mono text-text-primary">{formatCurrency(results.bidPrice)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track actual vs. estimated costs</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks your real labor costs against your estimates in real time &mdash; so you know
                    if you&apos;re on budget before the job is done.
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
                  <p className="mt-4 font-heading text-xl text-text-muted">Your estimate will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter your job costs, overhead, and desired profit to generate a bid price.
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

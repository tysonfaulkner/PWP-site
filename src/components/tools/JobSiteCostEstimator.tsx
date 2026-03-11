"use client";

import { useState, useCallback } from "react";
import { Calculator, DollarSign, TrendingUp, Landmark, ArrowRight } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";

interface CategoryCost {
  label: string;
  amount: number;
  percent: number;
}

interface Results {
  categories: CategoryCost[];
  subtotal: number;
  contingencyAmount: number;
  grandTotal: number;
  costPerSqFt: number | null;
}

export function JobSiteCostEstimator() {
  const [laborHours, setLaborHours] = useState("");
  const [laborRate, setLaborRate] = useState("");
  const [crewSize, setCrewSize] = useState("");
  const [materials, setMaterials] = useState("");
  const [equipment, setEquipment] = useState("");
  const [permits, setPermits] = useState("");
  const [subcontractors, setSubcontractors] = useState("");
  const [sitePrep, setSitePrep] = useState("");
  const [disposal, setDisposal] = useState("");
  const [insuranceBonds, setInsuranceBonds] = useState("");
  const [contingencyPct, setContingencyPct] = useState("10");
  const [sqFt, setSqFt] = useState("");
  const [results, setResults] = useState<Results | null>(null);

  const calculate = useCallback(() => {
    const hours = parseFloat(laborHours) || 0;
    const rate = parseFloat(laborRate) || 0;
    const crew = parseFloat(crewSize) || 1;
    const mat = parseFloat(materials) || 0;
    const equip = parseFloat(equipment) || 0;
    const perm = parseFloat(permits) || 0;
    const subs = parseFloat(subcontractors) || 0;
    const site = parseFloat(sitePrep) || 0;
    const disp = parseFloat(disposal) || 0;
    const ins = parseFloat(insuranceBonds) || 0;
    const contPct = parseFloat(contingencyPct) || 0;
    const sf = parseFloat(sqFt) || 0;

    const laborTotal = hours * rate * crew;
    const subtotal = laborTotal + mat + equip + perm + subs + site + disp + ins;

    if (subtotal <= 0) return;

    const contingencyAmount = subtotal * (contPct / 100);
    const grandTotal = subtotal + contingencyAmount;

    const rawCategories = [
      { label: "Labor", amount: laborTotal },
      { label: "Materials", amount: mat },
      { label: "Equipment Rental", amount: equip },
      { label: "Permits & Inspections", amount: perm },
      { label: "Subcontractors", amount: subs },
      { label: "Site Prep / Mobilization", amount: site },
      { label: "Disposal / Dump Fees", amount: disp },
      { label: "Insurance / Bonds", amount: ins },
    ];

    const categories = rawCategories
      .filter((c) => c.amount > 0)
      .map((c) => ({
        ...c,
        percent: (c.amount / subtotal) * 100,
      }));

    setResults({
      categories,
      subtotal,
      contingencyAmount,
      grandTotal,
      costPerSqFt: sf > 0 ? grandTotal / sf : null,
    });
  }, [laborHours, laborRate, crewSize, materials, equipment, permits, subcontractors, sitePrep, disposal, insuranceBonds, contingencyPct, sqFt]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

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
                <h2 className="font-heading text-2xl text-text-primary">Enter Job Costs</h2>
              </div>

              <div className="space-y-5">
                {/* Labor section */}
                <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Labor</p>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="jsc-hours" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Hours
                    </label>
                    <input id="jsc-hours" type="number" min="0" placeholder="e.g., 40" value={laborHours} onChange={(e) => setLaborHours(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-rate" className="mb-1.5 block text-sm font-medium text-text-primary">
                      $/Hour
                    </label>
                    <input id="jsc-rate" type="number" min="0" step="0.5" placeholder="e.g., 35" value={laborRate} onChange={(e) => setLaborRate(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-crew" className="mb-1.5 block text-sm font-medium text-text-primary">
                      Crew
                    </label>
                    <input id="jsc-crew" type="number" min="1" step="1" placeholder="e.g., 4" value={crewSize} onChange={(e) => setCrewSize(e.target.value)} className={inputClass} />
                  </div>
                </div>

                {/* Cost categories */}
                <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Direct Costs</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="jsc-materials" className="mb-1.5 block text-sm font-medium text-text-primary">Materials ($)</label>
                    <input id="jsc-materials" type="number" min="0" placeholder="e.g., 5000" value={materials} onChange={(e) => setMaterials(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-equipment" className="mb-1.5 block text-sm font-medium text-text-primary">Equipment ($)</label>
                    <input id="jsc-equipment" type="number" min="0" placeholder="e.g., 1200" value={equipment} onChange={(e) => setEquipment(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-permits" className="mb-1.5 block text-sm font-medium text-text-primary">Permits ($)</label>
                    <input id="jsc-permits" type="number" min="0" placeholder="e.g., 500" value={permits} onChange={(e) => setPermits(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-subs" className="mb-1.5 block text-sm font-medium text-text-primary">Subcontractors ($)</label>
                    <input id="jsc-subs" type="number" min="0" placeholder="e.g., 3000" value={subcontractors} onChange={(e) => setSubcontractors(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-siteprep" className="mb-1.5 block text-sm font-medium text-text-primary">Site Prep ($)</label>
                    <input id="jsc-siteprep" type="number" min="0" placeholder="e.g., 800" value={sitePrep} onChange={(e) => setSitePrep(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-disposal" className="mb-1.5 block text-sm font-medium text-text-primary">Disposal ($)</label>
                    <input id="jsc-disposal" type="number" min="0" placeholder="e.g., 600" value={disposal} onChange={(e) => setDisposal(e.target.value)} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="jsc-insurance" className="mb-1.5 block text-sm font-medium text-text-primary">Insurance / Bonds ($)</label>
                  <input id="jsc-insurance" type="number" min="0" placeholder="e.g., 400" value={insuranceBonds} onChange={(e) => setInsuranceBonds(e.target.value)} className={inputClass} />
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Adjustments</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="jsc-contingency" className="mb-1.5 block text-sm font-medium text-text-primary">Contingency (%)</label>
                    <input id="jsc-contingency" type="number" min="0" max="50" step="1" placeholder="e.g., 10" value={contingencyPct} onChange={(e) => setContingencyPct(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="jsc-sqft" className="mb-1.5 block text-sm font-medium text-text-primary">Job Sq Ft (optional)</label>
                    <input id="jsc-sqft" type="number" min="0" placeholder="e.g., 2000" value={sqFt} onChange={(e) => setSqFt(e.target.value)} className={inputClass} />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={calculate}
                  className="w-full rounded-lg bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md active:shadow-sm"
                >
                  Estimate Job Cost
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
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-blue">Total Estimated Cost</p>
                  <p className="mt-2 font-mono text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                    {formatCurrency(results.grandTotal)}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">
                    {formatCurrency(results.subtotal)} + {formatCurrency(results.contingencyAmount)} contingency
                  </p>
                </div>

                {/* Cost breakdown */}
                <div className="rounded-xl border border-border-default bg-white p-6">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-text-muted">Cost Breakdown</p>
                  <div className="space-y-3">
                    {results.categories.map((cat) => (
                      <div key={cat.label}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-text-body">{cat.label}</span>
                          <span className="font-mono font-medium text-text-primary">{formatCurrency(cat.amount)}</span>
                        </div>
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-bg-subtle">
                          <div
                            className="h-full rounded-full bg-brand-blue"
                            style={{ width: `${Math.min(cat.percent, 100)}%` }}
                          />
                        </div>
                        <p className="mt-0.5 text-right text-xs text-text-muted">{cat.percent.toFixed(1)}%</p>
                      </div>
                    ))}
                    <div className="border-t border-border-default pt-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-text-body">Contingency</span>
                        <span className="font-mono font-medium text-text-primary">
                          {formatCurrency(results.contingencyAmount)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-brand-blue" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">Subtotal</p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {formatCurrency(results.subtotal)}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">Before contingency</p>
                  </div>
                  <div className="rounded-xl border border-border-default bg-white p-5">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                      <p className="text-xs font-bold uppercase tracking-wider text-text-muted">
                        {results.costPerSqFt !== null ? "Cost / Sq Ft" : "Categories"}
                      </p>
                    </div>
                    <p className="mt-2 font-mono text-2xl font-bold text-text-primary">
                      {results.costPerSqFt !== null
                        ? formatCurrency(results.costPerSqFt)
                        : results.categories.length}
                    </p>
                    <p className="mt-1 text-xs text-text-muted">
                      {results.costPerSqFt !== null ? "Per square foot" : "Cost categories"}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="rounded-xl border border-border-default bg-brand-blue-light p-6">
                  <p className="text-sm font-bold text-text-primary">Track actual costs vs. estimates</p>
                  <p className="mt-1 text-sm text-text-muted">
                    Piece Work Pro tracks your real job costs as they happen &mdash; so you can compare your estimates to
                    actual spending and get more accurate over time.
                  </p>
                  <Button href="https://app.pieceworkpro.com/signup" variant="primary" size="sm" className="mt-4" external>
                    Try It Free <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center rounded-2xl border-2 border-dashed border-border-default bg-white p-12">
                <div className="text-center">
                  <Landmark className="mx-auto h-12 w-12 text-text-muted/30" aria-hidden="true" />
                  <p className="mt-4 font-heading text-xl text-text-muted">Your results will appear here</p>
                  <p className="mt-2 text-sm text-text-muted/70">
                    Enter your job costs to see a full cost breakdown with contingency.
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

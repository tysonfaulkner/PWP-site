"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Mail, ArrowRight } from "lucide-react";

export function GuideForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name") || "",
          email: data.get("email"),
        }),
      });

      const json = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-green-200 bg-green-50 p-8 text-center sm:p-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mt-4 font-heading text-2xl text-text-primary">
          Success!
        </h3>
        <p className="mt-2 text-text-muted">
          Your free guide is on its way. Check your inbox — it should arrive
          in the next few minutes.
        </p>
        <div className="mt-4 flex items-center gap-2 text-sm text-text-muted/70">
          <Mail className="h-4 w-4" />
          <span>Don&apos;t see it? Check your spam folder.</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="guide-name"
          className="block text-sm font-medium text-text-primary"
        >
          First Name
        </label>
        <input
          type="text"
          id="guide-name"
          name="name"
          placeholder="Your first name"
          className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      <div>
        <label
          htmlFor="guide-email"
          className="block text-sm font-medium text-text-primary"
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="guide-email"
          name="email"
          required
          placeholder="you@company.com"
          className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary placeholder:text-text-muted/60 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-8 py-4 text-base font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-orange-dark hover:shadow-md active:shadow-sm disabled:opacity-60"
      >
        {status === "submitting" ? (
          "Sending..."
        ) : (
          <>
            Get the Free Guide <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-text-muted">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}

"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Download, ArrowRight } from "lucide-react";

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

      if (res.ok && json.downloadUrl) {
        setStatus("success");
        // Trigger the PDF download
        const link = document.createElement("a");
        link.href = json.downloadUrl;
        link.download = "how-to-pay-your-crew-20-percent-more.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
          Your guide is downloading!
        </h3>
        <p className="mt-2 text-text-muted">
          Check your downloads folder. We also sent you a copy by email.
        </p>
        <a
          href="/how-to-pay-your-crew-20-percent-more.pdf"
          download
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-blue px-6 py-3 font-bold text-white transition-colors hover:bg-brand-blue-dark"
        >
          <Download className="h-5 w-5" />
          Download Again
        </a>
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

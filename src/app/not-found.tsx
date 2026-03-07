import { Metadata } from "next";
import Link from "next/link";
import { HardHat, ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-bg-dark">
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center lg:px-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-orange/10">
          <HardHat className="h-10 w-10 text-brand-orange" aria-hidden="true" />
        </div>
        <p className="mt-6 font-mono text-6xl font-bold text-brand-blue">404</p>
        <h1 className="mt-4 font-heading text-3xl text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-text-on-dark-muted">
          Looks like this page went off-site. It might have been moved, deleted,
          or never existed in the first place.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 font-body text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-body text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Read the Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

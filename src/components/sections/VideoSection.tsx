"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";

export function VideoSection() {
  return (
    <section className="bg-bg-subtle">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <AnimateIn className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">See It in Action</span>
          <h2 className="mt-3 font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
            Watch How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
            Watch Tyson walk you through how Piece Work Pro makes piece work tracking simple for any contractor.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.15} className="mt-12">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border-default bg-white shadow-xl">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/RQnVtTscRqw"
                title="Piece Work Pro — How It Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

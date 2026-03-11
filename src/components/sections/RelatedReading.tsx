import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { BookOpen, ArrowRight } from "lucide-react";

interface RelatedLink {
  title: string;
  href: string;
  description: string;
}

interface RelatedReadingProps {
  links: RelatedLink[];
}

export function RelatedReading({ links }: RelatedReadingProps) {
  if (links.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        <AnimateIn>
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-brand-blue" aria-hidden="true" />
            <h2 className="font-heading text-2xl text-text-primary">Related Reading</h2>
          </div>
        </AnimateIn>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {links.map((link, i) => (
            <AnimateIn key={link.href} delay={0.1 * (i + 1)}>
              <Link
                href={link.href}
                className="group flex items-start gap-4 rounded-xl border border-border-default p-5 transition-all hover:border-brand-blue/30 hover:shadow-md"
              >
                <div className="flex-1">
                  <h3 className="font-body text-base font-bold text-text-primary transition-colors group-hover:text-brand-blue">
                    {link.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-text-muted">{link.description}</p>
                </div>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-colors group-hover:text-brand-blue" aria-hidden="true" />
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}

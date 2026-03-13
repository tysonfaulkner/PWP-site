import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories, categoryToSlug } from "@/lib/blog";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Clock } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog — Piece Work & Payroll Guides",
  description:
    "Tips, guides, and insights on piece work pay, construction payroll, job costing, and crew management from the team at Piece Work Pro.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h1 className="font-heading text-4xl text-white sm:text-5xl">Blog</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Practical advice on piece work pay, payroll, job costing, and running a more profitable crew.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-b border-border-default bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-4" aria-label="Blog categories">
            <span className="shrink-0 rounded-lg bg-brand-blue px-4 py-2 text-sm font-medium text-white">
              All Posts
            </span>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/category/${categoryToSlug(cat)}`}
                className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-text-body transition-colors hover:bg-bg-subtle hover:text-text-primary"
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          {posts.length === 0 ? (
            <AnimateIn className="text-center">
              <p className="text-lg text-text-muted">Blog posts coming soon. Check back shortly.</p>
            </AnimateIn>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <AnimateIn key={post.slug} delay={index * 0.05}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-default bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex flex-1 flex-col p-6">
                      {post.category && (
                        <Link
                          href={`/blog/category/${categoryToSlug(post.category)}`}
                          className="relative z-10 mb-3 self-start text-xs font-bold uppercase tracking-wider text-brand-orange transition-colors hover:text-brand-orange-dark"
                        >
                          {post.category}
                        </Link>
                      )}
                      <h2 className="font-heading text-xl text-text-primary transition-colors group-hover:text-brand-blue">
                        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{post.description}</p>
                      <div className="mt-4 flex items-center gap-4 border-t border-border-default pt-4 text-xs text-text-muted">
                        <span>{post.author}</span>
                        <span>&middot;</span>
                        <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                        <span className="ml-auto flex items-center gap-1">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {post.readingTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </AnimateIn>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

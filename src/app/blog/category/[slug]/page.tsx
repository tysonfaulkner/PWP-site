import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCategories, getPostsByCategory, slugToCategory, categoryToSlug } from "@/lib/blog";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Clock } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((c) => ({ slug: categoryToSlug(c) }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return {};

  const posts = getPostsByCategory(category);

  return {
    title: `${category} Articles — Piece Work Pro Blog`,
    description: `${posts.length} articles about ${category.toLowerCase()} — piece work pay, crew management, and job costing tips for contractors.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = slugToCategory(slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category);
  const allCategories = getAllCategories();

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Category</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">{category}</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              {posts.length} article{posts.length !== 1 ? "s" : ""} about {category.toLowerCase()} for contractors who do piece work.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="border-b border-border-default bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex gap-1 overflow-x-auto py-4" aria-label="Blog categories">
            <Link
              href="/blog"
              className="shrink-0 rounded-lg px-4 py-2 text-sm font-medium text-text-body transition-colors hover:bg-bg-subtle hover:text-text-primary"
            >
              All Posts
            </Link>
            {allCategories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/category/${categoryToSlug(cat)}`}
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  cat === category
                    ? "bg-brand-blue text-white"
                    : "text-text-body hover:bg-bg-subtle hover:text-text-primary"
                }`}
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
        </div>
      </section>

      <CTASection />
    </>
  );
}

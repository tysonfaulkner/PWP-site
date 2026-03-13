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

const categoryIntros: Record<string, { description: string; topics: string[] }> = {
  "Job Costing": {
    description:
      "Job costing is how contractors figure out what every project actually costs in labor. Without real numbers, you are guessing at bids and hoping for the best. These articles break down how to track costs by project, compare estimates to actuals, and use your data to bid smarter on the next one.",
    topics: [
      "Tracking labor costs by project — not just by week",
      "Comparing your bid to what you actually spent",
      "Catching overruns before they eat your margin",
      "Using past job data to write better estimates",
    ],
  },
  Payroll: {
    description:
      "Construction payroll is more complicated than most industries. You have crew members on multiple job sites, different piece rates for different tasks, and wage compliance rules that vary by state. These articles cover how to run payroll faster, avoid expensive mistakes, and make sure every worker is paid correctly.",
    topics: [
      "Calculating piece rate pay with real-world examples",
      "Staying compliant with minimum wage and overtime laws",
      "Automating payroll to save hours every week",
      "Choosing the right tools for piece rate payroll",
    ],
  },
  Roofing: {
    description:
      "Roofing is one of the most common trades to use piece rate pay. Paying by the square is simple in theory, but tracking it across multiple jobs and crew members takes the right system. These articles cover everything from setting fair piece rates to calculating labor costs per roof.",
    topics: [
      "Setting and adjusting piece rates per square",
      "Calculating roofing labor costs accurately",
      "Managing crew production across job sites",
      "Pricing roofing jobs for maximum profitability",
    ],
  },
  Construction: {
    description:
      "Piece work in construction spans every trade — from framing and masonry to electrical and painting. Each trade has its own units, rates, and challenges. These articles cover how to set up piece rate systems for construction crews and track production across multiple trades on the same job site.",
    topics: [
      "Setting piece rates for different construction trades",
      "Tracking production across multiple job sites",
      "Keeping labor costs predictable on every project",
      "Transitioning crews from hourly to piece rate pay",
    ],
  },
  Manufacturing: {
    description:
      "Manufacturing piece work means paying workers for each unit they produce. It is common on assembly lines, in packaging operations, and on fabrication floors. These articles cover how to set fair rates, track output efficiently, and handle the compliance challenges that come with piece rate pay in factories.",
    topics: [
      "Setting piece rates for factory and assembly work",
      "Tracking output across shifts and production lines",
      "Balancing speed and quality in piece rate systems",
      "Meeting minimum wage and overtime requirements",
    ],
  },
  Management: {
    description:
      "Managing a crew that works piece rate is different from managing hourly workers. The incentives are different, the conversations are different, and the data you need is different. These articles cover practical management advice for contractors who pay by the piece — from tracking performance metrics to motivating your best people.",
    topics: [
      "Using production data to manage your crew",
      "Having fair conversations about performance",
      "Retaining your best workers with the right incentives",
      "Building accountability without micromanaging",
    ],
  },
  Guides: {
    description:
      "New to piece work? These guides walk you through the basics — what piece rate pay is, how it works, and how to set it up in your business. Whether you run a roofing crew, a construction company, or a manufacturing operation, start here to understand the fundamentals.",
    topics: [
      "Understanding piece rate pay and how it works",
      "Deciding if piece work is right for your business",
      "Setting up a piece rate system step by step",
      "Tracking piece work from paper to digital",
    ],
  },
};

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

      {/* Category Introduction */}
      {categoryIntros[category] && (
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-12 lg:px-8 lg:py-16">
            <AnimateIn>
              <h2 className="font-heading text-2xl text-text-primary sm:text-3xl">
                About {category} Articles
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-body">
                {categoryIntros[category].description}
              </p>
              <h3 className="mt-6 text-sm font-bold uppercase tracking-wider text-text-muted">
                Topics Covered
              </h3>
              <ul className="mt-3 space-y-2">
                {categoryIntros[category].topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                    {topic}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </section>
      )}

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

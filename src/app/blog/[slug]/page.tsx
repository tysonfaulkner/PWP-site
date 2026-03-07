import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Clock, ArrowLeft, User, Calendar } from "lucide-react";
import { MDXContent } from "@/components/blog/MDXContent";
import { BlogPostJsonLd } from "@/components/seo/JsonLd";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostJsonLd
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author}
        slug={slug}
      />
      {/* Hero */}
      <section className="bg-bg-dark py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnimateIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-on-dark-muted transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Blog
            </Link>
          </AnimateIn>
          <AnimateIn delay={0.05}>
            {post.category && (
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-brand-orange">
                {post.category}
              </span>
            )}
            <h1 className="mt-3 font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">{post.description}</p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-text-on-dark-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                {post.author}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span>&middot;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {post.readingTime}
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <article className="bg-bg-default">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-body prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-li:text-text-body prose-blockquote:border-brand-blue prose-blockquote:text-text-muted">
            <MDXContent content={post.content} />
          </div>
        </div>
      </article>

      {/* Back to Blog CTA */}
      <section className="border-t border-border-default bg-bg-subtle">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center lg:px-8">
          <AnimateIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-body text-sm font-bold text-brand-blue transition-colors hover:text-brand-blue-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to all posts
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}

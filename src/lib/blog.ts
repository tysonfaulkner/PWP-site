import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  featuredImage?: string;
  category?: string;
  content: string;
  readingTime: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const fullPath = path.join(BLOG_DIR, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      description: data.description || "",
      author: data.author || "Tyson Faulkner",
      tags: data.tags || [],
      featuredImage: data.featuredImage || undefined,
      category: data.category || undefined,
      content,
      readingTime: stats.text,
    };
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category).filter(Boolean) as string[]);
  return Array.from(categories);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const posts = getAllPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      // Shared tags get 2 points each
      for (const tag of p.tags) {
        if (current.tags.includes(tag)) score += 2;
      }
      // Same category gets 3 points
      if (p.category && p.category === current.category) score += 3;
      return { post: p, score };
    })
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score);

  // If we don't have enough related posts, fill with recent posts
  const related = scored.map((s) => s.post);
  if (related.length < limit) {
    const remaining = posts.filter(
      (p) => p.slug !== slug && !related.some((r) => r.slug === p.slug)
    );
    related.push(...remaining.slice(0, limit - related.length));
  }

  return related.slice(0, limit);
}

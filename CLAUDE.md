# Piece Work Pro Website

## Rules
- NEVER commit or push changes without explicit permission from the user
- NEVER push directly to main. All changes must be on a separate branch with a PR created to merge to main

## Project Overview
- **Product**: Piece Work Pro — SaaS for contractors to track piece work, run payroll, control job costs
- **Company**: Piece Work Pro LLC, Post Falls, ID 83854. Founded by Tyson Faulkner
- **Tech Stack**: Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, MDX blog
- **Design System**: See `memory/design-system.md` in the project-level claude config

## Key Architecture Decisions
- Tailwind v4 uses `@theme inline` in globals.css (no tailwind.config.ts)
- `@plugin "@tailwindcss/typography"` for prose classes
- AnimateIn uses `useInView` hook + `animate` prop (not `whileInView` — headless preview issue)
- Blog uses MDX with gray-matter frontmatter, content in `/content/blog/`
- MDXContent component is async server component (NOT "use client")
- Pricing page: server component (page.tsx) + client component (PricingContent.tsx) for metadata to work
- Contact form and guide form use Mailerlite API (env var `MAILERLITE_API_KEY`)
- JSON-LD schema in layout head via server components

## Important URLs
- App: https://app.pieceworkpro.com/signin
- YouTube: https://www.youtube.com/embed/RQnVtTscRqw
- Social: facebook.com/pieceworkpro, instagram.com/pieceworkpro, x.com/pieceworkpro
- Support email: support@pieceworkpro.com
- Formspree (deprecated): contact form now uses Mailerlite

## Directory Structure
- `/src/app/` — Next.js App Router pages
- `/src/components/sections/` — reusable page sections (ContactForm, GuideForm, GuideCTA, etc.)
- `/src/components/tools/` — interactive calculator client components
- `/content/blog/` — MDX blog posts with gray-matter frontmatter
- `/content/lead-magnets/` — lead magnet source files and PDF generation scripts
- `/public/guides/` — downloadable PDF assets (gated behind email capture)

## Email & Lead Capture
- **Service**: Mailerlite (free tier)
- **Contact form** (`/api/contact`): subscribes to "Contact Form" group (ID: `181854020549216069`)
- **Guide form** (`/api/guide`): subscribes to "Lead Magnet #1" group (ID: `181854035145393323`)
- **Lead magnet PDF**: `/public/guides/pay-more-to-double-your-profit.pdf`
- **Guide landing page**: `/guide`
- **GuideCTA component**: reusable CTA added to homepage, all tool pages, and all blog posts
- **Email delivery**: Set up Mailerlite automation triggered by "Lead Magnet #1" group join

## Interactive Tools
- Tools landing page: `/tools`
- 20 calculator tools in `/src/app/tools/` — all ungated, with SEO metadata + FAQ content
- Client components in `/src/components/tools/`

## Blog
- 56 MDX articles in `/content/blog/`
- Dates staggered across publish timeline (not all same day)
- GuideCTA auto-included on every blog post page

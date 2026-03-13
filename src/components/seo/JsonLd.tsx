interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Piece Work Pro",
        legalName: "Piece Work Pro LLC",
        url: "https://pieceworkpro.com",
        logo: "https://pieceworkpro.com/images/Piece_Work_Pro_Logo_Text.jpg",
        description:
          "Piece work tracking and payroll software for contractors. Track piece work, run payroll in minutes, and know what every job costs.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Post Falls",
          addressRegion: "ID",
          postalCode: "83854",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "support@pieceworkpro.com",
          telephone: "+1-800-956-2880",
          contactType: "customer support",
        },
        founder: {
          "@type": "Person",
          name: "Tyson Faulkner",
        },
        sameAs: [
          "https://www.facebook.com/pieceworkpro",
          "https://www.instagram.com/pieceworkpro",
          "https://x.com/pieceworkpro",
        ],
      }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Piece Work Pro",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, iOS, Android",
        description:
          "Track piece work, run payroll in minutes, and know what every job costs. Built for contractors by a contractor.",
        offers: [
          {
            "@type": "Offer",
            name: "Solo Plan",
            price: "0",
            priceCurrency: "USD",
            description: "Free forever for solo users",
          },
          {
            "@type": "Offer",
            name: "Team Plan",
            price: "10",
            priceCurrency: "USD",
            description: "Per user per month",
          },
        ],
        url: "https://pieceworkpro.com",
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Piece Work Pro",
        url: "https://pieceworkpro.com",
        description:
          "Piece work tracking and payroll software for contractors.",
      }}
    />
  );
}

interface BlogPostJsonLdProps {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
}

export function BlogPostJsonLd({
  title,
  description,
  date,
  author,
  slug,
  image,
}: BlogPostJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        image: image || "https://pieceworkpro.com/images/og-image.png",
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: "Piece Work Pro",
          url: "https://pieceworkpro.com",
          logo: {
            "@type": "ImageObject",
            url: "https://pieceworkpro.com/images/Piece_Work_Pro_Logo_Text.jpg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://pieceworkpro.com/blog/${slug}`,
        },
      }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageJsonLdProps {
  faqs: FAQItem[];
}

export function FAQPageJsonLd({ faqs }: FAQPageJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `https://pieceworkpro.com${item.href}`,
        })),
      }}
    />
  );
}

interface HowToStep {
  name: string;
  text: string;
}

interface HowToJsonLdProps {
  name: string;
  description: string;
  steps: HowToStep[];
}

export function HowToJsonLd({ name, description, steps }: HowToJsonLdProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        step: steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      }}
    />
  );
}

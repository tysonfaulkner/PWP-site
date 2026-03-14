import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // === Old blog posts (date-based URLs → /blog/slug) ===
      { source: "/2025/04/03/piece-work-different-construction-trades", destination: "/blog/piece-work-different-construction-trades", permanent: true },
      { source: "/2025/04/01/setting-fair-piece-rates-construction", destination: "/blog/setting-fair-piece-rates-construction", permanent: true },
      { source: "/2025/03/19/benefits-piece-work-manufacturing", destination: "/blog/benefits-piece-work-manufacturing", permanent: true },
      { source: "/2025/03/20/challenges-starting-piece-work-factories", destination: "/blog/challenges-starting-piece-work-factories", permanent: true },
      { source: "/2025/03/21/piece-work-vs-hourly-pay-manufacturing-pros-cons", destination: "/blog/piece-work-vs-hourly-pay-manufacturing-pros-cons", permanent: true },
      { source: "/2025/03/24/how-to-track-piece-work-efficiently-manufacturing", destination: "/blog/how-to-track-piece-work-efficiently-manufacturing", permanent: true },
      { source: "/2025/03/18/how-to-set-piece-rates-in-manufacturing", destination: "/blog/how-to-set-piece-rates-in-manufacturing", permanent: true },
      { source: "/2025/03/17/how-to-calculate-roofing-labor-costs", destination: "/blog/how-to-calculate-roofing-labor-costs", permanent: true },
      { source: "/2025/03/14/how-to-measure-roofing-squares-piece-work", destination: "/blog/how-to-measure-roofing-squares-piece-work", permanent: true },
      { source: "/2025/03/13/how-to-transition-hourly-to-piece-work-pay", destination: "/blog/how-to-transition-hourly-to-piece-work-pay", permanent: true },
      { source: "/2025/02/25/why-construction-managers-love-piece-work-time-savings-accountability", destination: "/blog/why-construction-managers-love-piece-work-time-savings-accountability", permanent: true },
      { source: "/2025/03/11/manage-quality-control-piece-work-pay-roofing", destination: "/blog/manage-quality-control-piece-work-pay-roofing", permanent: true },
      { source: "/2025/03/12/how-to-calculate-roofing-labor-efficiency", destination: "/blog/how-to-calculate-roofing-labor-efficiency", permanent: true },
      { source: "/2025/03/10/fair-piece-rates-for-roofing", destination: "/blog/fair-piece-rates-for-roofing", permanent: true },
      { source: "/2025/03/07/how-to-pay-roofers-per-square", destination: "/blog/how-to-pay-roofers-per-square", permanent: true },
      { source: "/2025/03/06/average-piece-rate-for-roofing", destination: "/blog/average-piece-rate-for-roofing", permanent: true },
      { source: "/2025/03/05/best-way-to-pay-roofing-crews", destination: "/blog/best-way-to-pay-roofing-crews", permanent: true },
      { source: "/2025/03/03/how-to-price-roofing-jobs-accurately", destination: "/blog/how-to-price-roofing-jobs-accurately", permanent: true },
      { source: "/2025/03/04/how-much-to-pay-per-square-in-roofing", destination: "/blog/how-much-to-pay-per-square-in-roofing", permanent: true },
      { source: "/2025/02/28/piece-work-in-manufacturing-pros-and-cons", destination: "/blog/piece-work-in-manufacturing-pros-and-cons", permanent: true },
      { source: "/2025/02/27/how-to-communicate-piece-rate-pay-to-your-team-effectively", destination: "/blog/how-to-communicate-piece-rate-pay-to-your-team-effectively", permanent: true },
      { source: "/2025/02/26/debunking-5-myths-about-piece-work", destination: "/blog/debunking-5-myths-about-piece-work", permanent: true },
      { source: "/2025/02/24/onboarding-employees-to-a-piece-rate-system-best-practices", destination: "/blog/onboarding-employees-to-a-piece-rate-system-best-practices", permanent: true },
      { source: "/2025/02/21/cleaning-services-and-piece-rate-a-beginners-guide", destination: "/blog/cleaning-services-and-piece-rate-a-beginners-guide", permanent: true },
      { source: "/2025/02/20/is-piece-work-right-for-your-business-top-questions-to-ask", destination: "/blog/is-piece-work-right-for-your-business-top-questions-to-ask", permanent: true },
      { source: "/2025/02/19/job-costing-101-simplify-tracking", destination: "/blog/job-costing-101-simplify-tracking", permanent: true },
      { source: "/2025/02/05/understanding-piece-work", destination: "/blog/understanding-piece-work", permanent: true },
      { source: "/2025/02/06/piece-work-vs-hourly-pay-which-is-more-motivational", destination: "/blog/piece-work-vs-hourly-pay-which-is-more-motivational", permanent: true },
      { source: "/2025/02/07/key-benefits-of-a-piece-rate-system-for-small-construction-teams", destination: "/blog/key-benefits-of-a-piece-rate-system-for-small-construction-teams", permanent: true },
      { source: "/2025/02/10/overcoming-common-objections-to-piece-rate-in-the-roofing-industry", destination: "/blog/overcoming-common-objections-to-piece-rate-in-the-roofing-industry", permanent: true },
      { source: "/2025/02/11/how-to-properly-calculate-piece-rate-pay-with-examples", destination: "/blog/how-to-properly-calculate-piece-rate-pay-with-examples", permanent: true },
      { source: "/2025/02/12/essential-tools-for-managing-piece-rate-payroll", destination: "/blog/essential-tools-for-managing-piece-rate-payroll", permanent: true },
      { source: "/2025/02/13/top-5-mistakes-businesses-make-when-shifting-to-piece-work", destination: "/blog/top-5-mistakes-businesses-make-when-shifting-to-piece-work", permanent: true },
      { source: "/2025/02/17/psychology-of-piece-work-how-incentives-drive-performance", destination: "/blog/psychology-of-piece-work-how-incentives-drive-performance", permanent: true },
      { source: "/2025/02/14/piece-work-agriculture", destination: "/blog/piece-work-agriculture", permanent: true },
      { source: "/2025/02/18/evaluating-and-tracking-crew-performance-metrics-that-matter", destination: "/blog/evaluating-and-tracking-crew-performance-metrics-that-matter", permanent: true },

      // === Old blog posts with trailing slash ===
      { source: "/2025/:month/:day/:slug/", destination: "/blog/:slug", permanent: true },

      // === Old page redirects ===
      { source: "/complete-guide-piece-work-pay-construction", destination: "/blog/understanding-piece-work", permanent: true },
      { source: "/ultimate-guide-to-piece-work-in-manufacturing", destination: "/blog/piece-work-in-manufacturing-pros-and-cons", permanent: true },
      { source: "/what-is-piece-rate-pay-roofing-companies", destination: "/blog/roofing-piece-rate-guide", permanent: true },
      { source: "/product", destination: "/features", permanent: true },
      { source: "/solutions", destination: "/industries", permanent: true },
      { source: "/why-piece-work-pro", destination: "/about", permanent: true },
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/trades", destination: "/industries", permanent: true },

      // === Old category redirects ===
      { source: "/category/piece-work-info", destination: "/blog/category/piece-work-basics", permanent: true },
      { source: "/category/construction", destination: "/blog/category/construction", permanent: true },
      { source: "/category/agriculture", destination: "/blog/category/agriculture", permanent: true },
      { source: "/category/crew-performance", destination: "/blog/category/crew-management", permanent: true },
      { source: "/category/cleaning", destination: "/blog/category/cleaning", permanent: true },
      { source: "/category/manufacturing", destination: "/blog/category/manufacturing", permanent: true },
      { source: "/category/roofing", destination: "/blog/category/roofing", permanent: true },
      { source: "/category/uncategorized", destination: "/blog", permanent: true },

      // === Trailing slash variants for pages ===
      { source: "/complete-guide-piece-work-pay-construction/", destination: "/blog/understanding-piece-work", permanent: true },
      { source: "/ultimate-guide-to-piece-work-in-manufacturing/", destination: "/blog/piece-work-in-manufacturing-pros-and-cons", permanent: true },
      { source: "/what-is-piece-rate-pay-roofing-companies/", destination: "/blog/roofing-piece-rate-guide", permanent: true },
      { source: "/product/", destination: "/features", permanent: true },
      { source: "/solutions/", destination: "/industries", permanent: true },
      { source: "/why-piece-work-pro/", destination: "/about", permanent: true },
      { source: "/resources/", destination: "/blog", permanent: true },
      { source: "/trades/", destination: "/industries", permanent: true },
      { source: "/category/:slug/", destination: "/blog/category/:slug", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

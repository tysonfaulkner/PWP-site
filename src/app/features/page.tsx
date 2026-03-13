import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { CTASection } from "@/components/sections/CTASection";
import {
  Clock,
  Timer,
  DollarSign,
  BarChart3,
  MapPin,
  Smartphone,
  SlidersHorizontal,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features — Tracking, Payroll & Job Costing",
  description:
    "Track piece work, log hours, run payroll in minutes, and know what every job costs. Piece Work Pro gives contractors the tools they actually need — nothing more.",
};

const features = [
  {
    icon: Clock,
    title: "Piece Work Tracking",
    description:
      "Your crew logs every piece when they clock out. Shingles, squares, feet of fence — whatever you pay by the piece, it gets tracked automatically.",
    href: "/features/time-tracking",
  },
  {
    icon: Timer,
    title: "Time Tracking",
    description:
      "Crew clocks in and out from their phone. You see who's working, where they are, and how long they've been on the job. No paper time cards.",
    href: "/features/time-tracking",
  },
  {
    icon: DollarSign,
    title: "Payroll Reports",
    description:
      "Pull payroll for any date range in seconds. See breakdowns by person, by day, by project. Export and pay your crew — the whole thing takes minutes.",
    href: "/features/payroll",
  },
  {
    icon: BarChart3,
    title: "Job Costing",
    description:
      "Know exactly what every job costs you in labor. See if you're making money or losing it — before it's too late to fix it.",
    href: "/features/job-costing",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description:
      "See where your crew clocks in and out on a map. Know they're on the right job site without having to drive out and check.",
    href: "/features/time-tracking",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Works on any phone — iPhone or Android. Your crew downloads the app, logs in, and they're ready to go. No training needed.",
    href: "/features/time-tracking",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Pay Rates",
    description:
      "Set piece rates per task, per project, or per crew member. Hourly, piece rate, or a mix of both. Your pay structure, your rules.",
    href: "/features/payroll",
  },
  {
    icon: ShieldCheck,
    title: "User Roles",
    description:
      "Give foremen the access they need without showing them everything. Control who can see costs, approve time, or manage crew.",
    href: "/features/time-tracking",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Features
            </span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
              Everything You Need to Track Piece Work
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              No bloated software. No features you'll never touch. Just the
              tools that save you time, cut errors, and tell you exactly where
              your money is going.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <AnimateIn key={feature.title} delay={index * 0.06}>
                <Link href={feature.href} className="group block h-full">
                  <div className="relative h-full rounded-2xl border border-border-default bg-white p-8 transition-all duration-200 hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-lg">
                    <div className="inline-flex rounded-xl bg-brand-blue/10 p-3">
                      <feature.icon
                        className="h-6 w-6 text-brand-blue"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-4 font-heading text-2xl text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {feature.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contractors Choose PWP */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl lg:text-5xl">
              Built by a Contractor, for Contractors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              Piece Work Pro was built by a roofing contractor who was tired of
              spreadsheets and paper time cards. Every feature exists because it
              solves a real problem on real job sites.
            </p>
          </AnimateIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                stat: "80%",
                label: "Less Time on Payroll",
                desc: "What used to take hours every Friday now takes minutes. Pull reports, export, done.",
              },
              {
                stat: "5 min",
                label: "Payroll Time",
                desc: "Pick a date range, pull the report, export. That's it. Your crew gets paid faster.",
              },
              {
                stat: "$0",
                label: "To Start",
                desc: "Free for solo users. No credit card. No contracts. Upgrade when you're ready.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-default bg-white p-8 text-center">
                  <span className="font-mono text-4xl font-bold text-brand-blue">
                    {item.stat}
                  </span>
                  <h3 className="mt-2 font-heading text-2xl text-text-primary">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  ArrowRight,
  Clock,
  MapPin,
  Smartphone,
  ShieldCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Time Tracking — Track Piece Work & Hours",
  description:
    "Your crew clocks in from their phone, logs piece work when they clock out, and you see it all in real time. No paper. No spreadsheets. Works on any device.",
};

const highlights = [
  {
    icon: Clock,
    title: "Clock In & Out from Any Phone",
    description:
      "Your crew taps one button to clock in. When they clock out, they log their piece work right there. No paper slips. No end-of-week guessing.",
  },
  {
    icon: MapPin,
    title: "GPS on Every Clock-In",
    description:
      "See exactly where your crew clocks in and out on a map. Know they're on the right job without driving across town to check.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Device",
    description:
      "iPhone, Android, tablet, or desktop. Your crew uses whatever they have. No special hardware to buy. No expensive equipment.",
  },
  {
    icon: ShieldCheck,
    title: "Approve & Lock Time Cards",
    description:
      "Review every time card in one dashboard. Approve with a click. Once locked, nobody can change the numbers. Full audit trail.",
  },
];

const crewSteps = [
  {
    step: "1",
    title: "Open the App",
    description:
      "Your crew member opens Piece Work Pro on their phone. Takes two seconds.",
  },
  {
    step: "2",
    title: "Clock In to a Project",
    description:
      "They pick the project from a list you set up and tap Clock In. GPS location is captured automatically.",
  },
  {
    step: "3",
    title: "Do the Work",
    description:
      "They work. You can see who's clocked in and where they are in real time from your dashboard.",
  },
  {
    step: "4",
    title: "Clock Out & Log Pieces",
    description:
      "When the day is done, they clock out and enter their piece work — squares, sheets, feet, whatever you track. Done.",
  },
];

export default function TimeTrackingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Time Tracking
            </span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl">
              Track Time and Piece Work from Any Device
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Your crew clocks in from their phone, logs piece work when they
              clock out, and you see everything in real time. No paper. No
              spreadsheets. No chasing anyone down on Friday.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="https://app.pieceworkpro.com/signin"
                variant="orange"
                size="lg"
                external
              >
                Get Started Free{" "}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                href="/pricing"
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                View Pricing
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Screenshot + Highlights */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn direction="right">
              <Image
                src="/images/screenshots/mobile-views.png"
                alt="Piece Work Pro mobile app showing crew clock-in and piece work entry"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </AnimateIn>

            <div className="space-y-8">
              {highlights.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.1} direction="left">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                      <item.icon
                        className="h-5 w-5 text-brand-blue"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-body text-lg font-bold text-text-primary">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Your Crew Uses It */}
      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <AnimateIn className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">
              Dead Simple
            </span>
            <h2 className="mt-3 font-heading text-3xl text-text-primary sm:text-4xl">
              How Your Crew Uses It
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              If they can use a phone, they can use Piece Work Pro. Most crews
              are up and running in under five minutes.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {crewSteps.map((item, i) => (
              <AnimateIn key={item.step} delay={i * 0.08}>
                <div className="relative h-full rounded-2xl border border-border-default bg-white p-8">
                  <span className="font-mono text-4xl font-bold text-brand-blue/20">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-body text-lg font-bold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Extra Benefits */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimateIn direction="right">
              <div className="space-y-6">
                <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
                  Stop Losing Money to Bad Time Data
                </h2>
                <p className="text-lg leading-relaxed text-text-body">
                  Paper time cards get lost. Spreadsheets have errors. Your crew
                  forgets to write things down. Every mistake costs you money —
                  either you overpay, or you underbid the next job because your
                  numbers are wrong.
                </p>
                <ul className="space-y-3">
                  {[
                    "Real-time visibility into who's working and where",
                    "Accurate piece counts logged at the point of work",
                    "Automatic pay calculations based on your rates",
                    "User roles so foremen can manage their crew",
                    "Full history — nothing gets lost or forgotten",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-text-body"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn direction="left" delay={0.15}>
              <div className="rounded-2xl border border-border-default bg-white p-8 shadow-sm lg:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/10">
                    <Users
                      className="h-5 w-5 text-brand-orange"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-body text-lg font-bold text-text-primary">
                    Built for Crews, Not Cubicles
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Most time tracking apps are built for office workers sitting at
                  a desk. Piece Work Pro is built for crews on a job site. Big
                  buttons. Simple screens. Works with gloves on. Your crew will
                  actually use it — because it takes less time than writing on a
                  piece of paper.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

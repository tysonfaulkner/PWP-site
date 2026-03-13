import { Metadata } from "next";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Mail, Phone, MapPin, HelpCircle, CreditCard, Bug, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Have a question about Piece Work Pro? Get in touch — we respond within 24 hours. Reach us by email, phone, or the contact form below.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-dark py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-orange">Contact</span>
            <h1 className="mt-3 font-heading text-4xl text-white sm:text-5xl lg:text-6xl">How Can We Help?</h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-lg text-text-on-dark-muted">
              Questions about Piece Work Pro? Need help getting set up? We respond within 24 hours.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-bg-subtle">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <AnimateIn direction="right" className="lg:col-span-2">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                    <Mail className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-bold text-text-primary">Email</h3>
                    <a href="mailto:support@pieceworkpro.com" className="text-sm text-brand-blue hover:text-brand-blue-dark">
                      support@pieceworkpro.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                    <Phone className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-bold text-text-primary">Phone</h3>
                    <a href="tel:18009562880" className="text-sm text-brand-blue hover:text-brand-blue-dark">
                      1-800-956-2880
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                    <MapPin className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-bold text-text-primary">Office</h3>
                    <p className="text-sm text-text-muted">
                      2785 W Seltice Way, Ste A
                      <br />
                      Post Falls, ID 83854
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn direction="left" delay={0.15} className="lg:col-span-3">
              <form action="https://formspree.io/f/xpznqwwl" method="POST" className="rounded-2xl border border-border-default bg-white p-8 shadow-sm lg:p-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-2 block w-full rounded-lg border border-border-default bg-bg-default px-4 py-3 text-sm text-text-body placeholder:text-text-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                      Email <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-border-default bg-bg-default px-4 py-3 text-sm text-text-body placeholder:text-text-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary">
                    How can we help? <span className="text-brand-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 block w-full rounded-lg border border-border-default bg-bg-default px-4 py-3 text-sm text-text-body placeholder:text-text-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-brand-blue-dark hover:shadow-md sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* How We Can Help */}
      <section className="bg-bg-default">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <AnimateIn className="text-center">
            <h2 className="font-heading text-3xl text-text-primary sm:text-4xl">
              What Can We Help With?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              Whether you are exploring Piece Work Pro for the first time or need help with your existing account, our team is here for you.
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: HelpCircle,
                title: "Getting Started",
                desc: "Need help setting up your account, adding crew members, or configuring piece rates? We will walk you through every step.",
              },
              {
                icon: CreditCard,
                title: "Account & Billing",
                desc: "Questions about your plan, billing, or upgrading from Solo to Team? We can sort it out quickly.",
              },
              {
                icon: Bug,
                title: "Technical Support",
                desc: "Something not working right? Report a bug or get help with a feature. We typically resolve issues within 24 hours.",
              },
              {
                icon: Lightbulb,
                title: "Feature Requests",
                desc: "Have an idea that would make Piece Work Pro better for your crew? We read every suggestion and build based on real feedback.",
              },
            ].map((item) => (
              <AnimateIn key={item.title}>
                <div className="rounded-2xl border border-border-default bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue/10">
                    <item.icon className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg text-text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
